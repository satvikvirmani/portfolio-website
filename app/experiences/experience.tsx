import { displayFont } from "../lib/fonts";

const Experience = () => {
  return (
    <div className="w-full bg-accent flex xl:flex-row flex-col justify-between xl:gap-8 gap-4 md:p-12 p-4 text-tertairy">
      <div className={displayFont.className}>
        <p className="text-3xl">Senior Developer</p>
      </div>
      <div>
        <p className="text-base">npx create-next-app@latest

          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          libero quos debitis sapiente reiciendis ipsum illum numquam veniam
          minima laboriosam distinctio, modi corporis aperiam asperiores
          dignissimos suscipit perspiciatis et! Praesentium.
        </p>
      </div>
      <div className="hidden xl:grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          x="0px"
          y="0px"
          className="w-16 h-16"
        >
          <title>Arrow</title>
          <g data-name="Layer 32">
            <path d="M21.8,84.93C17.17,73.18,18.3,57.49,31,51.23c5.9-2.92,13.64-2.24,18.55,2.32,3.81,3.54,4,9.65-1.5,11.39a12.56,12.56,0,0,1-11.27-2.37C24.87,53,35.34,37.29,45.69,32c12-6.15,26.47-5.58,38.32.5,1.72.88,3.24-1.71,1.52-2.59-12.85-6.59-28.39-7.17-41.36-.5C33.6,34.83,24.86,47,30.31,59.07a15.82,15.82,0,0,0,13.12,9.25c4.56.38,10.38-1.4,12-6.18,1.89-5.46-2.94-10.83-7.38-13.28a20,20,0,0,0-16.28-1.22C16.2,53.3,13.49,72,18.91,85.73c.7,1.77,3.6,1,2.89-.8Z" />
            <path d="M74.83,20.92A134.38,134.38,0,0,1,86,32l.31-2.35a105.47,105.47,0,0,0-15.66,9.91c-1.51,1.16,0,3.77,1.52,2.59a104.86,104.86,0,0,1,15.65-9.91,1.52,1.52,0,0,0,.31-2.36A134.48,134.48,0,0,0,77,18.8c-1.44-1.27-3.58.85-2.12,2.12Z" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Experience;
