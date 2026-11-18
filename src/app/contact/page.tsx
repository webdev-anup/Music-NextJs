"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // backend abhi nahi hai, isliye sirf success state dikha rahe hain
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-black px-4 py-12 pt-36">
      <div className="mx-auto max-w-xl">
        <Card className="border-white/[0.2] bg-zinc-900 text-white">
          <CardHeader>
            <CardTitle className="text-3xl">Contact Us</CardTitle>
            <CardDescription className="text-neutral-400">
              Have a question about our courses? Send us a message and we will
              get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <p className="text-teal-400">
                Thanks for reaching out! We will reply soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-neutral-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600">
                  Send message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ContactPage;
