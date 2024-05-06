import { createData, getAllData } from "@/services/api/random/service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await createData(req.body);
  res.json(data);
}
