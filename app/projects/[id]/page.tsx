import Footer from "@/app/footer/footer";
import { displayFont } from "@/app/lib/fonts";
import Nav from "@/app/navigation/nav";

const ProjectShowcase = ({ params }: { params: { id: string } }) => {
  return (
    <>
    <Nav />
    <section className="w-full bg-primary xl:px-40 xl:py-20 md:px-12 md:py-12 px-4 py-8">
      <div className="w-full h-full">
        <h3 className="xl:text-xl md:text-lg text-base text-accent">
          Machine Learning
        </h3>
        <h1 className="xl:text-4xl md:text-3xl text-2xl text-accent">
          Project Showcase
        </h1>
      </div>
      <div className="w-full max-w-full flex flex-col gap-8 py-16">
          <img
            src="https://placehold.co/600x400?text=Placeholder"
            alt="hero"
            className="w-full max-w-full h-full max-h-full md:max-h-[200px] lg:max-h-[300px] xl:max-h-[400px] object-cover"
          />
        <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <img
              src="https://placehold.co/600x400?text=Placeholder"
              alt="hero"
              className="w-full max-w-full h-full max-h-full md:max-h-[200px] lg:max-h-[300px] xl:max-h-[400px] object-cover"
            />
          
            <img
              src="https://placehold.co/600x400?text=Placeholder"
              alt="hero"
              className="w-full max-w-full h-full max-h-full md:max-h-[200px] lg:max-h-[300px] xl:max-h-[400px] object-cover"    
            />
          
            <img
              src="https://placehold.co/600x400?text=Placeholder"
              alt="hero"
              className="w-full max-w-full h-full max-h-full md:max-h-[200px] lg:max-h-[300px] xl:max-h-[400px] object-cover"
            />
        </div>
      </div>
      <div className="w-full py-16 grid grid-cols-1 xl:grid-cols-2 gap-8 text-white">
        <div>
            <h1 className="text-accent mb-4 text-2xl">Overview</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, optio illo? Tenetur accusamus fugiat voluptates eos adipisci animi saepe, earum ratione officiis et consectetur amet officia pariatur, ad hic nobis?
            </p>
        </div>
        <div>
            <h1 className="text-accent mb-4 text-2xl">Approach</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quis necessitatibus odio ipsa assumenda, voluptate minima minus blanditiis hic dolore maxime earum provident quia dolorum sit voluptas, ipsam doloremque commodi?</p>
        </div>
      </div>
      <div className="w-full bg-accent flex flex-row justify-between xl:gap-8 gap-4 p-4 text-tertairy">
      <div className={displayFont.className}>
        <p className="text-xl">Go to the project</p>
      </div>
      <div className="grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          x="0px"
          y="0px"
          className="w-12  h-12"
        >
          <title>Arrow</title>
          <g data-name="Layer 32">
            <path d="M21.8,84.93C17.17,73.18,18.3,57.49,31,51.23c5.9-2.92,13.64-2.24,18.55,2.32,3.81,3.54,4,9.65-1.5,11.39a12.56,12.56,0,0,1-11.27-2.37C24.87,53,35.34,37.29,45.69,32c12-6.15,26.47-5.58,38.32.5,1.72.88,3.24-1.71,1.52-2.59-12.85-6.59-28.39-7.17-41.36-.5C33.6,34.83,24.86,47,30.31,59.07a15.82,15.82,0,0,0,13.12,9.25c4.56.38,10.38-1.4,12-6.18,1.89-5.46-2.94-10.83-7.38-13.28a20,20,0,0,0-16.28-1.22C16.2,53.3,13.49,72,18.91,85.73c.7,1.77,3.6,1,2.89-.8Z" />
            <path d="M74.83,20.92A134.38,134.38,0,0,1,86,32l.31-2.35a105.47,105.47,0,0,0-15.66,9.91c-1.51,1.16,0,3.77,1.52,2.59a104.86,104.86,0,0,1,15.65-9.91,1.52,1.52,0,0,0,.31-2.36A134.48,134.48,0,0,0,77,18.8c-1.44-1.27-3.58.85-2.12,2.12Z" />
          </g>
        </svg>
      </div>
    </div>
    </section>
    <Footer /></>
  );
};

export default ProjectShowcase;
