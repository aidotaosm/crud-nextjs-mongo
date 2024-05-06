import { getAllData } from "@/services/api/sets/service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAll(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getAllData();
  res.json(data);
}
