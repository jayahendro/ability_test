"use strict";
const { Model, DataTypes } = require("sequelize");
import connection from "../connection";
import { Permissions } from "./permission";

const initRole = (sequelize, Types) => {
  class Roles extends Model {}
  Roles.init(
    {
      name: Types.STRING,
    },
    {
      sequelize,
      modelName: "Roles",
      tableName: "roles",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Roles;
};

export default initRole(connection, DataTypes);
