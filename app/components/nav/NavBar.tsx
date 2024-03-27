import Link from "next/link";
import Container from "../Container";
import { Rubik_Bubbles } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import { getCurrentUser } from "@/actions/getCurrentUser";
import CategoryInput from "../inputs/CategoryInput";
import Categories from "./Categories";
import SearchBar from "../SearchBar";

const rubik = Rubik_Bubbles ({ subsets: ['latin'], weight: ['400'] })

const NavBar = async () => {

    const currentUser = await getCurrentUser();
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
                <div className="hidden md:block"><SearchBar/></div>
                <div className="flex items-center gap-8 md:gap-12">
                   <CartCount/>
                    <UserMenu currentUser = {currentUser}/>
                </div>
                </div>
            </Container>
        </div>
        <Categories/>
        </div>);
}
 
export default NavBar;