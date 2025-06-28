import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "education",
    title: "Arch Linux",
    description: "Full-stack education platform for SD N 1 Padangsari",
    technologies: ["Arch Linux", "Livewire", "Fillament","SQlite","TailwindCSS"],
    emoji: "",
    gradient: "from-blue-600 to-purple-600",
    image: "/images/ArchLinux.jpeg",
  },
  {
    id: "e-commerce",
    title: "Ubuntu",
    description: "Full-stack E-commerce Platform for Why Coffee",
    technologies: ["Ubuntu", "TailwindCSS", "SQlite"],
    emoji: "",
    gradient: "from-green-600 to-teal-600",
    image: "/images/Ubuntu.jpeg",
  },
  {
    id: "education",
    title: "Fedora 39",
    description: "sistem LMS berbasis Docker dengan Django",
    technologies: ["Fedora", "Django", "Nginx","PosgreSQL"],
    emoji: "",
    gradient: "from-orange-600 to-red-600",
    image: "/Fedora.jpeg",
  },
]
