import { model } from "mongoose";
import { UserSchema } from "../schemas/user-schema.js";

const User = model("users", UserSchema);

export class UserModel {
  static instance;

  constructor() {
    if (UserModel.instance) {
      return UserModel.instance;
    }

    UserModel.instance = this;
  }

  async findByEmail(email) {
    return User.findOne({ email });
  }

  async findById(userId) {
    return User.findOne({ user_id: userId });
  }

  async addUser({ name, email, password, phone }) {
    return User.create({ name, email, password, phone });
  }

  async findAll() {
    return User.find({});
  }

  async update({ userId, update }) {
    const filter = { user_id: userId };
    const option = { returnOriginal: false };

    return User.findOneAndUpdate(filter, update, option);
  }

  async deleteById(userId) {
    return User.deleteOne({ user_id: userId });
  }
}
