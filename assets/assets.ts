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
import location_icon_dark from "./location_icon_dark.png";
import location_icon from "./location_icon.png";
import phone_icon from "./phone_icon.png";
import phone_icon_dark from "./phone_icon_dark.png";

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
  location_icon_dark,
  location_icon,
  phone_icon,
  phone_icon_dark,
};

export const workData: Project[] = [
  {
    title: "Artexo",
    description: "Multi-tenant SaaS appointment platform",
    id: "artexo",
    bgImage: "/artexo-app/work-1.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    content: {
      intro:
        "Artexo is a multi-tenant appointment management platform with authentication, role-based access, and public booking flows. It focuses on scalable SaaS structure, clean user flows, and business-ready appointment operations.",
      features: [
        "Multi-tenant application architecture",
        "Authentication and role-based access control",
        "Public booking flow for customers",
        "Supabase and PostgreSQL data layer",
        "Responsive dashboard interface",
      ],
      lessons:
        "Improved SaaS architecture skills around tenant-aware data modeling, protected routes, and production-focused dashboard flows.",
      images: [
        "/artexo-app/work-1.png",
        "/artexo-app/work-2.png",
        "/artexo-app/work-3.png",
        "/artexo-app/work-4.png",
      ],
      github: "",
      demo: "",
    },
  },
  {
    title: "AI Mock Interview App",
    description: "Voice-based AI interview platform",
    id: "ai-interview",
    bgImage: "/work-1.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Firestore",
      "Gemini AI",
      "Vapi AI",
    ],
    content: {
      intro:
        "Voice-based AI interview platform built with Next.js, Firebase, Firestore, Gemini AI, and Vapi AI. The application helps users practice interviews with AI-powered voice interactions and structured interview flows.",
      features: [
        "Firebase authentication",
        "Voice-based interview simulation with Vapi AI",
        "AI question and feedback flows with Gemini AI",
        "User-specific interview data stored in Firestore",
        "Responsive interface built with Tailwind CSS",
      ],
      lessons:
        "Strengthened experience integrating AI services into frontend products, handling voice-based async states, and building protected user flows.",
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
    title: "AI YouTube Automation",
    description: "AI workflow for content generation",
    bgImage: "/work-3.png",
    id: "ai-youtube-automation",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Make", "Replicate"],
    content: {
      intro:
        "AI-powered workflow for generating scripts, scenes, and thumbnails for YouTube content. The project combines frontend product thinking with external automation and AI generation services.",
      features: [
        "Script generation workflow",
        "Scene planning and content structure",
        "Thumbnail generation using AI services",
        "Automation flow integration with Make",
        "Frontend interface built with Next.js and TypeScript",
      ],
      lessons:
        "Expanded practical experience with AI APIs, automation tools, and multi-step content generation workflows.",
      images: [
        "/swimming-pool/work-1.png",
        "/swimming-pool/work-2.png",
        "/swimming-pool/work-3.png",
      ],
      github: "",
      demo: "",
    },
  },
  {
    title: "Project Management App",
    description: "Task management platform with realtime data",
    id: "project-management",
    bgImage: "/work-2.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    content: {
      intro:
        "Task management platform featuring authentication, realtime database integration, and dashboard architecture. It was designed to support structured project workflows with a modern frontend stack.",
      features: [
        "Authentication with Supabase",
        "Realtime database integration",
        "Dashboard-based task management",
        "PostgreSQL-backed application data",
        "Responsive interface with reusable components",
      ],
      lessons:
        "Built deeper experience with Supabase-backed frontend applications, realtime data flows, and dashboard UI architecture.",
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
];

export const serviceData: Service[] = [
  {
    icon: assets.web_icon,
    title: "Frontend Development",
    description:
      "Modern web applications built with React, Next.js, TypeScript, Tailwind CSS, and component-based frontend architecture.",
  },
  {
    icon: assets.ai_icon,
    title: "AI Product Interfaces",
    description:
      "AI-powered workflows and interfaces using services such as OpenAI, Gemini, Vapi, Make, and Replicate.",
  },
  {
    icon: assets.layout_icon,
    title: "WordPress & CMS",
    description:
      "Custom business websites, corporate WordPress builds, Elementor layouts, Sanity CMS content structures, and UI maintenance.",
  },
  {
    icon: assets.multi_icon,
    title: "Deployment & Integrations",
    description:
      "REST API integrations, hosting, domains, SSL, DNS, Vercel, Cloudflare, and production environment management.",
  },
];

export const infoList: InfoItem[] = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Frontend",
    description: "React, Next.js, TypeScript, JavaScript, Tailwind CSS",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Management Information Systems, Anadolu University",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Experience",
    description: "Freelance, PAK Medya, Gradatim Soft",
  },
];

export const toolsData: StaticImageData[] = [
  assets.vscode,
  assets.firebase,
  assets.supabase,
  assets.tailwind,
  assets.git,
];
