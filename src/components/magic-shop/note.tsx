import React from "react";
import NoteHoles from "./note-holes";
import NoteSkeleton from "./note-skeleton";

const Note = ({ data }: any) => {
  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="font-bold text-4xl text-center text-white">
        A sneak peak at my notes app...
      </h1>
      <div className="flex flex-col border items-center justify-center border-white max-w-2xl p-4 rounded-lg bg-[#303030] z-50">
        <NoteHoles />
        {data ? (
          <div className="flex flex-col gap-y-4 p-4 mt-4 text-white">
            <p className="flex justify-end text-xs text-yellow">
              Written on {data?.writtenOn}
            </p>
            <p className="mt-6 font-bold italic underline underline-offset-[12px] decoration-yellow pointer-events-none">
              To {data?.noteFor},
            </p>
            <div className="letter">
              {data?.note.map((content: string, index: any) => (
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
            <p className="text-xs mt-6 text-[#909090]">
              Scan the QR code from time to time.
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
