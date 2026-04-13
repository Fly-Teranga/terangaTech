"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/ui/AppIcon";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <h1 className="text-primary opacity-20 text-9xl font-bold">404</h1>
          </div>
        </div>
        <h2 className="text-onBackground mb-2 text-2xl font-medium">
          Page Not Found
        </h2>
        <p className="text-onBackground/70 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
          back!
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => window.history.back()}
            className="bg-primary text-primary-foreground inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-colors duration-200 hover:bg-primary/90"
          >
            <Icon name="ArrowLeftIcon" size={16} />
            Go Back
          </button>
          <button
            onClick={() => router.push("/")}
            className="border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-medium transition-colors duration-200"
          >
            <Icon name="HomeIcon" size={16} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
