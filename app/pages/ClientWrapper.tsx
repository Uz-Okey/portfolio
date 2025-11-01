'use client'


import { Cursor } from "@/components/ui/custom-cursor";
import { SessionProvider } from "next-auth/react";
import HeartIcon from "./HeartIcon";
import NavbarPage from "./NavbarPage";



export default function ClientWrapper({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
    
                <SessionProvider>
                    <Cursor name="" cursorColor="green" customSVG={<HeartIcon />}>

                        <NavbarPage />
                        {children}

                    </Cursor>
                </SessionProvider>
         
    );
}
