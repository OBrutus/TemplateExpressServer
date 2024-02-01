import mongoose from 'mongoose';
import { ConnectionOptions } from 'mongodb';
import ProcessEnv from '../Utils/ProcessEnv';


export default class DatabaseDriver {
  public static readonly DB_URI = ProcessEnv.MONGO_DB_URI;
  public static readonly connectionParams = {} as ConnectionOptions;

  static async connectDB() {
    try {
      await mongoose.connect(DatabaseDriver.DB_URI, DatabaseDriver.connectionParams)
        .then(DatabaseDriver.pingSuccessHandler)
        .catch(DatabaseDriver.errorHandler);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  public static pingSuccessHandler() {
    console.log(`Connection established for mongo db`);
  }

  public static errorHandler(err: Error) {
    console.error(`Encountered erre ${JSON.stringify(err)}`);
    throw err;
  }

  public static closeConnection() {
    if (!!mongoose.connection) {
      mongoose.connection.close();
    }
  }

}