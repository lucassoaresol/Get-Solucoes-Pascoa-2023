import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { iResponse, iUser } from "../../../../interfaces";
import moment from "moment";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<iUser | {} | iResponse>
) {
    const { method } = req;
    const data = req.body;
    const { id } = req.query;

    if (typeof id === "string") {
        if (method === "POST") {
            const location = await prisma.location.findUnique({
                where: { id },
            });
            if (
                location.expiredAt &&
                moment.utc().isSameOrBefore(location.expiredAt)
            ) {
                const user = await prisma.user.create({
                    data: { ...data, location: { connect: { id } } },
                });
                return res.status(201).json(user);
            }
            return res.status(404).json({ message: "Location not found" });
        }
    }
    return res.status(404).json({ message: "Route not found" });
}
