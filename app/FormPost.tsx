"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const FormPost = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(title);

    const data = await fetch(`/api/createPost`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ title: title }),
    });

    const res = await data.json();
    router.refresh();
    if (!res.ok) {
      console.log(res);
    }
  };

  return (
    <form onSubmit={submitPost}>
      <input
        type="text"
        name="post name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Add Post</button>
    </form>
  );
};

export default FormPost;
