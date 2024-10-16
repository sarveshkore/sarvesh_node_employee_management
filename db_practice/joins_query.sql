create table location(l_id int primary key, location varchar(255));
insert into location values(1,'Ghatkopar'),(2,'Kurla'),(3,'Bhandup');

create table student(s_id int primary key, s_name varchar(255), location_id int, foreign key(location_id) references location(l_id));
insert into student values(1,'Shekhar',2);
insert into student values(2,'Sarvesh',1);
insert into student values(3,'Abhjeet',3);
insert into student values(4,'Rupesh',1);
insert into student values(5,'Harsh',3);
insert into student values(6,'Amish',2);
alter table student add column course int, add constraint fk_course foreign key(course) references course(c_id);
update student set course=5 where s_id=1;
update student set course=2 where s_id=5;
update student set course=1 where s_id=3;
update student set course=3 where s_id=2;
update student set course=5 where s_id=4;

-- select * from student a  join location b on a.location_id = b.l_id;

create table course(c_id int primary key, c_name varchar(255) );
insert into course values(1,'Computer Science'),(2,'Mechanical'), (3,'Civil'), (4,'Electronics'),(5,'Textile'),(6,'Chemical');

-- INNER JOIN
SELECT a.s_id, a.s_name, b.location, c.c_name 
FROM student a 
JOIN location b ON a.location_id = b.l_id
JOIN course c ON a.course = c.c_id;

-- LEFT JOIN
SELECT a.s_id, a.s_name, b.location, c.c_name 
FROM student a 
LEFT JOIN location b ON a.location_id = b.l_id
LEFT JOIN course c ON a.course = c.c_id;

--RIGHT JOIN
SELECT a.s_id, a.s_name, b.location, c.c_name 
FROM student a 
RIGHT JOIN location b ON a.location_id = b.l_id
RIGHT JOIN course c ON a.course = c.c_id;

--FULL OUTER JOIN
SELECT a.s_id, a.s_name, b.location, c.c_name 
FROM student a 
FULL OUTER JOIN location b ON a.location_id = b.l_id
FULL OUTER JOIN course c ON a.course = c.c_id;



WITH student_data AS (
    SELECT row_number() OVER () AS row_num, s_id, s_name, location_id, course
    FROM student
),
location_data AS (
    SELECT row_number() OVER () AS row_num, l_id, location
    FROM location
),
course_data AS (
    SELECT row_number() OVER () AS row_num, c_id, c_name
    FROM course
)
SELECT 
    student_data.s_id, student_data.s_name, student_data.location_id, student_data.course,
    location_data.l_id, location_data.location,
    course_data.c_id, course_data.c_name
FROM student_data
FULL OUTER JOIN location_data ON student_data.row_num = location_data.row_num
FULL OUTER JOIN course_data ON student_data.row_num = course_data.row_num
ORDER BY student_data.row_num;