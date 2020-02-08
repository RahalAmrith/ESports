select * FROM blog order by rid desc limit 10

insert into blog("title" ,"img" ,"content", "date") values('Hello Postgres3', 'httplink3', 'this is the conten3t', current_date )

delete from blog where rid = 4