"use client";
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
const SecretCode = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    if (!code) {
      setError("Secret code is required");
      return;
    }
    router.push(`/secret?code=${code}`);
  };
  return (
    <form
      className="space-y-2 w-[500px] bg-[#202020] py-5 px-6 rounded-lg z-50"
      onSubmit={handleSubmit}
    >
      <p>Enter secret code:</p>
      <div className="flex gap-3">
        <Input
          placeholder="e.g., sunflower"
          radius="sm"
          className="w-full"
          isRequired
          isInvalid={error ? true : false}
          errorMessage={error}
          onChange={(e) => {
            setError("");
            setCode((p) => (p = e.target.value.toLocaleLowerCase()));
          }}
        />
        <Button
          onPress={handleSubmit}
          className="max-w-auto bg-pink"
          radius="sm"
        >
          See note
        </Button>
      </div>
    </form>
  );
};

export default SecretCode;
