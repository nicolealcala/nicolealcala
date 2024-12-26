import React from "react";
import NoteHoles from "./note-holes";
import NoteSkeleton from "./note-skeleton";
import { formatDate } from "@/lib/util/format-date";

const Note = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="font-bold text-4xl text-center text-yellow-800">
        A sneak peak at my notes app...
      </h1>
      <div className="flex flex-col border items-center justify-center border-yellow max-w-2xl p-0 rounded-lg bg-yellow-50 letter">
        {data ? (
          <div className="flex flex-col gap-y-4 p-4 md:p-7 mt-4 text-yellow-600">
            <p className="flex justify-end text-xs text-end text-yellow-500">
              Written on {formatDate(data?.writtenOn)}
              <br />
              {data?.updatedAt
                ? `Updated on ${formatDate(data?.updatedAt)}`
                : ""}
            </p>
            <p className="mt-6 font-bold italic underline underline-offset-[12px] decoration-yellow pointer-events-none">
              To {data?.noteFor},
            </p>
            <div>
              {data?.note.map((content: string, index: any) => (
                <p key={index} className="indent-8 leading-7 mt-6 text-justify">
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
        ) : (
          <NoteSkeleton />
        )}
      </div>
    </div>
  );
};

export default Note;
