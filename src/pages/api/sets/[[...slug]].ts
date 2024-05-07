import { createData, deleteById, getAllData, getById, updateData } from "@/services/api/sets/service";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function sets(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const body = req.body;

  if (req.method === "GET" && slug !== undefined) {
    const id = slug[0];
    const result = await getById(id);

    if(!result) res.status(404);
    res.json(result);
  }

  if (req.method === "GET" && slug === undefined) {
    const result = await getAllData();
    res.json(result);
  }

  if (req.method === "POST") {
    const result = await createData(body);
    res.json(result);
  }

  if (req.method === "DELETE" && slug !== undefined) {
    const id = slug[0];
    const result = await deleteById(id);
    res.json(result);
  }

  if (req.method === "DELETE" && slug !== undefined) {
    const id = slug[0];
    const result = await deleteById(id);
    if(!result) res.status(404);

    res.json(result);
  }

  if(req.method === "PUT" && slug !== undefined)
  {
    const id = slug[0];
    const result = await updateData(id, body);
    if(!result) res.status(404);

    res.json(result);
  }

  res.statusCode = 404;
}