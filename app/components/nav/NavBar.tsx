import Link from "next/link";
import Container from "../Container";
import { Rubik_Bubbles } from "next/font/google";

const rubik = Rubik_Bubbles ({ subsets: ['latin'], weight: ['400'] })

const NavBar = () => {
    return (  <div className="
        sticky 
        top-0
        w-full
        bg-slate-200
        z-30
        shadow-sm
        "
    >
        <div className="py-4 border-b-[1px]">
            <Container>
                <div className="
                flex
                item-center
                justify-between
                gap-3
                md-gap-0
                ">
                <Link href="/" className={`${rubik.className} text-2xl`}>K-Bazar</Link>
                <div className="hidden md:block">Search</div>
                <div className="flex items-center gap-8 md:gap-12">
                    <div>CartCount</div>
                    <div>UserMenu</div>
                </div>
                </div>
            </Container>
        </div>
        
        </div>);
}
 
export default NavBar;