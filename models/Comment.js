const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
  {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Your comment here...",
    },
  },
  {
    sequelize,
    timestamps: false,
    modelName: "Comment",
  }
);

module.exports = Comment;
