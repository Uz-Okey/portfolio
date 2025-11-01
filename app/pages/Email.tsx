'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Email() {
  const [mail, setMail] = useState('')

  async function handleEmail() {
    if (!mail) {
      alert("Please enter your email first!")
      return
    }

    try {
      const result = await signIn('email', {
        email: mail,
        callbackUrl: `${window.location.origin}`,
        redirect: false, // prevents automatic redirect
      })

      if (result?.error) {
        alert("Login failed. Please check your email again.")
      } else {
        alert("Login link sent to your email!")
      }
    } catch (error) {
      console.error("Sign-in error:", error)
      alert("Something went wrong. Try again later.")
    }
  }

  return (
    <div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          required
          onChange={(e) => setMail(e.target.value)}
        />
        <Button type="button" onClick={handleEmail} className="w-full">
          Login
        </Button>
      </div>
    </div>
  )
}
