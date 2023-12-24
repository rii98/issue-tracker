"use client";
import { Button, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateIssueSchema } from "@/app/validationSchema";
import { z } from "zod";

type IssueForm = z.infer<typeof CreateIssueSchema>;

const CreateNewIssue = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(CreateIssueSchema),
  });
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
        {errors.title && <Text color="red">{errors.title?.message}</Text>}
        <div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="Description..." {...field} />
            )}
          />
          {errors.description && (
            <Text color="red" as="p">
              {errors.description.message}
            </Text>
          )}
        </div>

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default CreateNewIssue;
