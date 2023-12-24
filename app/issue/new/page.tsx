"use client";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";
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
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const onSubmit = async (data: IssueForm) => {
    const response = await axios.post("http://localhost:3000/api/issues", data);
    if (response.status === 201) router.push("/issue");
  };
  return (
    <form className="max-w-xl space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default CreateNewIssue;
