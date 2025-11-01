import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Github from "../pages/Github"
import Google from "../pages/Google";
import Email from "../pages/Email";

export default async function Loginpage() {
  const session = await getServerSession(authOptions)
if(session){
    return  redirect('/')
}
  return (
    <div className=" h-screen flex justify-center items-center flex-col my-10">
 <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        
          <Button variant="link">Sign Up</Button>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
       <Email/>
          
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      
     
        <Github/>
        <Google/>
      </CardFooter>
    </Card>
    </div>
   
  )
}
