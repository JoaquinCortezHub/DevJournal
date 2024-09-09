import prisma from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import clsx from "clsx";
import Image from "next/image";
import DeletePostButton from "@/components/DeletePostButton";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export async function DeletePosts() {
	const posts = await prisma.post.findMany();
	return (
		<div className="grid grid-cols-3 gap-4 my-8">
			{posts.map((post) => (
				<Card key={post.id}>
					<Image
						className="w-full rounded-t-lg"
						src="/cover.jpg"
						alt="post cover"
						height={32}
						width={1600}
					/>
					<CardHeader className="font-medium text-lg m-0">
						{post.name}
					</CardHeader>
					<CardContent>
						<p className="text-md font-medium text-slate-500 dark:text-stone-400 text-balance">
							{post.description}
						</p>
					</CardContent>
					<CardFooter className="flex items-center justify-between">
						<span className="text-slate-500 dark:text-slate-400">
							{new Date(post.createdAt).toLocaleDateString()}
						</span>
						<Badge
							variant={"outline"}
							className={clsx({
								"bg-blue-200 dark:bg-blue-700": post.category === "project",
								"bg-purple-200 dark:bg-purple-700":
									post.category === "personal",
							})}
						>
							{post.category}
						</Badge>
						
					</CardFooter>
                    <div className="p-4 flex justify-center gap-x-4">
                        <DeletePostButton postId={post.id} />
						<Link 
							href={`/admin/manage/${post.id}/edit`}
							className={buttonVariants({variant: "secondary"})}
						>
							Edit post
						</Link>
                    </div>
				</Card>
			))}
            
		</div>
	);
}
