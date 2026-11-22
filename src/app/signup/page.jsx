"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const submittedData = Object.fromEntries(formData.entries());
    const { name, email, password, image } = submittedData;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });
    console.log("Sign up response:", { data, error });
    if (error) {
      toast.error(error.statusText || "Sign up failed. Please try again.");
    } else {
      toast.success("Sign up successful!");
      redirect("/signin");
    }
  };
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        className="flex w-10/12 max-w-lg mx-auto m-28 border p-4 rounded-md shadow-md bg-slate-50 flex-col gap-4"
      >
        <h1 className="text-xl font-semibold">Sign Up</h1>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter Your Name Here" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter Your Email Here" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <TextField isRequired name="image" type="url">
          <Label>Image URL</Label>
          <Input placeholder="Enter Your Image URL Here" />
          <FieldError />
        </TextField>
        <div className="flex items-center justify-center flex-col gap-4 mt-2">
          <Button className="rounded-none w-full" type="submit">
            <Check />
            Sign Up
          </Button>
          <p>
            Already have an account?{" "}
            <Link
              href={"/signin"}
              className="underline text-blue-500 font-medium"
            >
              Sign In here
            </Link>
          </p>
        </div>
        <h1 className="text-lg font-medium border-b text-center pb-2.5">OR</h1>
        <Button className="w-full" variant="tertiary">
          <FcGoogle />
          Continue with Google
        </Button>
      </Form>
    </div>
  );
};

export default SignUpPage;
