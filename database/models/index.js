import User from "./user";
import Role from "./role";
import Permission from "./permission";
import RolePermission from "./rolepermission";
import Product from "./product";

User.belongsTo(Role, {
  as: "roles",
  foreignKey: "role_id",
});
Role.hasMany(User, {
  as: "users",
  foreignKey: "role_id",
});

export { User, Role, Permission, RolePermission, Product };
