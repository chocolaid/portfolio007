import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;
export default function ProjectsPage() {
  // Dummy data for projects
  const dummyProjects = [
    {
      slug: "project-1",
      title: "Project 1",
      date: "2022-02-10", // Add your desired date format
      description: "Description of Project 1",
      published: true,
    },
    // Add more dummy projects as needed
  ];

  const views = dummyProjects.reduce((acc, project) => {
    acc[project.slug] = 0; // Set views to 0 for all projects
    return acc;
  }, {} as Record<string, number>);

  const featured = dummyProjects.find((project) => project.slug === "project-1")!;
  // Similar adjustments for top2, top3, and sorted arrays

  // Rest of the code remains unchanged

  return (
    // The rest of your component code...
  );
}
