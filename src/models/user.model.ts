import mongoose from 'mongoose';



const SubDocSchema = new mongoose.Schema(
  {
    text: { type: String }

  },
  { _id: false }
);


export const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    subDocs: {
      type: [SubDocSchema],
    },
    strings: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);


UserSchema.methods.doSomething = function (): void {

  for (let subDoc of this.subDocs) {
    console.log(subDoc)
  }

  for (let str of this.strings) {
    console.log(str)
  }
};


const UserModel = mongoose.model("User", UserSchema);
export default UserModel


