import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { iResponse, iUser } from "../../../interfaces";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<iUser | iUser[] | iResponse>
) {
    const { method } = req;
    const data = req.body;

    if (method === "POST") {
        const user = await prisma.user.create({ data });

        return res.status(201).json(user);
    } else if (method === "GET") {
        const users = await prisma.user.findMany();

        return res.json(users);
    }
    return res.status(404).json({ message: "Route not found" });
}
