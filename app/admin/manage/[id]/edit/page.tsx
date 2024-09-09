import { AdminForm } from "@/app/admin/adminForm";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

export default async function EditPage({ //In a page, the 'params' prop is available for the function to use.
	params,
}: {
	params: {
		id: string;
	};
}) {
	const post = await prisma.post.findFirst({
		where: {
			id: parseInt(params.id)
		}
	})

	if(!post) {
		redirect("/")
	}

	return (
		<div className="flex justify-center items-center mt-8">
			<AdminForm  post={post}/>
		</div>
	);
}
