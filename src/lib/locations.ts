import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllLocationIds() {
    const locations = await prisma.location.findMany();

    return locations.map((location) => {
        return {
            params: {
                id: location.id,
            },
        };
    });
}

export async function getLocation(id: string) {
    const location = await prisma.location.findUnique({
        where: { id },
    });

    return location;
}
