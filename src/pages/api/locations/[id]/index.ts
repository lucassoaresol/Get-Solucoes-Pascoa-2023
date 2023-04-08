import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { iLocation, iResponse } from "../../../../interfaces";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<iLocation | iResponse>
) {
    const { method } = req;
    const data = req.body;
    const { id } = req.query;

    if (typeof id === "string") {
        if (method === "GET") {
            const location = await prisma.location.findUnique({
                where: { id },
            });

            return res.json(location);
        } else if (method === "PATCH") {
            const location = await prisma.location.update({
                where: { id },
                data,
            });

            return res.json(location);
        } else if (method === "DELETE") {
            await prisma.location.delete({ where: { id } });

            return res.status(204).end();
        }
    }
    return res.status(404).json({ message: "Route not found" });
}
