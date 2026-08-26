import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto w-full px-8">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

          {/* Left Side */}

          <div className="md:w-1/2 text-center md:text-left">

            <p className="text-gray-600 font-semibold uppercase tracking-widest">
              Greetings, I am
            </p>

            <h1 className="mt-3 text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Chase Foster
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-700">
              Master's of Information and Data Science Student
            </h2>

            <p className="mt-2 text-lg text-gray-600">
              University of California, Berkeley
            </p>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              I am a data scientist passionate about applying machine learning 
              and statistical modeling to solve complex, real-world problems. 
              I am also a huge baseball fan and have an unreasonable amount of 
              optimism invested in the Arizona Diamondbacks.
            </p>


            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">

              <Link
                href="/projects"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700 transition"
              >
                View All Projects
              </Link>

              <a
                href="/resume"
                className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
              >
                Resume
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="md:w-1/2 flex justify-center">

            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-gray-200">

              <Image
                src="/images/ChaseF.png"
                alt="Portrait of Chase Foster"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />

            </div>

          </div>

        </div>

      </div>

      
    </section>
  );
}