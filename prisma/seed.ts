import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Upsert de las categorías
    const category1 = await prisma.category.upsert({
        where: { name: 'Sci-Fi' },
        update: {},
        create: { name: 'Sci-Fi' },
    });

    const category2 = await prisma.category.upsert({
        where: { name: 'Cosmic Horror' },
        update: {},
        create: { name: 'Cosmic Horror' },
    });

    // Upsert de los libros
    await prisma.book.upsert({
        where: { title: 'The Martian Chronicles' },
        update: {},
        create: {
            title: 'The Martian Chronicles',
            author: 'Ray Bradbury',
            publication_date: new Date(),
            description: 'A Sci-Fi anthology by Ray Bradbury.',
            // Conexión correcta de las categorías (debe ser una lista)
            categories: {
                connect: [{ id: category1.id }],
            },
        },
    });

    await prisma.book.upsert({
        where: { title: 'The Dunwich Horror' },
        update: {},
        create: {
            title: 'The Dunwich Horror',
            author: 'H.P. Lovecraft',
            publication_date: new Date(),
            description: 'A cosmic horror tale by H.P. Lovecraft.',
            // Conexión correcta de las categorías (debe ser una lista)
            categories: {
                connect: [{ id: category2.id }],
            },
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });