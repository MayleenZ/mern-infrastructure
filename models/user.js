const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

//Determines how much processing time it will take to perform the hash 
const SALT_ROUNDS = 6

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
//   The toJson option is set to remove the password field from the JSON object returned when document is serialized to JSON
//the prehook saved below checks if password is modified and hashes it 
});

userSchema.pre('save', async function(next){
    // if password was NOT modified continue to the next middleware bc we dont need a new hashed password
    if(!this.isModified('password')) return next();

    // if password was modified, hash and update the password
   this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
})
//Prehook from mongoose
//if password is not modified we do next (). if value of password is modified (either updating account or making new account) it hashes the password 
//We are using this keyword because it is a property of the current instancce of the userSchema
//We need to await bc bcrypt.hash method returns a promise which resolves to the hashed password string
//callback function not necessary bc bcrypt.hash method return a promise. 
//async/await always go together




module.exports = mongoose.model("User", userSchema)