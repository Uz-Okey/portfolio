'use client'
import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react'

export default function Github() {
    return (
        <div>
            <Button onClick={()=> signIn('github',{
                callbackUrl:`${window.location.origin}`
            })} variant="outline" className="w-full">
                Login with Github
            </Button>
        </div>
    );
}