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
  age INT NOT NULL
  );
        
 DROP TABLE IF EXISTS fight
  ;
CREATE TABLE fight
 (
  id INT PRIMARY KEY NOT NULL
      AUTO_INCREMENT,
  year_event INT NOT NULL,
  type_event VARCHAR
      (150) NOT NULL,
  name_event VARCHAR
      (150) NOT NULL,
  category VARCHAR
      (150) NOT NULL,
  weight_cat INT NOT NULL,
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