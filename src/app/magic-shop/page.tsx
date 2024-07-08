"use client";
import NoteHoles from "@/components/magic-shop/note-holes";
import Section from "@/components/ui/section-full";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import SecretCode from "@/components/magic-shop/secret-code";
import NoteSkeleton from "@/components/magic-shop/note-skeleton";

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
        const response = await axios.get(`/api/magic-shop?code=${code}`);
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
        <div className="container flex flex-col items-center min-h-[80vh] gap-y-10">
          <h1 className="font-bold text-4xl text-center">
            A sneak peak at my notes app...
          </h1>
          {code ? (
            <div className="flex flex-col border items-center justify-center border-white max-w-2xl p-4 rounded-lg bg-[#303030] z-50">
              <NoteHoles />
              {data ? (
                <div className="flex flex-col gap-y-4 p-4 mt-4">
                  <p className="flex justify-end text-xs text-yellow">
                    Written on {data?.writtenOn}
                  </p>
                  <p className="mt-6 font-bold italic underline underline-offset-[12px] decoration-yellow">
                    To {data?.noteFor},
                  </p>
                  <div className="letter">
                    {data?.note.map((content, index: any) => (
                      <p key={index} className="indent-8 leading-7 mt-6">
                        {content}
                      </p>
                    ))}
                  </div>
                  <p className="mt-6 font-bold italic text-right">
                    <span className="font-normal">Always here,</span>
                    <br />
                    Nicole
                  </p>
                  <p className="text-xs mt-6 text-gray-500">
                    This note will be removed in 3 days. Scan the QR code for
                    daily bible verses.
                  </p>
                </div>
              ) : (
                <NoteSkeleton />
              )}
            </div>
          ) : (
            <SecretCode />
          )}
        </div>
      </Section>
    </main>
  );
};

export default Secret;
