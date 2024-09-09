import { Button } from "./ui/button";

const DeletePostButton = () => {
	
    async function deletePost(formData: FormData) {
        "use server"
        const postId = formData.get("postId")?.toString();
        console.log(postId);
    }
    
    return (
		<div>
			<form action={deletePost}>
                <input type="hidden" name="postId" value="1" />
                <Button variant={'destructive'}>Delete</Button>
            </form>
		</div>
	);
};

export default DeletePostButton;
