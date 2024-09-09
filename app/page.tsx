import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import Image from "next/image";

async function Home() {
  const posts = await prisma.post.findMany();

	return(
    <div>
      <div className="container mx-auto h-[250px] rounded-2xl">
        <Image src='/cover.jpg' alt="blog banner" width={1200} height={500} className="w-full h-full object-cover rounded-2xl" />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-center w-[56] h-[56] -mt-16">
          <Image src='/profile.jpg' alt="profile" width={100} height={50} className="rounded-full h-28 object-cover"/>
        </div>
      </div>
      <div className="text-center mt-2">
        <h1 className="text-5xl font-bold text-slate-800 dark:text-stone-200 leading-tight">Welcome to my dev Journal.<br />I&apos;m Joaquín👋</h1>
      </div>
      <div className="text-center mt-4 mb-8">
        <p className="text-lg font-medium text-slate-500 dark:text-stone-400 text-balance">
          This space serves as a digital journal for my coding journey.
          In here, you will find personal updates (related with my coding carreer) 
          such as the technologies I&apos;m learning, new techniques and different tips and tricks that helped me as a developer. 
          Also, you will find updates on the projects I&apos;m currently working on, with weekly updates on the state of the project, issues and upcoming features.
        </p>
      </div>
      <hr />
      <div className="mt-8 mb-12  grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <Image className="w-full rounded-t-lg" src="/cover.jpg" alt="post cover" height={32} width={1600} />
            <CardHeader className="font-medium text-lg m-0">{post.name}</CardHeader>
            <CardContent>
              <p className="text-md font-medium text-slate-500 dark:text-stone-400 text-balance">{post.description}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400">{new Date(post.createdAt).toLocaleDateString()}</span>
              <Badge variant={'outline'}>{post.category}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );

}

export default Home;
