import React from "react";
import { AdminForm } from "./adminForm";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const AdminPage = () => {
	return (
        <div>
            <h1 className="text-3xl text-center font-semibold mb-4">Admin Page</h1>
            <hr />
            <div className="flex justify-center items-center mt-8">
                <AdminForm />
            </div>
            <div className="mt-8 flex justify-center gap-4">
				<Link
					className={buttonVariants({ variant: "secondary" })}
					href="/admin/manage"
				>
					Manage Posts
				</Link>

			</div>
        </div>
    ); 
};

export default AdminPage;
