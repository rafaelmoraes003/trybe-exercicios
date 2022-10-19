import 'dotenv/config';
import { connect } from 'mongoose';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
   || 'mongodb://localhost27017/glassesStore?authSource=admin',
) => {
  connect(mongoDatabaseURI);
};

export default connectToDatabase;