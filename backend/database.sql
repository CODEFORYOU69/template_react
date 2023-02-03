DROP TABLE IF EXISTS user
    ;

    CREATE TABLE user
    (
      id INT PRIMARY KEY NOT NULL
      AUTO_INCREMENT,
  firstname VARCHAR
      (45) NOT NULL,
  lastname VARCHAR
      (45) NOT NULL,
  country VARCHAR
        (150) NOT NULL ,
  userRole VARCHAR
      (45) NOT NULL ,
  email VARCHAR
      (100) NOT NULL,
  hashedPassword VARCHAR
      (100) NOT NULL,
  passwordtoken VARCHAR
      (100) NULL DEFAULT NULL
  );

  INSERT INTO `user` VALUES (1,'younes','ouasmi','france','','y.ouasmi@gmail.com','$argon2id$v=19$m=65536,t=5,p=1$YCyKvGh7InAURzAjksJp5A$5OuV3y1JAt+5OLWxxQZebgC52PGAslEtQkw9rbfoguo',NULL);

        
DROP TABLE IF EXISTS fighter
;

CREATE TABLE fighter
    (
      id INT PRIMARY KEY NOT NULL
      AUTO_INCREMENT,
  firstname VARCHAR
      (45) NOT NULL,
  lastname VARCHAR
      (45) NOT NULL,
  sex VARCHAR
      (10) NOT NULL,
  country VARCHAR
      (45) NOT NULL ,
  category VARCHAR
      (45) NOT NULL ,
  weightCat INT NOT NULL,
  age INT NOT NULL,
  img VARCHAR
      (255) NULL DEFAULT NULL
  );

  INSERT INTO `fighter` VALUES (1,'YOUNES','OUASMI','Male','FRANCE','Senior',-74,38,NULL),(2,'CHRISTOPHER','DUBOIS','Male','FRANCE','Senior',-74,33,NULL),(3,'LEO','ATCHEKZAI','Male','AFGHANISTAN','Senior',-63,18,NULL);

        
 DROP TABLE IF EXISTS fight
  ;
