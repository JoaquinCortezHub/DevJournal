import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@prisma/client";
import clsx from "clsx";
import Image from "next/image";
const PostCard = ({post}: {post: Post}) => {
	return (
		<div>
			<Card>
				<Image
					className="w-full rounded-t-lg"
					src="/cover.jpg"
					alt="post cover"
					height={32}
					width={1600}
				/>
				<CardHeader className="font-medium text-lg m-0">
                    <CardTitle>{post.name}</CardTitle>
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
					<Badge variant={"outline"}
                    className={clsx({
                        "bg-blue-200 dark:bg-blue-700" : post.category === "project",
                        "bg-purple-200 dark:bg-purple-700" : post.category === "personal"
                    })}
                    >
                        {post.category}
                    </Badge>
				</CardFooter>
			</Card>
		</div>
	);
};

export default PostCard;
