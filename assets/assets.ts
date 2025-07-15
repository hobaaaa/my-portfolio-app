import { Assets, InfoItem, Project, Service } from "@/types";

import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import tailwind from "./tailwind.png";
import git from "./git.png";
import supabase from "./supabase.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import ai_icon from "./ai-icon.png";
import layout_icon from "./layout-icon.png";
import multi_icon from "./multi-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import { StaticImageData } from "next/image";

export const assets: Assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  tailwind,
  git,
  supabase,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  ai_icon,
  layout_icon,
  multi_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData: Project[] = [
  {
    title: "AI Interview Mock App",
    description: "AI-First UI/UX Design",
    id: "ai-interview",
    bgImage: "/work-1.png",
    techStack: [
      "Next.js 15",
      "TailwindCSS",
      "Firebase Auth",
      "Firestore",
      "Vapi SDK",
      "Google Gemini API",
    ],
    content: {
      intro:
        "AI-powered mock interview application developed using Next.js 15 App Router, Firebase Authentication, Vapi SDK, and TailwindCSS. The application allows users to simulate real interview sessions with AI agents, receive feedback, and track their progress. It was built to enhance interview preparation experience using modern web technologies.",
      features: [
        "Secure Sign Up & Login (Firebase Auth)",
        "Voice-based Interview Simulation (Vapi SDK)",
        "Dynamic Question Generation (Google Gemini API)",
        "Interview Feedback and Exercise Generation",
        "Fully Responsive Design (TailwindCSS)",
        "Protected Routes and User-Specific Data Management",
      ],
      lessons:
        "Learned about integrating AI tools with modern frontend stacks, managing voice-based async states, prompt tuning with Gemini, and ensuring secure user flows via Firebase.",
      images: [
        "/ai-interview/work-1.png",
        "/ai-interview/work-2.png",
        "/ai-interview/work-3.png",
      ],
      github: "https://github.com/hobaaaa/aiMockInterviews",
      demo: "https://ai-mock-interviews-olive-phi.vercel.app/",
    },
  },
  {
    title: "Project Management App",
    description: "Collaborative Web App with AI Insights",
    id: "project-management",
    bgImage: "/work-2.png",
    techStack: [
      "Next.js 15",
      "Supabase (Auth + PostgreSQL + Storage)",
      "Tailwind CSS",
      "Shadcn UI",
      "Zustand",
      "Zod",
      "Tiptap",
      "DnD Kit",
      "Recharts",
      "Resend",
    ],
    content: {
      intro:
        "Modern project management solution built with Next.js 15 App Router, featuring real-time collaboration, advanced task tracking, and AI-powered insights. Designed for seamless team productivity with cutting-edge tools and intuitive interfaces.",
      features: [
        "Secure Authentication with Supabase Auth",
        "Drag & Drop Task Management (DnD Kit)",
        "Rich Text Editor for task notes (Tiptap)",
        "Real-time Data Sync via Supabase and React Query",
        "Custom Data Visualizations using Recharts",
        "Email Notifications via Resend",
        "Type-safe Form Validation with Zod",
        "Global State Management using Zustand",
        "Responsive UI Components with Shadcn and Tailwind CSS",
      ],
      lessons:
        "Explored state synchronization across realtime channels, integrated drag-and-drop logic with persistent updates, and optimized forms using Zod. Gained deep experience in composing modular components and building productive multi-user flows.",
      images: [
        "/project-management/work-3.png",
        "/project-management/work-2.png",
        "/project-management/work-1.png",
        "/project-management/work-4.png",
      ],
      github: "https://github.com/hobaaaa/projectManagementApp",
      demo: "https://project-management-app-gules.vercel.app/",
    },
  },
  {
    title: "Swimming Pool Website",
    description: "Custom Web design",
    bgImage: "/work-3.png",
    id: "swimming-pool",
    techStack: [
      "Next.js 15",
      "TailwindCSS",
      "TypeScript",
      "Web3 Forms",
      "Motion",
    ],
    content: {
      intro:
        "A responsive and animated landing page built for a local pool construction business in Denizli, Turkey. This project showcases a clean UI/UX flow, smooth animations, and brand-focused design — ideal for small business websites.",
      features: [
        "Fully responsive for desktop and mobile",
        "Animated entry using motion elements",
        "Custom branding for Safir Yapı",
        "Contact form integrated with Web3Forms API for seamless message sending.",
        "Clear call-to-action for customer engagement",
        "Fully optimized images with Next.js Image component for performance.",
      ],
      lessons: "",
      images: [
        "/swimming-pool/work-1.png",
        "/swimming-pool/work-2.png",
        "/swimming-pool/work-3.png",
      ],
      github: "https://github.com/hobaaaa/swimming-pool-app",
      demo: "https://swimming-pool-app.vercel.app/",
    },
  },
  {
    title: "AI UI Toolkit",
    description: "Frontend Development",
    bgImage: "/work-4.png",
    id: "ai-ui-toolkit",
    techStack: ["Next.js 15", "TailwindCSS"],
    content: {
      intro: "",
      features: [""],
      lessons: "",
      images: [""],
      github: "",
      demo: "",
    },
  },
];

export const serviceData: Service[] = [
  {
    icon: assets.web_icon,
    title: "Custom Web design",
    description:
      "Responsive, user-friendly designs, Interfaces that combine aesthetics and functionality, Special solutions for brand identity",
  },
  {
    icon: assets.ai_icon,
    title: "AI-First UI/UX Design",
    description:
      "Interactive interfaces with artificial intelligence (chatbots, recommendation systems), Prompt-oriented user experience design, experience design that understands and guides the AI ​​user",
  },
  {
    icon: assets.layout_icon,
    title: " Frontend Development",
    description:
      "Performance-oriented coding with Next.js & Tailwind, Component-based, reusable architecture, SEO and performance optimizations",
  },
  {
    icon: assets.multi_icon,
    title: "Multilingual & Accessible Design",
    description:
      "Multilingual structures, Coding in accordance with accessibility standards, Global user experience thinking",
  },
];

export const infoList: InfoItem[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Management Information Systems (MIS)",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "All my projects are in the works section.",
  },
];

export const toolsData: StaticImageData[] = [
  assets.vscode,
  assets.firebase,
  assets.supabase,
  assets.tailwind,
  assets.git,
];
