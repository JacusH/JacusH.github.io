insert into product_house 
	(house_id, house_name, img)
values
	(1, 'Takealot', 'takealot.png'),
	(2, 'Typo', 'typo.jpeg'),
	(3, 'Makro', 'makro.png');
	
insert into product 
	(product_name, img, link, product_house_id)
values
	('Headphones', 'headphones.jpeg', 'https://www.takealot.com/jbl-tune-760nc-wireless-bluetooth-noise-cancelling-over-ear-head/PLID72992843', 1),
	('Black Boots', 'boots.jpeg', 'https://www.takealot.com/linzi-ladies-fredrika-boots-black/PLID72303980?size=UK+3', 1),
	('Perfume', 'perfume.jpeg', 'https://www.takealot.com/jimmy-choo-illicit-flower-edt-100ml-for-her/PLID43825279', 1),
	('Top Pot (Purple)', 'planttop.jpeg', 'https://cottonon.com/ZA/midi-shaped-planter/1683853-55.html?dwvar_1683853-55_color=1683853-55&cgid=&originalPid=1683853-55', 2);