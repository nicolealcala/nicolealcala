import { Divider, Link } from "@heroui/react";
import React from "react";

interface NoteCard {
  title: string;
  writtenOn: string;
  content: string;
  path: string;
}
export const NoteCard: React.FC<NoteCard> = ({
  title,
  writtenOn,
  content,
  path,
}) => {
  return (
    <Link href={path}>
      <div className="flex flex-col gap-y-4 p-4 bg-yellow-50 border border-yellow text-tear rounded-md z-30 max-w-sm cursor-pointer">
        <div className="text-left space-y-2">
          <h2 className="font-bold text-yellow-700">{title}</h2>
          <p className="text-xs text-yellow-500">Written on {writtenOn}</p>
        </div>
        <Divider className="bg-yellow" />
        <p className="max-h-auto overflow-hidden line-clamp-6 text-yellow-600">
          {content}
        </p>
      </div>
    </Link>
  );
};

export const NoteCardSkeleton = () => (
  <div className="p-4 bg-yellow-50 rounded-md z-30 w-[320px]">
    <div className="flex flex-col gap-y-4 animate-pulse">
      <div className="h-5 bg-yellow rounded w-4/5"></div>
      <div className="h-4 bg-yellow rounded w-2/3"></div>
      <div className="mt-4 space-y-2">
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} className="h-4 bg-yellow rounded"></div>
        ))}
      </div>
    </div>
  </div>
);
