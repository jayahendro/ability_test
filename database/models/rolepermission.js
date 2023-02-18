"use strict";
const { Model, DataTypes } = require("sequelize");
import connection from "../connection";

const initRolePermission = (sequelize, Types) => {
  class RolePermission extends Model {}
  RolePermission.init(
    {
      role_id: DataTypes.INTEGER,
      permission_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "RolePermission",
      tableName: "role_permission",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return RolePermission;
};

export default initRolePermission(connection, DataTypes);
