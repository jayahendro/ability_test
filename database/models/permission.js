"use strict";
const { Model, DataTypes } = require("sequelize");
import connection from "../connection";
import { Roles } from "./role";

const initPermission = (sequelize, Types) => {
  class Permissions extends Model {}
  Permissions.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Permissions",
      tableName: "permissions",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Permissions;
};

export default initPermission(connection, DataTypes);
