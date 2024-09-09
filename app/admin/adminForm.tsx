import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
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
import createPost, { updatePost } from "@/actions/PostActions";
import { Post } from "@prisma/client";
import Link from "next/link";

export function AdminForm({ post }: { post: Post }) {
	const formAction = post?.id ? updatePost : createPost;

	return (
		<div>
			<form action={formAction}>
				<input type="hidden" name="id" value={post?.id} />
				<Card className="w-[650px]">
					<CardHeader>
						<CardTitle>Create post</CardTitle>
						<CardDescription>
							Introduce the post info and content.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Post Name</Label>
								<Input
									name="name"
									id="name"
									placeholder="Name of the post"
									defaultValue={post?.name}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="description">Post Description</Label>
								<Textarea
									name="description"
									id="description"
									placeholder="Description of the post"
									defaultValue={post?.description}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="content">Post Content</Label>
								<Textarea
									name="content"
									id="content"
									placeholder="your content..."
									defaultValue={post?.content}
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="category">Category</Label>
								<Select name="category" defaultValue={post?.category}>
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
						<Link 
							href={'/'}
							className={buttonVariants({variant: "secondary"})}
						>
							Cancel
						</Link>
						<Button type="submit">
							{post?.id ? "Update Post" : "Publish Post"}
						</Button>
					</CardFooter>
				</Card>
			</form>
		</div>
	);
}
