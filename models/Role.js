const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class Role extends Model {}

Role.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    roleName: {
      type: DataTypes.STRING
    },
    roleSalary: {
        type: DataTypes.STRING
    },
    roleDepartment: {
        type: DataTypes.STRING
    }
  },
  {
    // Link to database connection
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    modelName: 'employee'
  }
);

module.exports = Department;