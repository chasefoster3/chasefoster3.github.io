export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 bg-white">

      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Chase Foster. All rights reserved.
        </p>

        <p className="text-gray-500 text-sm mt-4 md:mt-0">
          Built with Next.js, React, and Tailwind CSS.
        </p>

      </div>

    </footer>
  );
}