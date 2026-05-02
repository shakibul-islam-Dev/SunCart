"use client";

import { Button, Form, Input, TextField, FieldError } from "@heroui/react";
import { authClient } from "@/lib/auth-clients";
export default function Login() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    console.log(data, error);

    console.log(email, password);
  };

  return (
    <div className="w-full max-w-100 mx-auto px-4 md:px-0">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl font-medium tracking-wider text-black">
          Log in to Exclusive
        </h1>
        <p className="text-base text-black font-normal">
          Enter your details below.
        </p>
      </div>

      <Form className="flex flex-col gap-10" onSubmit={onSubmit}>
        {/* Email Field */}
        <TextField isRequired name="email" type="email" className="w-full">
          <Input
            variant="underlined"
            placeholder="Email or Phone Number"
            /* classNames এর বদলে সরাসরি className এবং Tailwind ব্যবহার করুন */
            className="w-full border-b border-gray-400 py-3 text-base placeholder:text-gray-400 focus:border-black outline-none transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>

        {/* Password Field */}
        <TextField
          isRequired
          name="password"
          type="password"
          className="w-full"
        >
          <Input
            variant="underlined"
            placeholder="Password"
            className="w-full border-b border-gray-400 py-3 text-base placeholder:text-gray-400 focus:border-black outline-none transition-all"
          />
          <FieldError className="text-xs text-red-500 mt-1" />
        </TextField>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-2">
          <Button
            type="submit"
            className="bg-[#DB4444] text-white px-12 py-6 rounded-md font-medium text-base hover:opacity-90 transition-opacity h-auto"
          >
            Log In
          </Button>

          <button
            type="button"
            className="text-[#DB4444] text-base font-normal hover:underline underline-offset-4"
          >
            Forget Password?
          </button>
        </div>
      </Form>
    </div>
  );
}
