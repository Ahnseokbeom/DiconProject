use DiconPJ;
select * from games;
desc games;
select * from GameRank; 
drop table games;
CREATE TABLE `DiconPJ`.`games` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `kind` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));