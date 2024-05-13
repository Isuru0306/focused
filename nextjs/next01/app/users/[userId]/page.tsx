import getUser from "@/libs/getUser";
import getUserPost from "@/libs/getUserPost";
import getAllUsers from "@/libs/getAllUsers";
import { Suspense } from "react";
import UserPost from "./components/userPost";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;
  if (!user) {
    return {
      title: "User not Found",
    };
  }

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post[]> = getUserPost(userId);

  //   const [user, userPostData] = await Promise.all([userData, userPost]);
  const user = await userData;

  if (!user) notFound();

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPost promise={userPostData} />
      </Suspense>
    </>
  );
}

//SSG include
export async function generateStaticParams() {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;

  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
