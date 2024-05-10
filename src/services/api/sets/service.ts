import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { tryToConvertObjectId } from "../utils";

export const getById = async (name: string) => {
  const client = await clientPromise;
  const database = client.db("codecamp");
  const collection = database.collection("sets");
  const data = await collection.findOne({ name: name });

  return data;
};

export const getAllData = async () => {
  const client = await clientPromise;

  const database = client.db("codecamp");
  const collection = database.collection("sets");
  const allData = await collection.find({}).toArray();

  return allData;
};

export const createSet = async (payload: any) => {
  const client = await clientPromise;

  const database = client.db("codecamp");
  const collection = database.collection("sets");

  return await collection.insertOne(payload);
};

export const deleteById = async (name: string) => {
  const client = await clientPromise;
  const database = client.db("codecamp");
  const collection = database.collection("sets");

  return await collection.deleteOne({ name: name });
};

export const updateData = async (name: string, payload: any) => {
  const client = await clientPromise;
  const database = client.db("codecamp");
  const collection = database.collection("sets");

  return await collection.updateOne({ name: name }, { $set: payload });
};
