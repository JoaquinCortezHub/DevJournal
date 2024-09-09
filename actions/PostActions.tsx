"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createPost(formData: FormData) { //Function to capture the data from the form.
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const content = formData.get("content")?.toString();
    const category = formData.get("category")?.toString();

    if (!name || !description || !content || !category) {
        return;
    }

    const newPost = await prisma.post.create({ //Query to the database to create a new post.
        data: {
            name: name,
            description: description,
            content: content,
            category: category,
        },
    });

    console.log(newPost);
    redirect("/");
}

export async function deletePost(formData: FormData) {
    "use server"
    const postId = formData.get("postId")?.toString();

    if(!postId) {
        return;
    }

    await prisma.post.delete({
        where: {
            id: parseInt(postId)
        }
    })

    revalidatePath("/admin/delete")
}

export async function updatePost(formData: FormData) {
    "use server"
    const id = formData.get("id")?.toString();
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const content = formData.get("content")?.toString();
    const category = formData.get("category")?.toString();

    if(!id || !name || !description || !content || !category) {
        return;
    }

    await prisma.post.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name: name,
            description: description,
            content: content,
            category: category,
        }
    });

    redirect("/");
}