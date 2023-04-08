import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getLocation(id: string) {
    const location = await prisma.location.findUnique({
        where: { id },
    });

    return location;
}
