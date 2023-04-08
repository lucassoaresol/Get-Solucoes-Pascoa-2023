import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { iResponse, iUser } from "../../../interfaces";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<iUser | iResponse>
) {
    const { method } = req;
    const data = req.body;
    const { id } = req.query;

    if (typeof id === "string") {
        if (method === "GET") {
            const user = await prisma.user.findUnique({ where: { id } });

            return res.json(user);
        } else if (method === "PATCH") {
            const user = await prisma.user.update({ where: { id }, data });

            return res.json(user);
        } else if (method === "DELETE") {
            await prisma.user.delete({ where: { id } });

            return res.status(204).end();
        }
    }
    return res.status(404).json({ message: "Route not found" });
}
