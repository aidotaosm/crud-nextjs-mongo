import { mapRoute } from './../../../api/service';
import { Request, Response } from "@/api/interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { createSet, deleteById, getAllData, getById, updateData } from "@/services/api/sets/service";

export default async function sets(req: NextApiRequest, res: NextApiResponse) {
  await mapRoute(req, res, {
    GET: async (req: Request): Promise<Response> => handleGet(req),
    GETALL: async (req: Request): Promise<Response> => handleGetAll(req),
    POST: (req: Request): Promise<Response>  => handlePost(req),
    PUTWITSLUG: (req: Request): Promise<Response>  => handlePut(req),
    DELETE: (req: Request): Promise<Response>  => handleDelete(req),
  });
}

const handleGet = async (req: Request): Promise<Response> => {
  const name: string = req.query.slug[0];
  const result = await getById(name!);

  if(!result) return { status: 404 }
  return { payload: result };
}

const handleGetAll = async (req: Request): Promise<Response> => {
    const result = await getAllData();
    return { payload: result };
}

const handlePost = async (req: Request): Promise<Response> => {
    const name = req.body.name;
    const set = await getById(name);
    if (set) return { status: 403, message: "Set already exists" };

    const result = await createSet(req.body);
    return { payload: result };
}

const handlePut = async (req: Request): Promise<Response> => {
    const name = req.query.slug[0];

    const set = await getById(name);
    if (!set) return { status: 404 };

    const result = await updateData(name, req.body);
    if(!result) return { status: 404 };

    return { payload: result };
}

const handleDelete = async (req: Request): Promise<Response> => {
  const name = req.query.slug[0];
  const result = await deleteById(name);
  if (!result) return { status: 404 };

  return { payload: result };
}

