'use client'
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
export default function Google() {
    return (
        <div>
            <Button onClick={()=> signIn('google',{
                callbackUrl:`${window.location.origin}`
            })} variant="outline" className="w-full">
          Login with Google
        </Button>
        </div>
    );
}