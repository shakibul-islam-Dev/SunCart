"use client";

import { Avatar, Card } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { UpdateInfo } from "@/components/UpdateInfo/UpdateInfo";
import { redirect } from "next/navigation";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) return <p className="p-10 text-center">Loading...</p>;
  if (!user) redirect("/login");

  return (
    <div className="p-5 flex justify-center">
      <Card className="max-w-100 p-8 flex flex-col items-center gap-4">
        <Link href="/profile" className=" md:block">
          <Avatar>
            <Avatar.Image
              alt={user?.name?.charAt(0)}
              src={user?.image}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
          </Avatar>
        </Link>

        <div className="text-center">
          <h2 className="font-bold text-2xl text-gray-800">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
        <UpdateInfo></UpdateInfo>
      </Card>
    </div>
  );
}
