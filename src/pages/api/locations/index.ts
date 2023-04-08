import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { iLocation, iResponse } from "../../../interfaces";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<iLocation | iLocation[] | iResponse>
) {
    const { method } = req;
    const data = req.body;

    if (method === "POST") {
        const location = await prisma.location.create({ data });

        return res.status(201).json(location);
    } else if (method === "GET") {
        const locations = await prisma.location.findMany();

        return res.json(locations);
    }
    return res.status(404).json({ message: "Route not found" });
}
