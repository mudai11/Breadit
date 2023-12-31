"use client";
import { FC } from "react";
import { Icons } from "./Icons";
import UserAuthForm from "./UserAuthForm";

const SignIn: FC = ({}) => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="mx-auto h-6 w-6" />
        <h1 className="text-2xl font-bold tracking-tight">
          Welcome to Breadit
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a breadit account and agree to our
          User Agreement and Privacy Policy.
        </p>
        <UserAuthForm />
      </div>
    </div>
  );
};

export default SignIn;
