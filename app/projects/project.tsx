import { clsx } from "clsx";
import { displayFont } from "../lib/fonts";

const Project = ({ id }: { id: number }) => {
  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8">
      <div
        className={clsx(
          { "md:order-first": id % 2 != 0, "md:order-last": id % 2 == 0 },
          "grid order-last text-accent place-items-center"
        )}
      >
        <div className="grid grid-cols-1 gap-4 max-w-full">
          <h3 className={`xl:text-4xl text-3xl ${displayFont.className}`}>
            Software Development Projects - A Journey through my Artwork
          </h3>
          <p className="text-base">
            Embark on a journey through the projects that I've passionately
            crafted during my second year. Each piece in this collection is a
            fragment of my growth and learning in the realm of software
            development.
          </p>
        </div>
      </div>
      <div
        className={clsx(
          { "place-items-end": id % 2 != 0, "place-items-start": id % 2 == 0 },
          "grid  max-w-full rounded-2xl overflow-hidden"
        )}
      >
        <div className="relative rounded-2xl overflow-hidden xl:w-400px xl:h-400px w-full">
          <img src="/assets/project.jpg" alt="project" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Project;
