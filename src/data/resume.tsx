import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import type { ReactNode } from "react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { SSVPSLogo } from "@/components/ui/svgs/ssvps";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Figma } from "@/components/ui/svgs/figma";
import { Framer } from "@/components/ui/svgs/framer";
import { UIUX } from "@/components/ui/svgs/uiux";
import { Cpp } from "@/components/ui/svgs/cpp";
import SSC from "../assets/scc.png";
import NMU from "../assets/nmu.png";

export const DATA = {
  name: "Uday Ahire",
  initials: "UA",
  url: "https://github.com/udayahire2",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Passionate Frontend Developer dedicated to building intuitive, high-performance web experiences with modern architecture.",

  animatedRoles: [
    "Frontend Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Student",
  ],

  descriptionSuffix:
    "focused on building responsive web applications and practical digital products.",

  summary:
    "I am a frontend developer driven by the challenge of creating seamless digital products. With a deep focus on React, Next.js, and the modern web ecosystem, I bridge the gap between complex backend logic and pixel-perfect user interfaces.\n\nI believe in writing clean, scalable code and building components that are as beautiful under the hood as they are on the screen. My goal is always to deliver value through performance and exceptional user experience.\n\nCurrently, I am exploring advanced frontend patterns and performance optimization techniques to build even faster and more reliable web applications that users love.",
  avatarUrl: "https://avatars.githubusercontent.com/u/166685625?v=4",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "Framer Motion", icon: Framer },
    { name: "TailwindCSS", icon: Tailwindcss },
    { name: "Figma", icon: Figma },
    { name: "UI/UX Design", icon: UIUX },
    { name: "C++", icon: Cpp },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@udayahire.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/udayahire2",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/udayahire",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/udayahire",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@codewithuday2025",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:auday248@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  internships: [
    {
      company: "Sumago Infotech Private Limited",
      href: "https://example.com",
      badges: [],
      location: "Remote",
      title: "Web Developement",
      logoUrl: "/lime.svg",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Worked on polished marketing and dashboard interfaces, converted Figma layouts into responsive Next.js components, and refined interaction details across shared UI primitives.",
    },
    {
      company: "Acmegrade PVT",
      href: "https://example.com",
      badges: [],
      location: "Remote",
      title: "Web Develope MERN",
      logoUrl: "/splunk.svg",
      start: "Jan 2024",
      end: "Apr 2024",
      description:
        "Built internal product screens with React and TailwindCSS, improved consistency inside the component library, and shipped accessibility fixes for form and navigation flows.",
    },
  ],
  education: [
    {
      school: "SSC",
      href: "https://mahahsscboard.in/",
      degree: "10th",
      logo: SSC,
      logoWrapperClassName: "bg-white p-0.5",
      logoClassName: "scale-110 object-cover",
      start: "2021",
      end: "2022",
    },
    {
      school: "SSVPS Polytechnic",
      href: "https://www.ssvpspoly.ac.in/",
      degree: "Diploma in Computer Engineering",
      logo: SSVPSLogo,
      logoWrapperClassName: "bg-background p-1.5",
      logoClassName: "scale-[1.15]",
      start: "2022",
      end: "2025",
    },
    {
      school: "North Maharashtra University",
      href: "https://nmu.ac.in/",
      degree: "Computer Engineering",
      logo: NMU,
      logoWrapperClassName: "bg-white p-1",
      start: "2025",
      end: "present",
    }
  ],
  projects: [
    {
      title: "UDX UI KIT",
      href: "https://github.com/udayahire2/udx-ui",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "A reusable component library designed to help developers build clean and consistent user interfaces faster.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
        "Shadcn UI",
        "GSAP",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/udayahire2",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/udayahire2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "NMU STUDY HUB",
      href: "https://github.com/udayahire2/nmu",
      dates: "June 2025 - Nov 2025",
      active: false,
      description:
        "A web platform designed to help students access academic resources more easily. The project focuses on organizing study materials and simplifying the process of finding important educational content.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "MongoDB Atlas"
      ],
      links: [
        {
          type: "Website",
          href: "https://nmustudyhub.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/udayahire2/nmu",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Portfolio",
      href: "https://github.com/udayahire2/uday-portfolio",
      dates: "June 2025 - Nov 2025",
      active: true,
      description:
        "Build a Portfolio Templater For Developer and UIUX Designer",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Lenis",
        "GSAP",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://udayahireexe.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/udayahire2/nmu",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Local Govern Panchayat Management",
      href: "https://github.com/udayahire2/uday-portfolio",
      dates: "June 2025 - Nov 2025",
      active: true,
      description:
        "A web-based management system designed to help local village administration manage records and services such as taxes, certificates, government schemes, and citizen information more efficiently.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MYSQL",

      ],
      links: [

        {
          type: "Source",
          href: "https://github.com/udayahire2/gram-panchayat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    }
  ],
  design: [
    {
      title: "UDX UI Kit Components",
      href: "#",
      dates: "December 2025 - Present",
      active: true,
      description:
        "A modern Navigation Thats look Premium and calm supports dark and light mode.",
      technologies: [
        "Figma",
        
      ],
      links: [
        {
          type: "Prototype",
          href: "#Live",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "File",
          href: "#file",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Portfolio Landing Page",
      href: "#source",
      dates: "March 2026 - Present ",
      active: true,
      description:
        "Beautiful Light theme Portfolio Desinged for Design Engineer.",
      technologies: [
        "Figma",
        "React"
      ],
      links: [
        {
          type: "Prototype",
          href: "#live",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "file",
          href: "#file",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    
  ],
} as const;
