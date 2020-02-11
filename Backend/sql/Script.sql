select * FROM blog order by rid desc limit 10

insert into blog("title" ,"img", "description" ,"content", "date") values('Hello Postgres3', 'httplink3', 'this is description', 'this is the conten3t', current_date )

alter table blog rename column "content" to "description";

alter table blog add column "content" varchar;

delete from blog where rid = 16
