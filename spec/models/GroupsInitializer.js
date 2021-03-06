export default class {
  static initialize({groups, users_groups, users}) {
    groups.entity = "groups";

    groups.fields = function () {
      return {
        id: this.attr(null),
        name: this.attr(null),

        users_groups: this.hasMany(users_groups, "group_id"),

        users: this.belongsToMany(users, users_groups, "group_id", "user_id")
      };
    };
  }
}
