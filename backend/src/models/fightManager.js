const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "fight" });
  }

  find(id) {
    return this.connection.query(
      `select id, weightCat,
      category,
      type,
      nameEvent,
      year,
      att_og_1_by_fighter1,
      att_og_2_by_fighter1,
      att_og_3_by_fighter1,
      att_og_4_by_fighter1,
      att_og_5_by_fighter1,
      att_og_1_by_fighter2,
      att_og_2_by_fighter2,
      att_og_3_by_fighter2,
      att_og_4_by_fighter2,
      att_og_5_by_fighter2,
      att_od_1_by_fighter1,
      att_od_2_by_fighter1,
      att_od_3_by_fighter1,
      att_od_4_by_fighter1,
      att_od_5_by_fighter1,
      att_od_1_by_fighter2,
      att_od_2_by_fighter2,
      att_od_3_by_fighter2,
      att_od_4_by_fighter2,
      att_od_5_by_fighter2,
      att_fg_1_by_fighter1,
      att_fg_2_by_fighter1,
      att_fg_3_by_fighter1,
      att_fg_4_by_fighter1,
      att_fg_5_by_fighter1,
      att_fg_1_by_fighter2,
      att_fg_2_by_fighter2,
      att_fg_3_by_fighter2,
      att_fg_4_by_fighter2,
      att_fg_5_by_fighter2,
      att_fd_1_by_fighter1,
      att_fd_2_by_fighter1,
      att_fd_3_by_fighter1,
      att_fd_4_by_fighter1,
      att_fd_5_by_fighter1,
      att_fd_1_by_fighter2,
      att_fd_2_by_fighter2,
      att_fd_3_by_fighter2,
      att_fd_4_by_fighter2,
      att_fd_5_by_fighter2,
      def_og_1_by_fighter1,
      def_og_2_by_fighter1,
      def_og_3_by_fighter1,
      def_og_4_by_fighter1,
      def_og_5_by_fighter1,
      def_og_1_by_fighter2,
      def_og_2_by_fighter2,
      def_og_3_by_fighter2,
      def_og_4_by_fighter2,
      def_og_5_by_fighter2,
      def_od_1_by_fighter1,
      def_od_2_by_fighter1,
      def_od_3_by_fighter1,
      def_od_4_by_fighter1,
      def_od_5_by_fighter1,
      def_od_1_by_fighter2,
      def_od_2_by_fighter2,
      def_od_3_by_fighter2,
      def_od_4_by_fighter2,
      def_od_5_by_fighter2,
      def_fg_1_by_fighter1,
      def_fg_2_by_fighter1,
      def_fg_3_by_fighter1,
      def_fg_4_by_fighter1,
      def_fg_5_by_fighter1,
      def_fg_1_by_fighter2,
      def_fg_2_by_fighter2,
      def_fg_3_by_fighter2,
      def_fg_4_by_fighter2,
      def_fg_5_by_fighter2,
      def_fd_1_by_fighter1,
      def_fd_2_by_fighter1,
      def_fd_3_by_fighter1,
      def_fd_4_by_fighter1,
      def_fd_5_by_fighter1,
      def_fd_1_by_fighter2,
      def_fd_2_by_fighter2,
      def_fd_3_by_fighter2,
      def_fd_4_by_fighter2,
      def_fd_5_by_fighter2,
      cac_og_1_by_fighter1,
      cac_og_2_by_fighter1,
      cac_og_3_by_fighter1,
      cac_og_4_by_fighter1,
      cac_og_5_by_fighter1,
      cac_og_1_by_fighter2,
      cac_og_2_by_fighter2,
      cac_og_3_by_fighter2,
      cac_og_4_by_fighter2,
      cac_og_5_by_fighter2,
      cac_od_1_by_fighter1,
      cac_od_2_by_fighter1,
      cac_od_3_by_fighter1,
      cac_od_4_by_fighter1,
      cac_od_5_by_fighter1,
      cac_od_1_by_fighter2,
      cac_od_2_by_fighter2,
      cac_od_3_by_fighter2,
      cac_od_4_by_fighter2,
      cac_od_5_by_fighter2,
      cac_fg_1_by_fighter1,
      cac_fg_2_by_fighter1,
      cac_fg_3_by_fighter1,
      cac_fg_4_by_fighter1,
      cac_fg_5_by_fighter1,
      cac_fg_1_by_fighter2,
      cac_fg_2_by_fighter2,
      cac_fg_3_by_fighter2,
      cac_fg_4_by_fighter2,
      cac_fg_5_by_fighter2,
      cac_fd_1_by_fighter1,
      cac_fd_2_by_fighter1,
      cac_fd_3_by_fighter1,
      cac_fd_4_by_fighter1,
      cac_fd_5_by_fighter1,
      cac_fd_1_by_fighter2,
      cac_fd_2_by_fighter2,
      cac_fd_3_by_fighter2,
      cac_fd_4_by_fighter2,
      cac_fd_5_by_fighter2,
      gj_by_fighter1,
      gj_by_fighter2,
      fighter1_id,
      fighter2_id,
      winner_id from  ${this.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, weightcat,
      category,
        eventtype,
        eventname,
        eventyear,
      att_og_1_by_fighter1,
      att_og_2_by_fighter1,
      att_og_3_by_fighter1,
      att_og_4_by_fighter1,
      att_og_5_by_fighter1,
      att_og_1_by_fighter2,
      att_og_2_by_fighter2,
      att_og_3_by_fighter2,
      att_og_4_by_fighter2,
      att_og_5_by_fighter2,
      att_od_1_by_fighter1,
      att_od_2_by_fighter1,
      att_od_3_by_fighter1,
      att_od_4_by_fighter1,
      att_od_5_by_fighter1,
      att_od_1_by_fighter2,
      att_od_2_by_fighter2,
      att_od_3_by_fighter2,
      att_od_4_by_fighter2,
      att_od_5_by_fighter2,
      att_fg_1_by_fighter1,
      att_fg_2_by_fighter1,
      att_fg_3_by_fighter1,
      att_fg_4_by_fighter1,
      att_fg_5_by_fighter1,
      att_fg_1_by_fighter2,
      att_fg_2_by_fighter2,
      att_fg_3_by_fighter2,
      att_fg_4_by_fighter2,
      att_fg_5_by_fighter2,
      att_fd_1_by_fighter1,
      att_fd_2_by_fighter1,
      att_fd_3_by_fighter1,
      att_fd_4_by_fighter1,
      att_fd_5_by_fighter1,
      att_fd_1_by_fighter2,
      att_fd_2_by_fighter2,
      att_fd_3_by_fighter2,
      att_fd_4_by_fighter2,
      att_fd_5_by_fighter2,
      def_og_1_by_fighter1,
      def_og_2_by_fighter1,
      def_og_3_by_fighter1,
      def_og_4_by_fighter1,
      def_og_5_by_fighter1,
      def_og_1_by_fighter2,
      def_og_2_by_fighter2,
      def_og_3_by_fighter2,
      def_og_4_by_fighter2,
      def_og_5_by_fighter2,
      def_od_1_by_fighter1,
      def_od_2_by_fighter1,
      def_od_3_by_fighter1,
      def_od_4_by_fighter1,
      def_od_5_by_fighter1,
      def_od_1_by_fighter2,
      def_od_2_by_fighter2,
      def_od_3_by_fighter2,
      def_od_4_by_fighter2,
      def_od_5_by_fighter2,
      def_fg_1_by_fighter1,
      def_fg_2_by_fighter1,
      def_fg_3_by_fighter1,
      def_fg_4_by_fighter1,
      def_fg_5_by_fighter1,
      def_fg_1_by_fighter2,
      def_fg_2_by_fighter2,
      def_fg_3_by_fighter2,
      def_fg_4_by_fighter2,
      def_fg_5_by_fighter2,
      def_fd_1_by_fighter1,
      def_fd_2_by_fighter1,
      def_fd_3_by_fighter1,
      def_fd_4_by_fighter1,
      def_fd_5_by_fighter1,
      def_fd_1_by_fighter2,
      def_fd_2_by_fighter2,
      def_fd_3_by_fighter2,
      def_fd_4_by_fighter2,
      def_fd_5_by_fighter2,
      cac_og_1_by_fighter1,
      cac_og_2_by_fighter1,
      cac_og_3_by_fighter1,
      cac_og_4_by_fighter1,
      cac_og_5_by_fighter1,
      cac_og_1_by_fighter2,
      cac_og_2_by_fighter2,
      cac_og_3_by_fighter2,
      cac_og_4_by_fighter2,
      cac_og_5_by_fighter2,
      cac_od_1_by_fighter1,
      cac_od_2_by_fighter1,
      cac_od_3_by_fighter1,
      cac_od_4_by_fighter1,
      cac_od_5_by_fighter1,
      cac_od_1_by_fighter2,
      cac_od_2_by_fighter2,
      cac_od_3_by_fighter2,
      cac_od_4_by_fighter2,
      cac_od_5_by_fighter2,
      cac_fg_1_by_fighter1,
      cac_fg_2_by_fighter1,
      cac_fg_3_by_fighter1,
      cac_fg_4_by_fighter1,
      cac_fg_5_by_fighter1,
      cac_fg_1_by_fighter2,
      cac_fg_2_by_fighter2,
      cac_fg_3_by_fighter2,
      cac_fg_4_by_fighter2,
      cac_fg_5_by_fighter2,
      cac_fd_1_by_fighter1,
      cac_fd_2_by_fighter1,
      cac_fd_3_by_fighter1,
      cac_fd_4_by_fighter1,
      cac_fd_5_by_fighter1,
      cac_fd_1_by_fighter2,
      cac_fd_2_by_fighter2,
      cac_fd_3_by_fighter2,
      cac_fd_4_by_fighter2,
      cac_fd_5_by_fighter2,
      gj_by_fighter1,
      gj_by_fighter2,
      fighter1_id,
      fighter2_id,
      winner_id from  ${this.table}`
    );
  }

  insert(fight) {
    return this.connection.query(
      `insert into ${this.table} (weightcat,
        category,
        eventtype,
        eventname,
        eventyear,
        att_og_1_by_fighter1,
        att_og_2_by_fighter1,
        att_og_3_by_fighter1,
        att_og_4_by_fighter1,
        att_og_5_by_fighter1,
        att_og_1_by_fighter2,
        att_og_2_by_fighter2,
        att_og_3_by_fighter2,
        att_og_4_by_fighter2,
        att_og_5_by_fighter2,
        att_od_1_by_fighter1,
        att_od_2_by_fighter1,
        att_od_3_by_fighter1,
        att_od_4_by_fighter1,
        att_od_5_by_fighter1,
        att_od_1_by_fighter2,
        att_od_2_by_fighter2,
        att_od_3_by_fighter2,
        att_od_4_by_fighter2,
        att_od_5_by_fighter2,
        att_fg_1_by_fighter1,
        att_fg_2_by_fighter1,
        att_fg_3_by_fighter1,
        att_fg_4_by_fighter1,
        att_fg_5_by_fighter1,
        att_fg_1_by_fighter2,
        att_fg_2_by_fighter2,
        att_fg_3_by_fighter2,
        att_fg_4_by_fighter2,
        att_fg_5_by_fighter2,
        att_fd_1_by_fighter1,
        att_fd_2_by_fighter1,
        att_fd_3_by_fighter1,
        att_fd_4_by_fighter1,
        att_fd_5_by_fighter1,
        att_fd_1_by_fighter2,
        att_fd_2_by_fighter2,
        att_fd_3_by_fighter2,
        att_fd_4_by_fighter2,
        att_fd_5_by_fighter2,
        def_og_1_by_fighter1,
        def_og_2_by_fighter1,
        def_og_3_by_fighter1,
        def_og_4_by_fighter1,
        def_og_5_by_fighter1,
        def_og_1_by_fighter2,
        def_og_2_by_fighter2,
        def_og_3_by_fighter2,
        def_og_4_by_fighter2,
        def_og_5_by_fighter2,
        def_od_1_by_fighter1,
        def_od_2_by_fighter1,
        def_od_3_by_fighter1,
        def_od_4_by_fighter1,
        def_od_5_by_fighter1,
        def_od_1_by_fighter2,
        def_od_2_by_fighter2,
        def_od_3_by_fighter2,
        def_od_4_by_fighter2,
        def_od_5_by_fighter2,
        def_fg_1_by_fighter1,
        def_fg_2_by_fighter1,
        def_fg_3_by_fighter1,
        def_fg_4_by_fighter1,
        def_fg_5_by_fighter1,
        def_fg_1_by_fighter2,
        def_fg_2_by_fighter2,
        def_fg_3_by_fighter2,
        def_fg_4_by_fighter2,
        def_fg_5_by_fighter2,
        def_fd_1_by_fighter1,
        def_fd_2_by_fighter1,
        def_fd_3_by_fighter1,
        def_fd_4_by_fighter1,
        def_fd_5_by_fighter1,
        def_fd_1_by_fighter2,
        def_fd_2_by_fighter2,
        def_fd_3_by_fighter2,
        def_fd_4_by_fighter2,
        def_fd_5_by_fighter2,
        cac_og_1_by_fighter1,
        cac_og_2_by_fighter1,
        cac_og_3_by_fighter1,
        cac_og_4_by_fighter1,
        cac_og_5_by_fighter1,
        cac_og_1_by_fighter2,
        cac_og_2_by_fighter2,
        cac_og_3_by_fighter2,
        cac_og_4_by_fighter2,
        cac_og_5_by_fighter2,
        cac_od_1_by_fighter1,
        cac_od_2_by_fighter1,
        cac_od_3_by_fighter1,
        cac_od_4_by_fighter1,
        cac_od_5_by_fighter1,
        cac_od_1_by_fighter2,
        cac_od_2_by_fighter2,
        cac_od_3_by_fighter2,
        cac_od_4_by_fighter2,
        cac_od_5_by_fighter2,
        cac_fg_1_by_fighter1,
        cac_fg_2_by_fighter1,
        cac_fg_3_by_fighter1,
        cac_fg_4_by_fighter1,
        cac_fg_5_by_fighter1,
        cac_fg_1_by_fighter2,
        cac_fg_2_by_fighter2,
        cac_fg_3_by_fighter2,
        cac_fg_4_by_fighter2,
        cac_fg_5_by_fighter2,
        cac_fd_1_by_fighter1,
        cac_fd_2_by_fighter1,
        cac_fd_3_by_fighter1,
        cac_fd_4_by_fighter1,
        cac_fd_5_by_fighter1,
        cac_fd_1_by_fighter2,
        cac_fd_2_by_fighter2,
        cac_fd_3_by_fighter2,
        cac_fd_4_by_fighter2,
        cac_fd_5_by_fighter2,
        gj_by_fighter1,
        gj_by_fighter2,
        fighter1_id,
        fighter2_id,
        winner_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        fight.weightcat,
        fight.category,
        fight.eventtype,
        fight.eventname,
        fight.eventyear,
        fight.att_og_1_by_fighter1,
        fight.att_og_2_by_fighter1,
        fight.att_og_3_by_fighter1,
        fight.att_og_4_by_fighter1,
        fight.att_og_5_by_fighter1,
        fight.att_og_1_by_fighter2,
        fight.att_og_2_by_fighter2,
        fight.att_og_3_by_fighter2,
        fight.att_og_4_by_fighter2,
        fight.att_og_5_by_fighter2,
        fight.att_od_1_by_fighter1,
        fight.att_od_2_by_fighter1,
        fight.att_od_3_by_fighter1,
        fight.att_od_4_by_fighter1,
        fight.att_od_5_by_fighter1,
        fight.att_od_1_by_fighter2,
        fight.att_od_2_by_fighter2,
        fight.att_od_3_by_fighter2,
        fight.att_od_4_by_fighter2,
        fight.att_od_5_by_fighter2,
        fight.att_fg_1_by_fighter1,
        fight.att_fg_2_by_fighter1,
        fight.att_fg_3_by_fighter1,
        fight.att_fg_4_by_fighter1,
        fight.att_fg_5_by_fighter1,
        fight.att_fg_1_by_fighter2,
        fight.att_fg_2_by_fighter2,
        fight.att_fg_3_by_fighter2,
        fight.att_fg_4_by_fighter2,
        fight.att_fg_5_by_fighter2,
        fight.att_fd_1_by_fighter1,
        fight.att_fd_2_by_fighter1,
        fight.att_fd_3_by_fighter1,
        fight.att_fd_4_by_fighter1,
        fight.att_fd_5_by_fighter1,
        fight.att_fd_1_by_fighter2,
        fight.att_fd_2_by_fighter2,
        fight.att_fd_3_by_fighter2,
        fight.att_fd_4_by_fighter2,
        fight.att_fd_5_by_fighter2,
        fight.def_og_1_by_fighter1,
        fight.def_og_2_by_fighter1,
        fight.def_og_3_by_fighter1,
        fight.def_og_4_by_fighter1,
        fight.def_og_5_by_fighter1,
        fight.def_og_1_by_fighter2,
        fight.def_og_2_by_fighter2,
        fight.def_og_3_by_fighter2,
        fight.def_og_4_by_fighter2,
        fight.def_og_5_by_fighter2,
        fight.def_od_1_by_fighter1,
        fight.def_od_2_by_fighter1,
        fight.def_od_3_by_fighter1,
        fight.def_od_4_by_fighter1,
        fight.def_od_5_by_fighter1,
        fight.def_od_1_by_fighter2,
        fight.def_od_2_by_fighter2,
        fight.def_od_3_by_fighter2,
        fight.def_od_4_by_fighter2,
        fight.def_od_5_by_fighter2,
        fight.def_fg_1_by_fighter1,
        fight.def_fg_2_by_fighter1,
        fight.def_fg_3_by_fighter1,
        fight.def_fg_4_by_fighter1,
        fight.def_fg_5_by_fighter1,
        fight.def_fg_1_by_fighter2,
        fight.def_fg_2_by_fighter2,
        fight.def_fg_3_by_fighter2,
        fight.def_fg_4_by_fighter2,
        fight.def_fg_5_by_fighter2,
        fight.def_fd_1_by_fighter1,
        fight.def_fd_2_by_fighter1,
        fight.def_fd_3_by_fighter1,
        fight.def_fd_4_by_fighter1,
        fight.def_fd_5_by_fighter1,
        fight.def_fd_1_by_fighter2,
        fight.def_fd_2_by_fighter2,
        fight.def_fd_3_by_fighter2,
        fight.def_fd_4_by_fighter2,
        fight.def_fd_5_by_fighter2,
        fight.cac_og_1_by_fighter1,
        fight.cac_og_2_by_fighter1,
        fight.cac_og_3_by_fighter1,
        fight.cac_og_4_by_fighter1,
        fight.cac_og_5_by_fighter1,
        fight.cac_og_1_by_fighter2,
        fight.cac_og_2_by_fighter2,
        fight.cac_og_3_by_fighter2,
        fight.cac_og_4_by_fighter2,
        fight.cac_og_5_by_fighter2,
        fight.cac_od_1_by_fighter1,
        fight.cac_od_2_by_fighter1,
        fight.cac_od_3_by_fighter1,
        fight.cac_od_4_by_fighter1,
        fight.cac_od_5_by_fighter1,
        fight.cac_od_1_by_fighter2,
        fight.cac_od_2_by_fighter2,
        fight.cac_od_3_by_fighter2,
        fight.cac_od_4_by_fighter2,
        fight.cac_od_5_by_fighter2,
        fight.cac_fg_1_by_fighter1,
        fight.cac_fg_2_by_fighter1,
        fight.cac_fg_3_by_fighter1,
        fight.cac_fg_4_by_fighter1,
        fight.cac_fg_5_by_fighter1,
        fight.cac_fg_1_by_fighter2,
        fight.cac_fg_2_by_fighter2,
        fight.cac_fg_3_by_fighter2,
        fight.cac_fg_4_by_fighter2,
        fight.cac_fg_5_by_fighter2,
        fight.cac_fd_1_by_fighter1,
        fight.cac_fd_2_by_fighter1,
        fight.cac_fd_3_by_fighter1,
        fight.cac_fd_4_by_fighter1,
        fight.cac_fd_5_by_fighter1,
        fight.cac_fd_1_by_fighter2,
        fight.cac_fd_2_by_fighter2,
        fight.cac_fd_3_by_fighter2,
        fight.cac_fd_4_by_fighter2,
        fight.cac_fd_5_by_fighter2,
        fight.gj_by_fighter1,
        fight.gj_by_fighter2,
        fight.fighter1_id,
        fight.fighter2_id,
        fight.winner_id,
      ]
    );
  }
}

module.exports = UserManager;
