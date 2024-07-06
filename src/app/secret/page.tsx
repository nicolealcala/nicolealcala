"use client";
import NoteHoles from "@/components/secret/note-holes";
import Section from "@/components/ui/section-full";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

interface NoteData {
  _id: string;
  note: string[];
  noteFor: string;
  code: string;
  writtenOn: string;
  createdAt: string;
  updatedAt: string;
}

const Secret = () => {
  const [data, setData] = useState<NoteData | null>(null);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`/api/secret?code=${code}`);
        console.log("Response: ", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching note: ", error);
      }
    };

    fetchNote();
  }, [code]);

  return (
    <main>
      <Section>
        <div className="container flex flex-col justify-center items-center min-h-[80vh] gap-y-10">
          <h1 className="font-bold text-4xl text-center">
            A sneak peak at my notes app...
          </h1>
          <div className="flex flex-col border items-center border-white max-w-2xl p-4 rounded-lg bg-[#202020] z-50">
            <NoteHoles />
            <div className="flex flex-col gap-y-4 p-4 mt-4">
              <p className="flex justify-end text-xs text-yellow">
                Written on {data?.writtenOn}
              </p>
              <p className="mt-6 font-bold italic underline underline-offset-[12px] decoration-yellow">
                To {data?.noteFor},
              </p>
              <div className="letter">
                {data?.note.map((content, index: any) => (
                  <p key={index} className="italic  indent-8 leading-7 mt-6">
                    {content}
                  </p>
                ))}
              </div>
              <p className="mt-6 font-bold italic text-right">
                <span className="font-normal">Always here,</span>
                <br />
                Nicole
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Secret;
