"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModel from "./PlayVideoModel";

interface iAppProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
}

export default function MovieButton({
  age,
  duration,
  id,
  releaseDate,
  overview,
  title,
  youtubeUrl,
}: iAppProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white hover:bg-white/70"
      >
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <PlayVideoModel
        state={open}
        changeState={setOpen}
        age={age}
        duration={duration}
        overview={overview}
        title={title}
        youtubeUrl={youtubeUrl}
        key={id}
        release={releaseDate}
      />
    </>
  );
}
