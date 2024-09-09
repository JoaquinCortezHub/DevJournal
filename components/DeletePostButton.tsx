import { Button } from "./ui/button";
import { deletePost } from "@/actions/PostActions";
const DeletePostButton = ({ postId }: {postId: number}) => {
    return (
		<div>
			<form action={deletePost}>
                <input type="hidden" name="postId" value={postId} />
                <Button variant={'destructive'}>Delete post</Button>
            </form>
		</div>
	);
};

export default DeletePostButton;
