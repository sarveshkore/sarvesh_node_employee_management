"use strict"

module.exports = {
	main: function(req, res, appEnv)
	{
		const uuid = require("uuid4");
		const string_functions = require(appEnv.appPath + '/src/generic/string-functions');
		const array_functions = require('../generic/array-functions');
		const realtime_data_date_splitter = require(appEnv.appPath + '/src/generic/realtime_data_date_splitter');

		res.setHeader("Content-Type", "application/json");

		try
		{
			let user_timezone = 'utc+0000';
			
			if (req.query.hasOwnProperty('time_zone'))
			{
				user_timezone = req.sanitize(req.query.time_zone);
			}

			let enable_real_time = false;
			if (req.query.hasOwnProperty("enable_real_time") == true && req.query.enable_real_time == "true")
			{
				enable_real_time = true;
			}

			const start_time_utc = string_functions.unixToUtc(string_functions.stringToUnixTime(req.sanitize(req.query.start_date).replace('_', ' ')), user_timezone);
			const end_time_utc = string_functions.unixToUtc(string_functions.stringToUnixTime(req.sanitize(req.query.end_date).replace('_', ' ')), user_timezone);
			
			const org_id = parseInt(appEnv.sessionOBJ.getSessionValue(req, appEnv, "organization_id"));

			const realtime_timeline_breakdown = realtime_data_date_splitter.realtimeDataDateSplitter(start_time_utc, end_time_utc, user_timezone, enable_real_time, 7);
			
			// Timezone adjustment for MongoDB query.
			let timeslot_offset = start_time_utc % 3600;
			let mongo_timestamp_groupby = { "$cond": {
					"if": { "$eq": [ { "$mod": [ "$startTimestamp", 3600 ] }, timeslot_offset ] },
					"then": "$startTimestamp",
					"else": { "$subtract": [ "$startTimestamp", 1800 ] }
				}
			};

			let exclude_weekends = false;
			if (req.query.hasOwnProperty("exclude_weekends") && req.query.exclude_weekends == "true")
			{
				exclude_weekends = true;
			}

			let timescale_lap_size = 3600;
			
			if ((end_time_utc - start_time_utc) > (3600 * 48))
			{
				if (user_timezone.charAt(3) == '-')
				{
					let time_adjustment_value = ( 0 - ( ( parseInt( user_timezone.substring(4, 6) * 3600 ) ) + ( user_timezone.substring(6, 8) * 60 ) ) );
					mongo_timestamp_groupby = { "$subtract": [ "$startTimestamp", { "$mod": [ { "$add": [ "$startTimestamp", time_adjustment_value ] }, 86400 ] } ] };
				}
				else
				{
					let time_adjustment_value = ( ( parseInt( user_timezone.substring(4, 6) * 3600 ) ) + ( user_timezone.substring(6, 8) * 60 ) );
					mongo_timestamp_groupby = { "$subtract": [ "$startTimestamp", { "$mod": [ { "$add": [ "$startTimestamp", time_adjustment_value ] }, 86400 ] } ] };
				}

				timescale_lap_size = 86400;
			}

			// Logic to handle generic segmentation filters
			let segment_filter_type = null;
			let segment_group = null;

			if (req.query.hasOwnProperty("segment_group") && req.query.segment_group != "" && req.query.segment_group != "0")
			{
				segment_group = req.sanitize(req.query.segment_group);
				segment_filter_type = "segment_groups";

				if (segment_group != Array.isArray)
				{
					segment_group = [ segment_group ];
				}
			}

			// Logic to handle custom segmentation filters
			let segment_filter = null;
			if (req.query.hasOwnProperty("segment_filter") && req.query.segment_filter != "" && req.query.segment_filter != "0")
			{
				segment_filter = req.sanitize(req.query.segment_filter);
				segment_filter_type = "segments";

				if (segment_filter != Array.isArray)
				{
					segment_filter = [ segment_filter ];
				}
			}

			let app_id = 0;
			let app_code = null;

			let fetchGuidesData = function(appGuideID = null)
			{
				let response_data = { "guideDetails": [] };
				let raw_data_v1 = [];
				let realtime_events_data = [];
				let semaphore_flag = 3;

				let sendFinalResponse = function()
				{
					try
					{
						for (let itr2 = 0; itr2 < response_data["guideDetails"].length; itr2++)
						{
							for (let itr3 = 0; itr3 < raw_data_v1.length; itr3++)
							{
								if (raw_data_v1[itr3]["startTimestamp"] == response_data["guideDetails"][itr2]["_startTimestamp"])
								{
									response_data["guideDetails"][itr2]["counts"]["guide_unique_play"] = response_data["guideDetails"][itr2]["counts"]["guide_unique_play"] + raw_data_v1[itr3]["counts"]["guide_unique_play"];
									response_data["guideDetails"][itr2]["counts"]["guide_play"] = response_data["guideDetails"][itr2]["counts"]["guide_play"] + raw_data_v1[itr3]["counts"]["guide_play"];
									response_data["guideDetails"][itr2]["counts"]["guide_complete"] = response_data["guideDetails"][itr2]["counts"]["guide_complete"] + raw_data_v1[itr3]["counts"]["guide_complete"];
								
									break;
								}
							}

							let unique_user_ids = [];

							for (let itr4 = 0; itr4 < realtime_events_data.length; itr4++)
							{
								if (realtime_events_data[itr4]["startTimestamp"] >= response_data["guideDetails"][itr2]["_startTimestamp"] && realtime_events_data[itr4]["startTimestamp"] < (response_data["guideDetails"][itr2]["_startTimestamp"] + timescale_lap_size))
								{
									unique_user_ids = array_functions.mergeArray(unique_user_ids, realtime_events_data[itr4]["counts"]["guide_unique_play"])
									response_data["guideDetails"][itr2]["counts"]["guide_play"] = response_data["guideDetails"][itr2]["counts"]["guide_play"] + realtime_events_data[itr4]["counts"]["guide_play"];
									response_data["guideDetails"][itr2]["counts"]["guide_complete"] = response_data["guideDetails"][itr2]["counts"]["guide_complete"] + realtime_events_data[itr4]["counts"]["guide_complete"];
								}
							}

							response_data["guideDetails"][itr2]["counts"]["guide_unique_play"] = response_data["guideDetails"][itr2]["counts"]["guide_unique_play"] + parseInt(unique_user_ids.length)

							delete response_data["guideDetails"][itr2]["_startTimestamp"];
						}

						response_data["legends"] = [
							{
								"legendTitle": "Total Played",
								"associatedDataPoint": "guide_play",
								"area": true,
								"color": "#f79b42"
							},
							{
								"legendTitle": "Unique Played",
								"associatedDataPoint": "guide_unique_play",
								"area": true,
								"color": "#00a6d9"
							},
							{
								"legendTitle": "Completed",
								"associatedDataPoint": "guide_complete",
								"area": true,
								"color": "#38b6a0"
							}
						];

						response_data["graphData"] = JSON.parse(JSON.stringify(response_data["guideDetails"]))
						delete response_data["guideDetails"]

						appEnv.responseGenerator.sendResponseWithCache(appEnv, req, res, false, 200, response_data, 0, null);
					}
					catch(err)
					{
						const log_unique_id = uuid().toString();
						appEnv.handleErrorLogs.emailErrorLogs(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, 3, err, 0, __filename, req.path, log_unique_id);
						appEnv.responseGenerator.sendResponse(res, true, 400, null, "005-011-001", "Something went wrong.", log_unique_id);
						return;
					}
				}

				// Code to fetch Legacy data.
				let match_params = {};

				if (req.queryPolluted.hasOwnProperty('event_source'))
				{
					if (typeof req.queryPolluted.event_source != "object")
					{
						req.queryPolluted.event_source = [ req.sanitize(req.queryPolluted.event_source) ];
					}

					if ( (req.queryPolluted.event_source.includes("all")) || (req.queryPolluted.event_source.includes("creator") && req.queryPolluted.event_source.includes("player")))
					{
						match_params["_id"] = { "$exists": true };
					}
					else
					{
						if (req.queryPolluted.event_source.includes("creator"))
						{
							match_params["sourceApp"] = "creator";
						}
						else if  (req.queryPolluted.event_source.includes("player"))
						{
							match_params["sourceApp"] = { "$ne": "creator" };
						}
						else
						{
							match_params["sourceApp"] = "notDefined";
						}
					}
				}
				else
				{
					match_params["_id"] = { "$exists": true };
				}

				if (appGuideID != null)
				{
					match_params["guideID"] = { "$in": appGuideID };
				}

				appEnv.mongoOBJ.getMongoDBObject(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), function(err, client, dbs) {
					const db = client.db(dbs[appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey))]);
					
					db.collection('org_guide_stats_' + org_id.toString()).aggregate([
						{ "$match": match_params },
						{ "$match": { "$and": [
								{ "startTimestamp": { "$gte": (start_time_utc - 2678400) } },
								{ "startTimestamp": { "$lte": end_time_utc } }
							] }
						},
						{ "$project": { "_id": 0, "events": 1 } },
						{ "$unwind": "$events" },
						{ "$match": { "$and": [
								{ "events.startTimestamp": { "$gte": start_time_utc } },
								{ "events.startTimestamp": { "$lte": end_time_utc } }
							] }
						},
						{ "$replaceRoot": { "newRoot": "$events" } },
						{ "$group": { 
								"_id": {
									"startTimestamp": mongo_timestamp_groupby
								},
								"guidePlay": { "$sum": "$guidePlay" },
								"guideComplete": { "$sum": "$guideComplete" },
								"guidePlayedBy": { "$push": "$guidePlayedBy" }
							}
						},
						{ "$project": {
								"_id": 0,
								"startTimestamp": "$_id.startTimestamp",
								"counts.guide_play": "$guidePlay",
								"counts.guide_complete": {
									"$cond": {
										"if": { "$gte": [ "$guideComplete", "$guidePlay" ]},
										"then": "$guidePlay",
										"else": "$guideComplete"
									}
								},
								"counts.guide_unique_play": { 
									"$size": { 
										"$reduce": { 
											"input": "$guidePlayedBy",
											"initialValue": [],
											"in": {
												"$setUnion": ["$$value", "$$this"]
											}
										}
									}
								}
							}
						},
						{ "$sort": { "startTimestamp": 1 } }
					], { "allowDiskUse": true }).toArray(function(err, data) {
						client.close();

						try
						{
							if (!err)
							{
								let timeleap_offset = 3600;
								let date_conversion_function = string_functions.dateTimeToHourAmPm;

								if ((end_time_utc - start_time_utc) > (3600 * 48))
								{
									timeleap_offset = 86400;
									date_conversion_function = string_functions.dateStringToDDMMYYYY;
								}

								let temp_time_iterator = start_time_utc;
								let itr1 = 0;

								while (temp_time_iterator < end_time_utc)
								{
									if(!exclude_weekends || (exclude_weekends && ![ 6, 0 ].includes(new Date(string_functions.unixToUtcReverse(temp_time_iterator, user_timezone) * 1000).getDay()) ))
									{
										if (itr1 < data.length && parseInt(temp_time_iterator) == parseInt(data[itr1]["startTimestamp"]))
										{
											data[itr1]["_startTimestamp"] = data[itr1]["startTimestamp"];
											data[itr1]["startTimestamp"] = date_conversion_function(string_functions.unixToUtcReverse(temp_time_iterator, user_timezone));
											response_data["guideDetails"].push(data[itr1]);
											itr1++;
										}
										else
										{
											let temp_object = { "_startTimestamp": temp_time_iterator, "startTimestamp": temp_time_iterator, "counts": { "guide_unique_play": 0, "guide_play": 0, "guide_complete": 0 } };
											temp_object["startTimestamp"] = date_conversion_function(string_functions.unixToUtcReverse(temp_time_iterator, user_timezone));
											response_data["guideDetails"].push(temp_object);
										}
									}

									temp_time_iterator = temp_time_iterator + timeleap_offset;
								}
								
								semaphore_flag--;

								if (semaphore_flag == 0)
								{
									sendFinalResponse();
								}
							}
							else
							{
								const log_unique_id = uuid().toString();
								appEnv.handleErrorLogs.emailErrorLogs(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, 2, err, 0, __filename, req.path, log_unique_id);
								appEnv.responseGenerator.sendResponse(res, true, 400, null, "005-011-002", "Something went wrong.", log_unique_id);
								return;
							}
						}
						catch(err)
						{
							const log_unique_id = uuid().toString();
							appEnv.handleErrorLogs.emailErrorLogs(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, 3, err, 0, __filename, req.path, log_unique_id);
							appEnv.responseGenerator.sendResponse(res, true, 400, null, "005-011-003", "Something went wrong.", log_unique_id);
							return;
						}
					});
				});

				// Code to get V1 data.
				let match_params2 = {};

				// Modified to add support for multiple filters.
				if (req.queryPolluted.hasOwnProperty('event_source') && req.queryPolluted.event_source != "")
				{
					let event_sources = [];

					if (typeof req.queryPolluted.event_source == "object")
					{
						for (var itx0 = 0; itx0 < req.queryPolluted.event_source.length; itx0++)
						{
							if (appEnv.envConfig.CLIENT_CATEGORY_LIST.includes(req.sanitize(req.queryPolluted.event_source[itx0]).toLowerCase()))
							{
								event_sources.push(req.queryPolluted.event_source[itx0].toLowerCase());
							} 
						}
					}
					else
					{
						if (appEnv.envConfig.CLIENT_CATEGORY_LIST.includes(req.queryPolluted.event_source.toLowerCase()))
						{
							event_sources.push(req.sanitize(req.queryPolluted.event_source).toLowerCase());
						}
					}

					if (event_sources.length > 0)
					{
						if (!match_params2.hasOwnProperty("$and"))
						{
							match_params2["$and"] = [];
						}

						match_params2["$and"].push({ "eventSource": { "$in": event_sources } });
					}
				}

				appEnv.mongoOBJ.getMongoDBObject(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), function(err, client, dbs) {
					const db = client.db(dbs[appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey))]);
					
					db.collection("name_of_collection").aggregate([
						{ "$match": { "$and": [
								{ "startTimestamp": { "$gte": 1651363200 } },
								{ "startTimestamp": { "$lte": 1751363200 } },
								{ "documentType": "guide" },
							] }
						},
						{ "$project": {
								"_id": 0,
								"startTimestamp": "$startTimestamp",
								"eventSource": { "$arrayElemAt": [ "$attribute3", 0 ] },
								"guideID": { "$arrayElemAt": [ "$attribute5", 0 ] },
								"breakdown": "$breakdown"
							}
						},
						{ "$unwind": "$breakdown" },
						{ "$project": {
								"_id": 0,
								"breakdown.startTimestamp": "$breakdown.startTimestamp",
								"breakdown.liveGuidePlayCounts": "$breakdown.guidePlay",
								"breakdown.guidePlayedBy": "$breakdown.playedBy",
								"breakdown.guideComplete": "$breakdown.guideComplete"
							}
						},
						{ "$match": { "$and": [
								{ "breakdown.startTimestamp": { "$gte": realtime_timeline_breakdown["mongo_start_time_unix"] } },
								{ "breakdown.startTimestamp": { "$lte": realtime_timeline_breakdown["mongo_end_time_unix"] } }
							] }
						},
						{ "$replaceRoot": { "newRoot": "$breakdown" } },
						{ "$group": { 
								"_id": {
									"startTimestamp": mongo_timestamp_groupby
								},
								"liveGuidePlayCounts": { "$sum": "$liveGuidePlayCounts" },
								"guidePlayedBy": { "$push": "$guidePlayedBy" },
								"guideComplete": { "$sum": "$guideComplete" },
							}
						},
						{ "$project": {
								"_id": 1,
								"liveGuidePlayCounts": 1,
								"guideComplete": 1,
								"uniquePlay": { "$reduce": { "input": "$guidePlayedBy", "initialValue": [], "in": { "$setUnion": ["$$value", "$$this"] } } }
							}
						},
						{ "$project": {
								"_id": 0,
								"startTimestamp": "$_id.startTimestamp",
								"counts.guide_play": "$liveGuidePlayCounts",
								"counts.guide_complete": "$guideComplete",
								"counts.guide_unique_play": { "$size": "$uniquePlay" }
							}
						},
						{ "$sort": { "startTimestamp": 1 } }
					], { "allowDiskUse": true }).toArray(function(err, data1) {
						client.close();

						try
						{
							if (!err)
							{
								raw_data_v1 = data1;
							}
							else
							{
								const log_unique_id = uuid().toString();
								appEnv.handleErrorLogs.emailErrorLogs(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, 2, err, 0, __filename, req.path, log_unique_id);
							}

							semaphore_flag--;

							if (semaphore_flag == 0)
							{
								sendFinalResponse();
							}
						}
						catch(err)
						{
							const log_unique_id = uuid().toString();
							appEnv.handleErrorLogs.emailErrorLogs(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, 3, err, 0, __filename, req.path, log_unique_id);
							appEnv.responseGenerator.sendResponse(res, true, 400, null, "005-011-004", "Something went wrong.", log_unique_id);
							return;
						}
					});
				});

				const appsStringToSQLCondition = require(appEnv.appPath + '/src/utilities/event_source_parser_postgres').appsStringToSQLCondition;

				appEnv.postgreQryBldr.executeQuery(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)),
					"SELECT\
						(unix_timestamp - (unix_timestamp % 1800)) as unix_timeslot,\
						SUM(guide_play_count) as guide_play,\
						SUM(guide_complete_count::Integer) as guide_complete,\
						array_agg(DISTINCT unique_user_id) as guide_unique_play\
					FROM\
						(\
							SELECT\
								extract(epoch from event_time)::Integer as unix_timestamp,\
								unique_user_id as unique_user_id,\
								1 as guide_play_count,\
								miscellaneous->>'guide_complete' as guide_complete_count\
							FROM\
								" + appEnv.postgreQryBldr.pg_default_schema[appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey))] + ".txn_insights_event_logs\
							WHERE\
								event_type = 'mi_guide_play'\
								AND event_time >= $1\
								AND event_time <= $2\
								AND org_id = $3\
								AND (app_code = $4 OR app_code = $5)\
								AND entity_code in ('" + appGuideID.join('\',\'') + "')\
								AND " + appsStringToSQLCondition(appEnv, req.sanitize(req.queryPolluted.event_source)) + "\
						) raw_events\
					GROUP BY\
						unix_timeslot\
					ORDER BY\
						unix_timeslot;",
				[ string_functions.unixToUtcString(realtime_timeline_breakdown["pg_start_time_unix"]), string_functions.unixToUtcString(realtime_timeline_breakdown["pg_end_time_unix"]), org_id, app_id, app_code ], function(err, eventsData) {
					try
					{
						if (!err)
						{
							for (let itx1 = 0; itx1 < eventsData.length; itx1++)
							{
								try
								{
									let realtime_events_object = { "startTimestamp": eventsData[itx1]["unix_timeslot"], "counts": {} };

									realtime_events_object["counts"]["guide_play"] = parseInt(eventsData[itx1]["guide_play"]);
									realtime_events_object["counts"]["guide_complete"] = parseInt(eventsData[itx1]["guide_complete"]);
									realtime_events_object["counts"]["guide_unique_play"] = eventsData[itx1]["guide_unique_play"];

									realtime_events_data.push(realtime_events_object);
								} catch(e) {}
							}

							semaphore_flag--;

							if (semaphore_flag == 0)
							{
								sendFinalResponse();
							}
						}
						else
						{
							const log_unique_id = uuid().toString();
							appEnv.handleErrorLogs.emailErrorLogs(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, 1, err, 0, __filename, req.path, log_unique_id);
							appEnv.responseGenerator.sendResponse(res, true, 400, null, "005-011-005", "Failed to get data.", log_unique_id);
							return;
						}
					}
					catch(err)
					{
						const log_unique_id = uuid().toString();
						appEnv.handleErrorLogs.emailErrorLogs(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, 3, err, 0, __filename, req.path, log_unique_id);
						appEnv.responseGenerator.sendResponse(res, true, 400, null, "005-011-006", "Failed to get data.", log_unique_id);
						return;
					}
				});
			}
			
			if (req.query.hasOwnProperty("app_code") && req.query.app_code != "" && req.sanitize(req.query.app_code) != null && req.sanitize(req.query.app_code).toLowerCase() != 'null')
			{
				app_code = req.sanitize(req.query.app_code)
			}
			else if (req.query.hasOwnProperty("app_id") && req.sanitize(req.query.app_id) != "" && req.sanitize(req.query.app_id) != null && req.sanitize(req.query.app_id).toLowerCase() != 'null')
			{
				app_id = parseInt(req.sanitize(req.query.app_id));
			}
			else
			{
				appEnv.responseGenerator.sendResponse(res, true, 400, null, "005-011-007", "Invalid or missing details.");
				return;
			}

			let auxilary_where_condition = "";

			if (req.query.hasOwnProperty('filter') && req.query.filter != '')
			{
				if (req.query.filter == "published")
				{
					auxilary_where_condition = auxilary_where_condition + " AND tour.is_active = 1 AND tour.is_published = 1";
				}
				else if (req.query.filter == "unpublished")
				{
					auxilary_where_condition = auxilary_where_condition + " AND tour.is_active = 1 AND tour.is_published = 0";
				}
				else if (req.query.filter == "deleted")
				{
					auxilary_where_condition = auxilary_where_condition + " AND tour.is_active = 0";
				}
			}
			
			let secDbQry1 = {
				"mssql": {
					"sqlQuery": "SELECT tour.tour_id as 'guide_id', tour.tour_title as 'guide_title', tour.is_published as 'is_published', tour.application_id as 'app_id', apps.external_id as 'app_code', tour.is_active as 'is_active' FROM dbo.tbl_gss_tour tour, dbo.tbl_gss_application apps WHERE tour.application_id = apps.application_id AND tour.organization_id = ? AND (apps.application_id = ? OR apps.external_id = ?)" + auxilary_where_condition + ";",
					"parameters": [ org_id, app_id, app_code ]
				},
				"mysql": {
					"sqlQuery": "SELECT tour.tour_id as 'guide_id', tour.tour_title as 'guide_title', tour.is_published as 'is_published', tour.application_id as 'app_id', apps.external_id as 'app_code', tour.is_active as 'is_active' FROM dbo.tbl_gss_tour tour, dbo.tbl_gss_application apps WHERE tour.application_id = apps.application_id AND tour.organization_id = ? AND (apps.application_id = ? OR apps.external_id = ?)" + auxilary_where_condition + ";",
					"parameters": [ org_id, app_id, app_code ]
				}
			};
			appEnv.aggQryBldr.executeQuery(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, secDbQry1, function(err, dbResponse1) {
				try
				{
					if(err)
					{
						const log_unique_id = uuid().toString();
						appEnv.handleErrorLogs.emailErrorLogs(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, 0, err, 0, __filename, req.path, log_unique_id);
					}

					let guide_id = [];
					app_code = "";

					if (dbResponse1.recordset.length > 0)
					{
						app_code = dbResponse1.recordset[0].app_code;
						app_id = parseInt(dbResponse1.recordset[0].app_id);

						for (let itr1 = 0; itr1 < dbResponse1.recordset.length; itr1++)
						{
							guide_id.push(dbResponse1.recordset[itr1]['guide_id']);
						}
					}
					
					if (segment_group != null)
					{
						let segmnt_grp_filtr = require("../utilities/segment_filter_validator");

						segmnt_grp_filtr.validateSegmentRule(appEnv, appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), org_id, app_id, segment_group, segment_filter_type, function(err, data) {
							fetchGuidesData(array_functions.intersect(data, guide_id));
						});
					}
					else if (segment_filter_type == "segments")
					{
						let segmnt_grp_filtr = require("../utilities/segment_filter_validator");

						segmnt_grp_filtr.validateSegmentRule(appEnv, appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), org_id, app_id, segment_filter, segment_filter_type, function(err, data) {
							fetchGuidesData(array_functions.intersect(data, guide_id));
						});
					}
					else
					{
						fetchGuidesData(guide_id);
					}
				}
				catch(err)
				{
					const log_unique_id = uuid().toString();
					appEnv.handleErrorLogs.emailErrorLogs(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, 3, err, 0, __filename, req.path, log_unique_id);
					appEnv.responseGenerator.sendResponse(res, true, 400, null, "005-011-008", "Something went wrong.", log_unique_id);
					return;
				}
			});
		}
		catch(err)
		{
			const log_unique_id = uuid().toString();
			appEnv.handleErrorLogs.emailErrorLogs(appEnv.envConfig.APP_KEY.indexOf(req.sanitize(req.headers.appkey)), appEnv, 3, err, 0, __filename, req.path, log_unique_id);
			appEnv.responseGenerator.sendResponse(res, true, 400, null, "005-011-009", "Invalid or missing details.", log_unique_id);
			return;
		}
	}
}