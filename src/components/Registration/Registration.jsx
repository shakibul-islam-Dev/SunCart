"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Button, Form, Input, TextField, FieldError } from "@heroui/react";
import { authClient } from "@/lib/auth-clients";

const Registration = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      alert(error.message);
    } else {
      console.log("Signup Success:", data);
      router.push("/");
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center w-full px-4 py-12">
      <div className="w-full max-w-100">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="text-3xl font-medium tracking-wider text-black">
            Create an account
          </h2>
          <p className="text-base text-black font-normal">
            Enter your details below
          </p>
        </div>

        <Form
          className="flex flex-col gap-8"
          onSubmit={onSubmit}
          validationBehavior="native"
        >
          <TextField
            isRequired
            name="name"
            type="text"
            className="w-full"
            aria-label="Full Name"
          >
            <Input
              variant="underlined"
              placeholder="Name"
              className="w-full border-b border-gray-400 py-3 text-base outline-none focus:border-black transition-all"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            aria-label="Email"
          >
            <Input
              variant="underlined"
              placeholder="Email"
              className="w-full border-b border-gray-400 py-3 text-base outline-none focus:border-black transition-all"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField
            isRequired
            name="image"
            type="text"
            className="w-full"
            aria-label="Image Url"
          >
            <Input
              variant="underlined"
              placeholder="Image Url"
              className="w-full border-b border-gray-400 py-3 text-base outline-none focus:border-black transition-all"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            className="w-full"
            aria-label="Password"
          >
            <Input
              variant="underlined"
              placeholder="Password"
              className="w-full border-b border-gray-400 py-3 text-base outline-none focus:border-black transition-all"
            />
            <FieldError className="text-xs text-red-500 mt-1" />
          </TextField>

          <div className="flex flex-col gap-4 pt-4">
            <Button
              type="submit"
              className="w-full bg-[#DB4444] text-white py-7 rounded font-medium text-base hover:opacity-90 transition-all h-auto"
            >
              Create Account
            </Button>

            <Button
              onClick={async () => {
                await authClient.signIn.social({ provider: "google" });
              }}
              variant="bordered"
              className="w-full border border-gray-400 py-7 rounded flex items-center justify-center gap-3 hover:bg-gray-50 transition-all h-auto bg-transparent"
            >
              <FcGoogle className="text-2xl" />
              <span className="text-black font-normal">
                Sign up with Google
              </span>
            </Button>
          </div>
        </Form>

        <div className="mt-8 text-center flex items-center justify-center gap-4 text-gray-600">
          <p className="text-base">Already have account?</p>
          <Link
            href="/login"
            className="font-medium text-black border-b border-gray-500 hover:border-black transition-all pb-0.5"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
