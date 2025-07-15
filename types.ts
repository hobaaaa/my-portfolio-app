import { StaticImageData } from "next/image";

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
  | "layout_icon"
  | "ai_icon"
  | "multi_icon"
  | "right_arrow"
  | "send_icon"
  | "right_arrow_bold"
  | "right_arrow_bold_dark";

export type Assets = Record<AssetKey, StaticImageData>;

export interface ProjectContent {
  intro: string;
  features: string[];
  lessons: string;
  images: string[];
  github: string;
  demo: string;
}

export interface Project {
  title: string;
  description: string;
  id: string;
  bgImage: string;
  techStack: string[];
  content: ProjectContent;
}

export interface Service {
  icon: StaticImageData;
  title: string;
  description: string;
}

export interface InfoItem {
  icon: StaticImageData;
  iconDark: StaticImageData;
  title: string;
  description: string;
}

export interface PageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export type GenerateMetadataProps = {
  params: { id: string };
};

export type StaticParams = {
  id: string;
}[];
