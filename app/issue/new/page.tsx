"use client";
import { Button, TextField, Toast } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
type IssueForm = {
  title: String;
  description: String;
};

const CreateNewIssue = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const onSubmit = async (data: IssueForm) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/issues",
        data
      );
      router.push("/issue");
    } catch (error) {
      console.log(error);
      setError("Something went wrong please try again later!");
    }
  };
  return (
    <div className="max-w-xl">
      {error && (
        <p className="p-2 bg-red-400 mb-5 rounded-md text-white">{error}</p>
      )}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description..." {...field} />
          )}
        />
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default CreateNewIssue;
