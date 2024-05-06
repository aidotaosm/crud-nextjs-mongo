import { getAllData } from "@/services/api/random/service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getAll(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getAllData();
  res.json(data);
}
