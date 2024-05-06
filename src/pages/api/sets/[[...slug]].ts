import { createData, getAllData } from "@/services/api/sets/service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function sets(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const body = req.body;
  console.log("here");

  if (req.method === "GET" && slug !== undefined) {
    console.log(slug);
  }

  if (req.method === "GET" && slug === undefined) {
    const data = await getAllData();
    res.json(data);
  }

  if (req.method === "POST") {
    const data = await createData(req.body);
    res.json(data);
  }
}
