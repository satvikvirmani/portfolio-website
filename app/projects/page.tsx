import Footer from "@/app/footer/footer";
import { displayFont } from "@/app/lib/fonts";
import Nav from "@/app/navigation/nav";

const Projects = ({ params }: { params: { id: string } }) => {
  return (
    <>
    <Nav />
    <section className="w-full bg-primary xl:px-40 xl:py-20 md:px-12 md:py-12 px-4 py-8">
      <div className="w-full h-full">
        <h1 className="xl:text-4xl md:text-3xl text-2xl text-accent">
          Projects
        </h1>
      </div>
    <div className="w-full grid grid-cols-1 gap-16 py-16">
        <div className="w-full">
        <img
            src="https://placehold.co/600x400?text=Placeholder"
            alt="hero"
            className="w-full max-w-full h-full max-h-full md:max-h-[200px] lg:max-h-[300px] xl:max-h-[400px] object-cover"
          />
          <div className="flex flex-row justify-between text-white mt-4 text-2xl">
            <p>
                Title
            </p>
            <p>
                2023    
            </p>
          </div>
        </div>
        <div className="w-full">
        <img
            src="https://placehold.co/600x400?text=Placeholder"
            alt="hero"
            className="w-full max-w-full h-full max-h-full md:max-h-[200px] lg:max-h-[300px] xl:max-h-[400px] object-cover"
          />
          <div className="flex flex-row justify-between text-white mt-4 text-2xl">
            <p>
                Title
            </p>
            <p>
                2023    
            </p>
          </div>
        </div>
        <div className="w-full">
        <img
            src="https://placehold.co/600x400?text=Placeholder"
            alt="hero"
            className="w-full max-w-full h-full max-h-full md:max-h-[200px] lg:max-h-[300px] xl:max-h-[400px] object-cover"
          />
          <div className="flex flex-row justify-between text-white mt-4 text-2xl">
            <p>
                Title
            </p>
            <p>
                2023    
            </p>
          </div>
        </div>
    </div>
    </section>
    <Footer /></>
  );
};

export default Projects;
