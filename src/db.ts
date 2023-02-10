import mongoose from 'mongoose';
import dotenv from 'dotenv';

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', true);
dotenv.config();

const { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_USER } = process.env;

const connectToDatabase = async (): Promise<void> => {
  //const options: ConnectOptions = { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true };

  //await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
.then((x) => {
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch((err) => {
  console.error('Error connecting to mongo', err.reason)
})

  //console.log("db connected")
};

export { connectToDatabase };