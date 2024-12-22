"use client";

import Image from "next/image";
import Hero from "@/app/hero/hero";
import Description from "@/app/description/description";
import ProjectsWrapper from "@/app/projects/projectsWrapper";
import Experiences from "./experiences/experiencesWrapper";
import Queries from "./queries/queries";
import Footer from "./footer/footer";
import EmojiDivider from "./emojiDivider/emojiDivider";

export default function Home() {
  return (
    <>
          <main className="">
            <Hero />
            <Description />
            <ProjectsWrapper />
            <EmojiDivider />
            <Experiences />
            <Queries />
            <Footer />
          </main>
    </>
  );
}
