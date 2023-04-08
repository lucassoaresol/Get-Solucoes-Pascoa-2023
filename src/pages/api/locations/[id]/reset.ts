import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { iLocation, iResponse } from "../../../../interfaces";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<iLocation | {} | iResponse>
) {
    const { method } = req;
    const { id } = req.query;

    if (typeof id === "string") {
        if (method === "PATCH") {
            const location = await prisma.location.update({
                where: { id },
                data: { expiredAt: null, userId: null },
            });

            return res.json(location);
        }
    }
    return res.status(404).json({ message: "Route not found" });
}
