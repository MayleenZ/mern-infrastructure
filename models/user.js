const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc,ret){
        delete ret.password;
        return ret;
    }
  }
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    // hash the password 
})
//Prehook from mongoose
//if password is not modified we do next (). if value of password is modified (either updating account or making new account) it hashes the password 



module.exports = mongoose.model("User", userSchema)