type Project = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ title, description, tags }: Project) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition">

      <h3 className="text-xl font-bold text-white">
        {title}
      </h3>

      <p className="text-slate-300 mt-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}