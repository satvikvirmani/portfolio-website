import { displayFont } from "../lib/fonts";

const Queries = () => {
  return (
    <section className="w-full bg-primary xl:px-40 xl:py-20 md:px-12 md:py-12 px-4 py-8">
      <h1 className={`xl:text-5xl md:text-4xl text-3xl text-accent mb-12 ${displayFont.className}`}>Curious Queries</h1>
      <div className="grid grid-cols-2 xl:gap-24 md:gap-16 gap-8 text-accent">
        <div>
          <h1 className="text-xl my-4 text-secondary">What about stuff other than Machine Learning?</h1>
          <p className="text-white text-base">
            While machine learning vies for my attention, you’ll find me delving
            into general software development too. I love to dabble!
          </p>
        </div>
        <div>
          <h1 className="text-xl my-4 text-secondary">Your preferred programming coding-stack?</h1>
          <p className="text-white text-base">
            Python rules the roost, with Java ruling my heart.
          </p>
        </div>
        <div>
          <h1 className="text-xl my-4 text-secondary">You have a coding philosophy?</h1>
          <p className="text-white text-base">
            Coding isn’t just a profession, it’s a lifestyle. Every line of my
            code comes with a commitment of heart and soul.
          </p>
        </div>
        <div>
          <h1 className="text-xl my-4 text-secondary">Future plans of a code wizard?</h1>
          <p className="text-white text-base">
            Dressed in robes of deep learning algorithms, casting spells of
            regression, I envision myself as a Guardian of Data in the realm of
            AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Queries;
