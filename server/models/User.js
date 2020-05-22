const mongoose = require("mongoose");
const defaultConfig = {
  type: String,
  required: true,
  trim: true,
};
const userSchema = mongoose.Schema({
  username: defaultConfig,
  email: { ...defaultConfig, unique: true },
  password: defaultConfig,
  language: { ...defaultConfig, default: 'en-EN' },
  theme: { ...defaultConfig, default: 'dark' },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("User", userSchema);
