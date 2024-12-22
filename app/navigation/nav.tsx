import { displayFont } from "../lib/fonts";

const Nav = () => {
    return ( 
        <nav className="w-full bg-primary xl:px-40 xl:pt-10 md:px-12 md:pt-6 px-4 pt-4 text-white">
            <h1 className={`${displayFont.className} text-xl`}>Satvik Virmani</h1>
        </nav>
     );
}
 
export default Nav;