import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { tryToConvertObjectId } from '../utils';

export const getById = async (name: string) => {
  // const objectId = tryToConvertObjectId(id);
  // if(!objectId) return undefined;

  const client = await clientPromise;
  const database = client.db("codecamp");
  const collection = database.collection("sets");
  const data = await collection.findOne({ name:  name });

  return data;
};

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

export const deleteById = async (id: string) => {
  const objectId = tryToConvertObjectId(id);
  if(!objectId) return undefined;

  const client = await clientPromise;
  const database = client.db("codecamp");
  const collection = database.collection("sets");

  return await collection.deleteOne({ _id: new ObjectId(id)});
}

export const updateData = async (id: string, payload: any) => {
  const objectId = tryToConvertObjectId(id);
  if(!objectId) return undefined;

  const client = await clientPromise;
  const database = client.db("codecamp");
  const collection = database.collection("sets");

  return await collection.updateOne({ _id: new ObjectId(id)}, { $set: payload });
}