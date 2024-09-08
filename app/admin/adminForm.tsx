import * as React from "react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export function AdminForm() {
	async function createPost(formData: FormData) {
		"use server"
		const name = formData.get("name")?.toString();
		const content = formData.get("content")?.toString();
		const category = formData.get("category")?.toString();

		console.log({name, content, category});

		if(!name || !content || !category) {
			return;
		}

		const newPost = await prisma.post.create({
			data: {
				name: name,
				content: content,
				category: category,
			}
		});

		console.log(newPost);
		redirect("/");
	}

	return (
		<form action={createPost}>
			<Card className="w-[650px]">
				<CardHeader>
					<CardTitle>Create post</CardTitle>
					<CardDescription>Introduce the post info and content.</CardDescription>
				</CardHeader>
				<CardContent>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Post Name</Label>
								<Input name="name" id="name" placeholder="Name of the post" />
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="content">Post Content</Label>
								<Textarea name="content" id="content" placeholder="your content..." />
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="category">Category</Label>
								<Select name="category">
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="personal">Personal Learning</SelectItem>
										<SelectItem value="project">Project update</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline">Cancel</Button>
					<Button>Publish</Button>
				</CardFooter>
			</Card>
		</form>
	);
}
