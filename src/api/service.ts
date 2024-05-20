import { NextApiRequest, NextApiResponse } from "next";
import { RequestType, Request } from "./interfaces";

export const mapRoute = async (
  req: NextApiRequest,
  res: NextApiResponse,
  callback: any
) => {
  let reqType: RequestType;

  console.log("req type 0", reqType);

  if (req.method === "GET" && req.query.slug !== undefined) reqType = "GET";
  else if (req.method === "GET" && req.query.slug === undefined) reqType = "GET_ALL";
  else if (req.method === "POST") reqType = "POST";
  else if (req.method === "DELETE" && req.query !== undefined)
    reqType = "DELETE";
  else if (req.method === "DELETE" && req.query !== undefined)
    reqType = "DELETE";
  else if (req.method === "PUT" && req.query !== undefined)
    reqType = "PUT_WITH_SLUG";
  else if (req.method === "PUT" && req.query.slug !== undefined) reqType = "PUT";

  console.log("req type 1", reqType);

  switch (reqType) {
    case "GET": {
      if (req.query != null && req.query !== undefined) {
        const { slug, ...optionalParam } = req.query;
        const request: Request = {
          method: "GET",
          query: {
            slug: slug as string[],
            optionalParam: optionalParam as { [key: string]: string },
          },
        };

        const response = await callback.GET(request);

        if (response.status !== undefined) res.statusCode = response.status;
        res.json(response.payload !== undefined ? response.payload : null);
      }

      break;
    }

    case "GET_ALL": {
      console.log("here");
      const { slug, ...optionalParam } = req.query;
      const request: Request = {
        method: "GET",
        query: {
          slug: slug as string[],
          optionalParam: optionalParam as { [key: string]: string },
        }
      };

      const response = await callback.GETALL(request);

      if (response.status !== undefined) res.statusCode = response.status;
      res.json(response.payload !== undefined ? response.payload : null);

      break;
    }

    case "POST": {
      const { slug, ...optionalParam } = req.query;
      const request: Request = {
        method: "POST",
        query: {
          slug: slug as string[],
          optionalParam: optionalParam as { [key: string]: string },
        },
        body: req.body,
      };

      const response = await callback.POST(request);
      if (response.status !== undefined) res.statusCode = response.status;
      res.json(response.payload !== undefined ? response.payload : null);

      break;
    }

    case "PUT_WITH_SLUG": {
      const { slug, ...optionalParam } = req.query;
      const request = {
        method: "PUT",
        query: {
          slug: slug as string[],
          optionalParam: optionalParam as { [key: string]: string },
        },
        body: req.body,
      };

      const response = await callback.PUTWITSLUG(request);
      if (response.status !== undefined) res.statusCode = response.status;
      res.json(response.payload !== undefined ? response.payload : null);

      break;
    }

    case "DELETE": {
      const { slug, ...optionalParam } = req.query;
      const request = {
        method: "DELETE",
        query: {
          slug: slug as string[],
          optionalParam: optionalParam as { [key: string]: string },
        },
      };

      const response = await callback.DELETE(request);
      if (response.status !== undefined) res.statusCode = response.status;
      res.json(response.payload !== undefined ? response.payload : null);

      break;
    }
  }
};
