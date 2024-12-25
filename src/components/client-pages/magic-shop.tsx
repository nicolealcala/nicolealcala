"use client";
import Section from "@/components/shared-ui/section-full";
import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import SecretCode from "@/components/magic-shop/secret-code";
import Note from "@/components/magic-shop/note";
import NotFound from "@/app/not-found";

// Suspense fallback component
const SuspenseFallback = () => <div></div>;

interface NoteData {
  _id: string;
  note: string[];
  noteFor: string;
  code: string;
  writtenOn: string;
  createdAt: string;
  updatedAt: string;
}

const Page = () => {
  const [data, setData] = useState<NoteData | null>(null);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        axios.get(`/api/magic-shop?code=${code}`).then((response) => {
          if (response.data) {
            setData(response.data);
          } else setNotFound(true);
        });
      } catch (error) {
        console.error("Error fetching note: ", error);
      }
    };

    fetchNote();
  }, [code]);

  if (notFound) return <NotFound />;

  return (
    <main>
      <Section className="!bg-white">
        <div className="container flex flex-col items-center min-h-[80vh] gap-y-10">
          {code ? <Note data={data} /> : <SecretCode />}
        </div>
      </Section>
    </main>
  );
};

export default function NotePage() {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Page />
    </Suspense>
  );
}
