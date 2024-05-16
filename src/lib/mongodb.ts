import { MongoClient } from "mongodb";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;


if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const options = {};

const mongo: {
  client: MongoClient | null;
  clientPromise: Promise<MongoClient> | null;
} = {
  client: null,
  clientPromise: null,
};

const createConnection = () => {
    try {
        mongo.client = new MongoClient(uri, options);
        mongo.clientPromise = mongo.client.connect();
    }
    catch(error) {
        console.log("Something went wrong.");
    }
    finally { mongo.client?.close(); }
};

if (process.env.NODE_ENV === "development" && !mongo.clientPromise) createConnection();
else createConnection();

export default mongo.clientPromise as Promise<MongoClient>;
