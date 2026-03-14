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
import SSC from "../assets/scc.png";
import NMU from "../assets/nmu.png";

type HackathonLink = {
  href: string;
  icon: ReactNode;
  title: string;
};
export const DATA = {
  name: "Uday Ahire",
  initials: "UA",
  url: "https://github.com/udayahire2",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Design Engineer bridging the gap between design and engineering. I love building minimal, calm, and highly aesthetic user interfaces.",
  summary:
    "I specialize in product-grade UI/UX, focusing on flat surfaces, predictable spacing, and accessible interactions. With a deep passion for the 'liquid' feel of modern web animations, I craft scalable applications using React, Next.js, and Framer Motion. I believe that a UI should not just look like a template—it should feel like a premium SaaS product. I am constantly exploring new visual metaphors and refining my craft to bring modern, engaging digital experiences to life.",
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
        url: "https://youtube.com/@udayahire",
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

  work: [
    {
      company: "Design Studio",
      href: "https://example.com",
      badges: [],
      location: "Remote",
      title: "Design Engineer",
      logoUrl: "/atomic.png",
      start: "Jan 2023",
      end: "Present",
      description:
        "Architecting and developing high-fidelity user interfaces. Creating robust design systems, standardizing components, and implementing advanced animations using Framer Motion to ensure a premium, SaaS-like user experience.",
    },
    {
      company: "Tech Solutions",
      badges: [],
      href: "https://example.com",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/shopify.svg",
      start: "Jan 2021",
      end: "Dec 2022",
      description:
        "Built scalable web applications using React and TypeScript. Collaborated closely with designers to translate complex Figma designs into pixel-perfect frontend code. Optimized application performance and accessibility.",
    }
  ],
  internships: [
    {
      company: "PixelCraft Labs",
      href: "https://example.com",
      badges: [],
      location: "Pune, India",
      title: "UI Engineering Intern",
      logoUrl: "/lime.svg",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Worked on polished marketing and dashboard interfaces, converted Figma layouts into responsive Next.js components, and refined interaction details across shared UI primitives.",
    },
    {
      company: "NovaStack",
      href: "https://example.com",
      badges: [],
      location: "Remote",
      title: "Frontend Intern",
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
      href: "https://www.ssvpspoly.ac.in/",
      degree: "10th",
      logo: SSC,
      logoWrapperClassName: "bg-white p-0.5",
      logoClassName: "scale-110 object-cover",
      start: "2022",
      end: "2025",
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
      end: "Present",
    }
  ],
  projects: [
    {
      title: "UDX UI KIT",
      href: "https://github.com/udayahire2/udx-ui",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "A highly reusable, maintainable, and developer-friendly component library adhering to strict visual and motion rules for a calm, professional interface.",
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
        "Designed and developed a minimal, highly aesthetic developer portfolio template focusing on calm ui and smooth transitions.",
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
    }
  ],
  hackathons: [
    {
      title: "Designathon 2023",
      dates: "November 23rd - 25th, 2023",
      location: "Remote",
      description:
        "Developed a modern web application focusing on accessibility and seamless animations, winning best UI/UX award.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [] as HackathonLink[],
    }
  ],
} as const;
