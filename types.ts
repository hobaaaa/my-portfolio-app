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
  slug: string;
  bgImage: string;
  techStack: string[];
  content: ProjectContent;
}

export interface ProjectPageProps {
  params: {
    slug: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface InfoItem {
  icon: string;
  iconDark: string;
  title: string;
  description: string;
}
