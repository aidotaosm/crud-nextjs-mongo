import { NextApiRequest, NextApiResponse } from "next";
import { createData, deleteById, getAllData, getById, updateData } from "@/services/api/sets/service";

export default async function sets(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const body = req.body;

  if (req.method === "GET" && slug !== undefined) {
    const name = slug[0];
    const result = await getById(name);

    if(!result) res.status(404);
    res.json(result);
  }

  if (req.method === "GET" && slug === undefined) {
    const result = await getAllData();
    res.json(result);
  }

  if (req.method === "POST") {
    const name = body.name;
    const set = await getById(name);
    if(set != null) res.status(403);

    const result = await createData(body);
    res.json(result);
  }

  if (req.method === "DELETE" && slug !== undefined) {
    const name = slug[0];
    const result = await deleteById(name);
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
    const name = slug[0];

    var newName = body.name;
    const set = await getById(newName);
    if(set != null) res.status(403);

    const result = await updateData(name, body);
    if(!result) res.status(404);

    res.json(result);
  }

  res.statusCode = 404;
}