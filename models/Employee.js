const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class Employee extends Model {}

Employee.init(
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    employeeName: {
      type: DataTypes.STRING
    },
    employeeRole: {
        type: DataTypes.STRING
    },
    employeeManager: {
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