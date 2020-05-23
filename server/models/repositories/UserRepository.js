const User = require("./../User");

class UserRepository {
  static async signupUser(user) {
    return await User.collection.insertOne(user);
  }
  static async removeUserById(id) {
    return await User.findByIdAndRemove(id);
  }
  static async getUserByEmail(email) {
    return await User.findOne({ email });
  }
  static async updateUserById(id, data) {
    return await User.findByIdAndUpdate(id, data);
  }
  static async getUserById(id) {
    return await User.findById(id);
  }
}

module.exports = UserRepository;
