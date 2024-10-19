SELECT * FROM STUDENT order by s_id asc;
SELECT s_id, max(marks) from student group by s_id order by s_id asc;
-- SELECT  max(marks),max(s_name) from student;
-- select * from student where marks=max(marks);

-- select max from 
-- (select max(marks) as max,s_id from student group by s_id order by s_id asc);

--MAX OF 2ND, 3RD MARKS
-- SELECT s_id,s_name,city,marks FROM student WHERE marks = 
-- 	(SELECT MAX(marks) FROM student where marks<
-- 		(SELECT MAX(marks) FROM student where marks<
-- 			(SELECT MAX(marks) FROM student)));


--MAX OF 2ND, 3RD, 4TH MARKS
SELECT 
  s_id, 
  s_name, 
  city, 
  marks 
FROM 
  student 
WHERE 
  marks = (
    SELECT 
      MAX(marks) 
    FROM 
      student 
    where 
      marks < (
        SELECT 
          MAX(marks) 
        FROM 
          student 
        where 
          marks < (
            SELECT 
              MAX(marks) 
            FROM 
              student
          )
      )
  -- );

-- shorcut for getting highest marks and (where 2) defines where 3rd highest marks
select s_id,s_name,city,marks from student s1 where 2 = (select count(distinct marks) from student s2
	where s2.marks>s1.marks);

alter table student add column result varchar(255);
select * from student where marks<40;
select s_id,s_name,marks,result from student order by s_id asc ;
update student set result='fail' where marks<40;
update student set result='pass' where marks>40;
