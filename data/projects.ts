import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "education",
    title: "Arch Linux",
    description: "Distribusi Linux yang berorientasi pada minimalis dan fleksibilitas, ditujukan untuk pengguna Linux berpengalaman yang ingin membangun sistem mereka sendiri dari awal.",
    technologies: ["Arch Linux", "Livewire", "Fillament","SQlite","TailwindCSS"],
    emoji: "",
    gradient: "from-blue-600 to-purple-600",
    image: "/images/ArchLinux.jpeg",
  },
  {
    id: "e-commerce",
    title: "Ubuntu",
    description: "Sistem operasi (OS) open-source berbasis Linux yang dikembangkan oleh Canonical Ltd.",
    technologies: ["Ubuntu", "TailwindCSS", "SQlite"],
    emoji: "",
    gradient: "from-green-600 to-teal-600",
    image: "/images/Ubuntu.jpeg",
  },
  {
    id: "education",
    title: "Fedora 39",
    description: "Distribusi Linux Fedora yang dikembangkan oleh Fedora Project, didukung oleh komunitas pemrogram, dan disponsori oleh Red Hat.",
    technologies: ["Fedora", "Django", "Nginx","PosgreSQL"],
    emoji: "",
    gradient: "from-orange-600 to-red-600",
    image: "/images/Fedora.jpeg",
  },
]
