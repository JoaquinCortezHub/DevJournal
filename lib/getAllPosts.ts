import prisma from "./prisma";

async function getAllPosts() {
    const posts = await prisma.post.findMany();
}

getAllPosts()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });

export default getAllPosts;