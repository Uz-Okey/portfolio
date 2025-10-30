import Link from "next/link";
import {
    faLinkedinIn,
    faXTwitter,
    faInstagram,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className=" border-t border-green-100 py-10 mt-10">
            <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-extrabold text-green-800 flex items-center space-x-2 hover:text-green-600 transition-colors"
                >
                    <span className="border-green-700 text-green-700 border-r-4  p-2 m-0 rounded-full">O</span>
                    <span className="text-gray-800 m-0 font-semibold tracking-tight">
                        Okey.dev
                    </span>
                </Link>

                {/* Copyright */}
                <p className="text-gray-600 text-sm text-center md:text-left">
                    © {new Date().getFullYear()} Okey.dev — All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex flex-col">
                
                    <div className="flex space-x-4">

                        <Link href="https://x.com/Okechy81" target="_blank">
                            <FontAwesomeIcon icon={faXTwitter} className="w-8 transition-all duration-700 ease-in-out hover:bg-gray-700 hover:text-white rounded-sm border border-gray-700 p-2" />
                        </Link>
                        <Link href="https://instagram.com/okey_chy21" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="w-8 transition-all duration-700 ease-in-out hover:bg-gray-700 hover:text-white rounded-sm border border-gray-700 p-2" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/uzondu-okey/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedinIn} className="w-8 transition-all duration-700 ease-in-out hover:bg-gray-700 hover:text-white rounded-sm border border-gray-700 p-2" />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=100086812781421" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} className="w-7 transition-all duration-700 ease-in-out hover:bg-gray-700 hover:text-white rounded-sm border border-gray-700 p-2" />
                        </Link>
                    </div>
                </div>


            </div>



        </footer>
    );
}
