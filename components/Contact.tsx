import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto px-8 text-left">

        <h2 className="text-4xl font-bold text-gray-900">
          Contact Me!
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          I'm currently pursuing my Master of Information and Data Science
          at UC Berkeley and am seeking data science internship and
          entry-level opportunities. If you'd like to discuss my work,
          collaborate on a project, or simply connect, I'd love to hear
          from you.
        </p>

        <div className="mt-12 flex flex-col gap-5">

          <a
            href="mailto:chasefoster319@gmail.com"
            className="flex items-center justify-left gap-3 text-lg text-blue-600 hover:text-blue-700 transition"
          >
            <MdEmail size={24} className="text-red-400" />chasefoster319@gmail.com
          </a>

          <a
            href="https://github.com/chasefoster3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-left gap-3 text-lg text-blue-600 hover:text-blue-700 transition"
          >
            <FaGithub size={24} className="text-black" />chasefoster3
          </a>

          <a
            href="https://linkedin.com/in/chasestephenfoster/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-left gap-3 text-lg text-blue-600 hover:text-blue-700 transition"
          >
            <FaLinkedin size={24} className="text-[#0A66C2]" />chasestephenfoster
          </a>

        </div>

      </div>
    </section>
  );
}