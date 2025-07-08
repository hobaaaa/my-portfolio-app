// types.ts
import { StaticImageData } from "next/image";

// Asset tipleri
export type AssetKey =
  | "user_image"
  | "code_icon"
  | "code_icon_dark"
  | "edu_icon"
  | "edu_icon_dark"
  | "project_icon"
  | "project_icon_dark"
  | "vscode"
  | "firebase"
  | "tailwind"
  | "git"
  | "supabase"
  | "right_arrow_white"
  | "logo"
  | "logo_dark"
  | "mail_icon"
  | "mail_icon_dark"
  | "profile_img"
  | "download_icon"
  | "hand_icon"
  | "moon_icon"
  | "sun_icon"
  | "arrow_icon"
  | "arrow_icon_dark"
  | "menu_black"
  | "menu_white"
  | "close_black"
  | "close_white"
  | "web_icon"
  | "mobile_icon"
  | "ui_icon"
  | "graphics_icon"
  | "right_arrow"
  | "send_icon"
  | "right_arrow_bold"
  | "right_arrow_bold_dark";

export type Assets = Record<AssetKey, StaticImageData>;

// Proje içeriği tipi
export interface ProjectContent {
  intro: string;
  features: string[];
  lessons: string;
  images: string[];
  github: string;
  demo: string;
}

// Proje tipi
export interface Project {
  title: string;
  description: string;
  slug: string;
  bgImage: string;
  techStack: string[];
  content: ProjectContent;
}

// Servis tipi
export interface Service {
  icon: StaticImageData;
  title: string;
  description: string;
}

// Bilgi listesi tipi
export interface InfoItem {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
}

// Route params tipi
export interface PageParams {
  slug: string;
  params: {
    slug: string;
  };
}