CREATE TABLE fight
 (
  id INT PRIMARY KEY NOT NULL
      AUTO_INCREMENT,
  eventyear INT NOT NULL,
  eventtype VARCHAR
      (150) NOT NULL,
  eventname VARCHAR
      (150) NOT NULL,
  category VARCHAR
      (150) NOT NULL,
  weightcat INT NOT NULL,
  att_og_1_by_fighter1 INT  NULL,
  att_og_2_by_fighter1 INT  NULL,
  att_og_3_by_fighter1 INT  NULL,
  att_og_4_by_fighter1 INT  NULL,
  att_og_5_by_fighter1 INT  NULL,
  att_og_1_by_fighter2 INT  NULL,
  att_og_2_by_fighter2 INT  NULL,
  att_og_3_by_fighter2 INT  NULL,
  att_og_4_by_fighter2 INT  NULL,
  att_og_5_by_fighter2 INT  NULL,
  att_od_1_by_fighter1 INT  NULL,
  att_od_2_by_fighter1 INT  NULL,
  att_od_3_by_fighter1 INT  NULL,
  att_od_4_by_fighter1 INT  NULL,
  att_od_5_by_fighter1 INT  NULL,
  att_od_1_by_fighter2 INT NULL,
  att_od_2_by_fighter2 INT  NULL,
  att_od_3_by_fighter2 INT  NULL,
  att_od_4_by_fighter2 INT  NULL,
  att_od_5_by_fighter2 INT  NULL,
  att_fg_1_by_fighter1 INT  NULL,
  att_fg_2_by_fighter1 INT  NULL,
  att_fg_3_by_fighter1 INT  NULL,
  att_fg_4_by_fighter1 INT  NULL,
  att_fg_5_by_fighter1 INT  NULL,
  att_fg_1_by_fighter2 INT  NULL,
  att_fg_2_by_fighter2 INT  NULL,
  att_fg_3_by_fighter2 INT  NULL,
  att_fg_4_by_fighter2 INT  NULL,
  att_fg_5_by_fighter2 INT  NULL,
  att_fd_1_by_fighter1 INT  NULL,
  att_fd_2_by_fighter1 INT  NULL,
  att_fd_3_by_fighter1 INT  NULL,
  att_fd_4_by_fighter1 INT  NULL,
  att_fd_5_by_fighter1 INT  NULL,
  att_fd_1_by_fighter2 INT  NULL,
  att_fd_2_by_fighter2 INT  NULL,
  att_fd_3_by_fighter2 INT  NULL,
  att_fd_4_by_fighter2 INT  NULL,
  att_fd_5_by_fighter2 INT  NULL,
  def_og_1_by_fighter1 INT  NULL,
  def_og_2_by_fighter1 INT  NULL,
  def_og_3_by_fighter1 INT  NULL,
  def_og_4_by_fighter1 INT  NULL,
  def_og_5_by_fighter1 INT  NULL,
  def_og_1_by_fighter2 INT  NULL,
  def_og_2_by_fighter2 INT  NULL,
  def_og_3_by_fighter2 INT  NULL,
  def_og_4_by_fighter2 INT  NULL,
  def_og_5_by_fighter2 INT  NULL,
  def_od_1_by_fighter1 INT  NULL,
  def_od_2_by_fighter1 INT  NULL,
  def_od_3_by_fighter1 INT  NULL,
  def_od_4_by_fighter1 INT  NULL,
  def_od_5_by_fighter1 INT  NULL,
  def_od_1_by_fighter2 INT  NULL,
  def_od_2_by_fighter2 INT  NULL,
  def_od_3_by_fighter2 INT  NULL,
  def_od_4_by_fighter2 INT  NULL,
  def_od_5_by_fighter2 INT  NULL,
  def_fg_1_by_fighter1 INT  NULL,
  def_fg_2_by_fighter1 INT  NULL,
  def_fg_3_by_fighter1 INT  NULL,
  def_fg_4_by_fighter1 INT  NULL,
  def_fg_5_by_fighter1 INT  NULL,
  def_fg_1_by_fighter2 INT  NULL,
  def_fg_2_by_fighter2 INT  NULL,
  def_fg_3_by_fighter2 INT  NULL,
  def_fg_4_by_fighter2 INT  NULL,
  def_fg_5_by_fighter2 INT  NULL,
    def_fd_1_by_fighter1 INT  NULL,
    def_fd_2_by_fighter1 INT  NULL,
    def_fd_3_by_fighter1 INT  NULL,
    def_fd_4_by_fighter1 INT  NULL,
    def_fd_5_by_fighter1 INT  NULL,
    def_fd_1_by_fighter2 INT  NULL,
    def_fd_2_by_fighter2 INT  NULL,
    def_fd_3_by_fighter2 INT  NULL,
    def_fd_4_by_fighter2 INT  NULL,
    def_fd_5_by_fighter2 INT  NULL,
  cac_og_1_by_fighter1 INT  NULL,
    cac_og_2_by_fighter1 INT  NULL,
    cac_og_3_by_fighter1 INT  NULL,
    cac_og_4_by_fighter1 INT  NULL,
    cac_og_5_by_fighter1 INT  NULL,
    cac_og_1_by_fighter2 INT  NULL,
    cac_og_2_by_fighter2 INT  NULL,
    cac_og_3_by_fighter2 INT  NULL,
    cac_og_4_by_fighter2 INT  NULL,
    cac_og_5_by_fighter2 INT  NULL,
    cac_od_1_by_fighter1 INT  NULL,
    cac_od_2_by_fighter1 INT  NULL,
    cac_od_3_by_fighter1 INT  NULL,
    cac_od_4_by_fighter1 INT  NULL,
    cac_od_5_by_fighter1 INT  NULL,
    cac_od_1_by_fighter2 INT  NULL,
    cac_od_2_by_fighter2 INT  NULL,
    cac_od_3_by_fighter2 INT  NULL,
    cac_od_4_by_fighter2 INT  NULL,
    cac_od_5_by_fighter2 INT  NULL,
    cac_fg_1_by_fighter1 INT  NULL,
    cac_fg_2_by_fighter1 INT  NULL,
    cac_fg_3_by_fighter1 INT  NULL,
    cac_fg_4_by_fighter1 INT  NULL,
    cac_fg_5_by_fighter1 INT  NULL,
    cac_fg_1_by_fighter2 INT  NULL,
    cac_fg_2_by_fighter2 INT  NULL,
    cac_fg_3_by_fighter2 INT  NULL,
    cac_fg_4_by_fighter2 INT  NULL,
    cac_fg_5_by_fighter2 INT  NULL,
    cac_fd_1_by_fighter1 INT  NULL,
    cac_fd_2_by_fighter1 INT  NULL,
    cac_fd_3_by_fighter1 INT  NULL,
    cac_fd_4_by_fighter1 INT  NULL,
    cac_fd_5_by_fighter1 INT  NULL,
    cac_fd_1_by_fighter2 INT  NULL,
    cac_fd_2_by_fighter2 INT  NULL,
    cac_fd_3_by_fighter2 INT  NULL,
    cac_fd_4_by_fighter2 INT  NULL,
    cac_fd_5_by_fighter2 INT  NULL,
  gj_by_fighter1 INT  NULL,
  gj_by_fighter2 INT  NULL,
  fighter1_id INT  NULL,
  fighter2_id INT  NULL,
  winner_id INT  NULL,
    CONSTRAINT fk_fight_fighter1
    FOREIGN KEY
        (fighter1_id) REFERENCES fighter
        (id),
    CONSTRAINT fk_fight_fighter2
    FOREIGN KEY
        (fighter2_id) REFERENCES fighter
        (id),
  CONSTRAINT fk_fight_winner
  FOREIGN KEY
      (winner_id) REFERENCES fighter
      (id)
  );


DROP TABLE IF EXISTS fighter_has_fight
;

CREATE TABLE fighter_has_fight
(

  fighter_id INT NOT NULL,
  fight_id INT NOT NULL,
  CONSTRAINT fk_fighter_has_fight_fighter
  FOREIGN KEY
      (fighter_id) REFERENCES fighter
      (id),
  CONSTRAINT fk_fighter_has_fight_fight
  FOREIGN KEY
      (fight_id) REFERENCES fight
      (id)
  );