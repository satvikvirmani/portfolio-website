import { displayFont } from "../lib/fonts";

const Description = () => {
    return ( 
        <section className="w-full bg-accent xl:px-40 xl:py-20 md:px-12 md:py-12 px-4 py-8 grid place-items-start text-tertairy">
            <div className="grid grid-cols-1 md:gap-16 gap-8">
                <p className="text-xl">
                    Who?
                </p>
                <h1 className={`xl:text-5xl text-3xl capitalize ${displayFont.className}`} style={{maxWidth: "800px"}}>
                    I'm an alleged wizard of regressions and ones' and zeros.
                </h1>
            </div>
        </section>
     );
}
 
export default Description;