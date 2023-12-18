import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterLists";
import {MdFacebook} from "react-icons/md";
import {AiFillTwitterCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai";

const Footer = () => {
    return ( <footer className="
    bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
             <FooterList>
                <h3 className="text-base font-bold mb-2">Shop Categories</h3>
                <Link href='#'>Football</Link>
                <Link href='#'>Cricket</Link>
                <Link href='#'>Basketball</Link>
                <Link href='#'>Volleyball</Link>
                <Link href='#'>Swimming</Link>
                <Link href='#'>Skates</Link>
             </FooterList>
             <FooterList>
                <h3 className="text-base font-bold mb-2">Customer Service</h3>
                <Link href='#'>Contact Us</Link>
                <Link href='#'>Shipping Policy</Link>
                <Link href='#'>Return and Exchanges</Link>
                <Link href='#'>FAQ</Link>
             </FooterList>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
           
            <p className="mb-2">Welcome to K-bazar – Your Ultimate Destination for Quality Sports Goods!At K-bazar, we are passionate about
            sports and dedicated to providing enthusiasts with top-notch equipment for football, cricket, basketball, volleyball, swimming, 
            and skates.Whether you're a seasoned athlete or a budding sports enthusiast, we have everything you need to enhance your game 
            and experience the joy of sports.</p>
            
            <p>&copy;{new Date().getFullYear()} K-Bazar.All rights reserved.</p>
            </div>
            <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
            <Link href='#'>
                <MdFacebook size={24} />    
            </Link>
            <Link href='#'>
                <AiFillTwitterCircle size={24} />    
            </Link>
            <Link href='#'>
                <AiFillInstagram size={24} />    
            </Link>
            <Link href='#'>
                <AiFillYoutube size={24} />    
            </Link>

            </div>
            </FooterList>
            </div>
        </Container>
    </footer> );
}
 
export default Footer;