import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { iLocation, iResponse } from "../../../../../interfaces";
import moment from "moment";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<iLocation | {} | iResponse>
) {
    const { method } = req;
    const { id } = req.query;

    if (typeof id === "string") {
        if (method === "PATCH") {
            const location = await prisma.location.findFirst({
                where: { AND: { id, userId: null } },
            });

            if (location) {
                if (
                    location.expiredAt &&
                    moment.utc().isSameOrAfter(location.expiredAt)
                ) {
                    const locationPatch = await prisma.location.update({
                        data: {
                            expiredAt: moment.utc().add(3, "minute").format(),
                        },
                        where: { id },
                    });

                    return res.json(locationPatch);
                } else if (!location.expiredAt) {
                    const locationPatch = await prisma.location.update({
                        data: {
                            expiredAt: moment.utc().add(3, "minute").format(),
                        },
                        where: { id },
                    });

                    return res.json(locationPatch);
                }

                return res.status(404).json({ message: "Location not found" });
            }

            return res.status(404).json({ message: "Location not found" });
        }
    }
    return res.status(404).json({ message: "Route not found" });
}
