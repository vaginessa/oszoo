import bcrypt from 'bcrypt';
import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

userSchema.methods.validPassword = (password) =>
  bcrypt.compareSync(password, this.password);

userSchema.statics.findByUsername = (username, success) => {
  User.find({ username })
    .then((user) => {
      success(user[0]);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default User;
