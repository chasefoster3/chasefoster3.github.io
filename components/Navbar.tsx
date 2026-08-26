export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">

      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="text-gray-900 font-bold text-2xl">
          C. Foster
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-base font-medium text-gray-600">

          <a
            href="#home"
            className="hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#interests"
            className="hover:text-blue-600 transition"
          >
            Interests
          </a>

          <a
            href="#projects"
            className="hover:text-blue-600 transition"
          >
            Latest Projects
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Contact Me
          </a>

        </div>

      </div>

    </nav>
  );
}