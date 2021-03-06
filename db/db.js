'use strict';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectMongo = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL,
        {
          useNewUrlParser: true,
          useFindAndModify: false,
          useCreateIndex: true,
          useUnifiedTopology: true,
        });
    return connection;
  } catch (e) {
    console.log('Connection to db failed: ' + e);
  }
};

export default connectMongo;