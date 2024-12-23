"use client";
import Section from "@/components/shared-ui/section-full";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import SecretCode from "@/components/magic-shop/secret-code";
import Note from "@/components/magic-shop/note";


interface NoteData {
  _id: string;
  note: string[];
  noteFor: string;
  code: string;
  writtenOn: string;
  createdAt: string;
  updatedAt: string;
}

const MagicShop = () => {
  const [data, setData] = useState<NoteData | null>(null);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        axios
          .get(`/api/magic-shop?code=${code}`)
          .then((response) => setData(response.data));
      } catch (error) {
        console.error("Error fetching note: ", error);
      }
    };

    fetchNote();
  }, [code]);

  return (
    <main>
      <Section>
        <div className="container flex flex-col items-center min-h-[80vh] gap-y-10">
          {code ? <Note data={data} /> : <SecretCode />}
        </div>
      </Section>
    </main>
  );
};

export default MagicShop;
