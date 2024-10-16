select * from student order by s_id asc;

create table location(l_id int primary key, location varchar(255));
insert into location values(1,'Ghatkopar'),(2,'Kurla'),(3,'Bhandup');
select * from location;

create table student_data(s_id int primary key, s_name varchar(255), location_id int, foreign key(location_id) references location(l_id));
insert into student_data values(1,'Shekhar',2);
insert into student_data values(2,'Sarvesh',1);
insert into student_data values(3,'Abhjeet',3);
insert into student_data values(4,'Rupesh',1);
insert into student_data values(5,'Harsh',3);
insert into student_data values(6,'Amish',2);
select * from student_data order by s_id asc;

create table course(c_id int primary key, c_name varchar(255) );
insert into course values(1,'Computer Science'),(2,'Mechanical'), (3,'Civil'), (4,'Electronics'),(5,'Textile'),(6,'Chemical');
select * from course;

alter table student_data add column course int, add constraint fk_course foreign key(course) references course(c_id);
update student_data set course=5 where s_id=1;
update student_data set course=2 where s_id=5;
update student_data set course=1 where s_id=3;
update student_data set course=3 where s_id=2;
update student_data set course=5 where s_id=4;

-- INNER JOIN
SELECT a.s_id, a.s_name, b.location, c.c_name 
FROM student_data a 
JOIN location b ON a.location_id = b.l_id
JOIN course c ON a.course = c.c_id order by s_id asc;

-- LEFT JOIN
SELECT a.s_id, a.s_name, b.location, c.c_name 
FROM student_data a 
LEFT JOIN location b ON a.location_id = b.l_id
LEFT JOIN course c ON a.course = c.c_id order by s_id asc;

--RIGHT JOIN
SELECT a.s_id, a.s_name, b.location, c.c_name 
FROM student_data a 
RIGHT JOIN location b ON a.location_id = b.l_id
RIGHT JOIN course c ON a.course = c.c_id order by s_id asc;

--FULL OUTER JOIN
SELECT a.s_id, a.s_name, b.location, c.c_name 
FROM student_data a 
FULL OUTER JOIN location b ON a.location_id = b.l_id
FULL OUTER JOIN course c ON a.course = c.c_id order by s_id asc;