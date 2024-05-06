import clientPromise from '@/lib/mongodb';

export const getAllData = async () => {
  const client = await clientPromise;

  const database = client.db("test_db");
  const collection = database.collection("test_collection");
  const allData = await collection.find({}).toArray();

  return allData;
};

export const createData = async (payload: any) => {
    const client = await clientPromise;

    const database = client.db("test_db");
    const collection = database.collection("test_collection");

    return await collection.insertOne(payload);
}