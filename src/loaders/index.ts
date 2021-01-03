
import mongooseLoader from './mongoose.loader';


export default async (): Promise<void> => {


  const db = await mongooseLoader();
  if (db) {
    console.log('loaders.index::MongoDB initialized.');
  } else {
    console.log('loaders.index::MongoDB NOT initialized.');
    throw new Error("MongoDB NOT initialized");
  }
}
