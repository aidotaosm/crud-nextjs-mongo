import clientPromise from '@/lib/mongodb';

export const getAllData = async () => {
  const client = await clientPromise;

  const database = client.db("codecamp");
  const collection = database.collection("sets");
  const allData = await collection.find({}).toArray();

  return allData;
};

export const createData = async (payload: any) => {
    const client = await clientPromise;

    const database = client.db("codecamp");
    const collection = database.collection("sets");

    return await collection.insertOne(payload);
}