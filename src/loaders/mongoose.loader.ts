import mongoose from 'mongoose'
export default async (): Promise<any> => {

  
  const connection = await mongoose.connect('mongodb://localhost:27017/myapp',
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false, useCreateIndex: true})
      .then(() => console.log(`startup.db::Connection to database established successfully.`))
      .catch((err)=>{console.log(err.message)});

  return connection;
}
