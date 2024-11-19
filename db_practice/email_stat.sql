create table email_stat(email_response_id integer primary key,  mailFrom varchar(255),  mailTo varchar(255),
	mailSubject varchar(255), mailMessage varchar(255),email_status varchar(255), time_stamp  timestamp);

-- create table email_stats(email_response_id integer primary key,  mailFrom varchar(255),  mailTo varchar(255),
-- 	mailSubject varchar(255), mailMessage varchar(255),email_status varchar(255), time_stamp default  timestamp);

ALTER TABLE email_stat ALTER COLUMN time_stamp SET DEFAULT CURRENT_TIMESTAMP;


alter table email_stat 
select * from email_stat;

insert into email_stat values(1,'sarvesh2k2@gmail.com','sarveshnda@gmail.com','Hello friends','Hello Friends','Sent','2020-06-22 19:10:25-07');