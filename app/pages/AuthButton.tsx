'use client'

import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AuthButton() {
  const { data: session, status } = useSession()

  // ⏳ While NextAuth is checking the session, show nothing
  if (status === "loading") {
    return null
  }

  // ✅ If user is logged in
  if (session) {
    return (
      <Button
        onClick={() => signOut()}
        variant="outline"
        className="text-gray-900 bg-white px-3 py-2 rounded-md hover:text-gray-800"
      >
        Logout
      </Button>
    )
  }

  // ❌ If user not logged in
  return (
    <div className="flex gap-2">
      <Link href="/Loginpage">
        <Button variant="outline">Sign In</Button>
      </Link>
      <Link href="/Loginpage">
        <Button variant="outline">Sign Up</Button>
      </Link>
    </div>
  )
}
