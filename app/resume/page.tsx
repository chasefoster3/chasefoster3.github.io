import Image from "next/image";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white py-24">

      <div className="max-w-4xl mx-auto px-8">

        {/* Back to Home */}
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-700 transition"
        >
          ← Back to Home
        </Link>

        {/* Header */}
        <div className="mt-12">

          <div className="w-16 h-1 bg-blue-600 rounded-full mb-5" />

          <h1 className="text-5xl font-bold text-gray-900">
            Resume
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl leading-8">
            My current resume highlighting my education, technical
            skills, projects, and professional experience.
          </p>

        </div>

        {/* Resume Button */}
        <div className="mt-8">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
          >
            Open Resume PDF →
          </a>

        </div>

        {/* Resume Preview */}
        <div className="mt-12 space-y-8">

          {/* Page 1 */}
          <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <Image
              src="/resume-page-1.png"
              alt="Page 1 of Chase Foster's resume"
              width={1275}
              height={1650}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Page 2 */}
          <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <Image
              src="/resume-page-2.png"
              alt="Page 2 of Chase Foster's resume"
              width={1275}
              height={1650}
              className="w-full h-auto"
            />
          </div>

        </div>

      </div>

    </main>
  );
}