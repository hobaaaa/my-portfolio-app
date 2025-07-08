import Navbar from "@/app/components/Navbar";
import { workData } from "@/assets/assets";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = workData.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-30">
        <h1 className="text-4xl md:text-5xl font-bold font-ovo text-center mb-4">
          {project.title}
        </h1>
        <p className="text-center text-lg dark:text-gray-200 mb-12">
          {project.description}
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Overview</h2>
          <p className="dark:text-gray-400 leading-relaxed">
            {project.content.intro}
          </p>
        </section>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.content.images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Screenshot ${i + 1}`}
              width={800}
              height={600}
              className="rounded-lg shadow-md"
            />
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-lime-100 text-lime-800 font-medium px-3 py-1 rounded-full text-sm shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
          <ul className="list-disc ml-6 space-y-2 dark:text-gray-400">
            {project.content.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Lessons Learned</h2>
          <p className="dark:text-gray-400 leading-relaxed">
            {project.content.lessons}
          </p>
        </section>

        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={project.content.github}
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition duration-300"
          >
            View GitHub
          </a>
          <a
            href={project.content.demo}
            target="_blank"
            className="bg-background border border-foreground px-6 py-3 rounded-md font-medium hover:bg-hover transition duration-300"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
