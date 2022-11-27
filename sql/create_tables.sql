drop table if exists product;
drop table if exists product_house;

create table product_house (
	house_id serial not null, 
	house_name varchar(50) unique not null,
	img varchar(50) not null,
	constraint product_house_pk primary key(house_id)
);

create table product (
	product_id serial not null,
	product_name varchar(50) not null,
	img varchar(50) not null,
	claimable boolean default true,
	link varchar(255),
	product_house_id integer,
	constraint product_pk primary key(product_id),
	constraint product_house_fk foreign key(product_house_id) references product_house(house_id)
);