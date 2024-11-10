"use client";
import React, { useEffect, useState } from "react";
import Section from "@/components/shared-ui/section-full";
import axios from "axios";
import { notFound, useSearchParams } from "next/navigation";
import { NoteCard, NoteCardSkeleton } from "@/components/magic-shop/note-card";
import { Divider } from "@nextui-org/react";
import Note from "@/components/magic-shop/note";
import NotFound from "@/app/not-found";

interface NoteData {
  _id: string;
  title: string;
  note: string[];
  noteFor: string;
  code: string;
  writtenOn: string;
  createdAt: string;
  updatedAt: string;
}

const NoteList: React.FC<{ params: any }> = ({ params }) => {
  const { slug } = params;
  const [notesList, setNotesList] = useState<NoteData[] | null>(null);
  const [note, setNote] = useState<NoteData | null>(null);
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    const fetchNoteList = async () => {
      try {
        await axios
          .get(`/api/magic-shop/${slug}`)
          .then((response) => setNotesList(response.data));
      } catch (error) {
        console.error("Error fetching note: ", error);
        return <NotFound />;
      }
    };

    fetchNoteList();
  }, [slug]);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        await axios
          .get(`/api/magic-shop/${slug}?code=${code}`)
          .then((response) => setNote(response.data));
      } catch (error) {
        console.error("Error fetching note: ", error);
      }
    };
    fetchNote();
  }, [slug, code]);

  return (
    <main>
      <Section>
        <div className="container flex flex-col items-center gap-y-4 min-h-[80vh]">
          <div className="flex flex-col gap-y-4 w-full">
            <h1 className="font-bold text-white capitalize">To {slug}</h1>
            <Divider className="bg-yellow h-1" />
            <div className="flex gap-x-10 mt-6">
              {notesList ? (
                <>
                  {notesList.map((note, i) => (
                    <NoteCard
                      key={i}
                      title={note.title}
                      writtenOn={note.writtenOn}
                      content={note.note[0]}
                      path={`/magic-shop?code=${note.code}`}
                    />
                  ))}
                </>
              ) : (
                Array.from({ length: 3 }, (_, i) => (
                  <NoteCardSkeleton key={i} />
                ))
              )}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default NoteList;
