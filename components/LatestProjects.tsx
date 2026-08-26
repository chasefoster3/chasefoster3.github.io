import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "AI Consistency Experiment",
    description:
      "An experimental study investigating whether consistency-focused prompting affects the consistency of repeated large language model responses.",
    image: "/project-images/ChatGPT_Image.png",
    link: "/projects/ai-consistency",
    technologies: "Python • Statistics • LLMs",
  },
  {
    title: "World Cup Predictor",
    description:
      "A machine learning project focused on predicting FIFA World Cup outcomes using historical international soccer data.",
    image: "/project-images/worldcupball.jpg",
    link: "/projects/world-cup",
    technologies: "Python • Machine Learning • EDA",
  },
  {
    title: "Ecommerce Graph Analysis",
    description:
      "A graph analytics project examining relationships within ecommerce data to uncover patterns and structural characteristics.",
    image: "/project-images/ecommerce_graph_analytics.png",
    link: "/projects/ecommerce-graph",
    technologies: "Python • NetworkX • Docker",
  },
];

export default function LatestProjects() {
  return (
    <section
      id="projects"
      className="py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-8">

        <div className="mb-14">
          <div className="w-16 h-1 bg-blue-600 rounded-full mb-4" />

          <h2 className="text-4xl font-bold text-gray-900">
            Latest Projects
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Here are three of my most recent projects spanning statistics, machine
            learning, data analysis, and experimentation.
          </p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.link}
            className="group"
          >
            <article className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">

              <div className="relative w-full h-64 bg-gray-100 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

              </div>

              <div className="p-7">

                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {project.description}
                </p>

                <p className="mt-5 text-sm font-medium text-gray-500">
                  {project.technologies}
                </p>

                <p className="mt-6 text-blue-600 font-medium">
                  View Project →
                </p>

              </div>

            </article>
          </Link>
        ))}

      </div>

      </div>
    </section>
  );
}