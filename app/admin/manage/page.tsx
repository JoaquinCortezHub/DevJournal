import { DeletePosts } from "./DeletePosts";

const DeletePage = () => {
	return (
        <div>
            <h1 className="text-3xl text-center font-semibold mb-4">Manage Posts</h1>
            <hr />
            <DeletePosts />
        </div>
    );
};

export default DeletePage;