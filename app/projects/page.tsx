import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";

// Manually added example project data
const exampleProjects = [
  {
    slug: "example-project",
    date: "2024-02-11", // Replace with your desired date
    title: "Example Project",
    description: "This is an example project description.",
    published: true,
  },
  // Add more projects as needed
];

const revalidate = 60;

export default function ProjectsPage() {
  // Dummy views data for the example project
  const views = {
    "example-project": 100, // Replace with your desired view count
  };

  const [featured, top2, top3, ...sorted] = exampleProjects;

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        {/* Rest of the code remains unchanged */}
      </div>
    </div>
  );
}
