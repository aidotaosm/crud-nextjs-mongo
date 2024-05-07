import { ObjectId } from "mongodb";

export const tryToConvertObjectId = (id: string) => {
    try {
      return new ObjectId(id);
    }
    catch {
      return undefined;
    }
  }