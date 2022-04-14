import type { NextApiRequest, NextApiResponse } from "next";
import getAssetsForOwner from "../../../../lib/loaders/getAssetsForOwner";
import getClient from "../../../../lib/db/getClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await getClient();
  const results = await client?.query("SELECT * from cl_items;");
  res.status(200).json({
    data: await getAssetsForOwner(req.query["ownerPubkey"] as string),
    status: 200,
    success: true,
  });
}
