import mongoose from 'mongoose';

export default class Database {
  public static async init(): Promise<void> {
    console.log('initializing the DB_URL');
    const encodedDbUserName = encodeURIComponent(process.env.DB_USERNAME!)
    const encodedDbPassword = encodeURIComponent(process.env.DB_PASSWORD!)
    const DB_URL_ATLAS = `mongodb+srv://${encodedDbUserName}:${encodedDbPassword}@cluster0.zlhbuxs.mongodb.net/?retryWrites=true&w=majority`
    try {
      await mongoose.connect(DB_URL_ATLAS)
      console.debug('Connection established');
    }
    catch (err) {
      console.error(err);
    }
  }
};

