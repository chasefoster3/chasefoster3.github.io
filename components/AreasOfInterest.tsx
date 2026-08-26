import {
  FaChartLine,
  FaBrain,
  FaBaseballBall,
  FaDatabase,
  FaLanguage,
} from "react-icons/fa";

const interests = [
  {
    title: "Machine Learning",
    description:
      "I enjoy building predictive models and applying both supervised and unsupervised machine learning techniques to uncover patterns and solve real-world problems.",
    icon: FaDatabase,
  },

  {
    title: "Statistics",
    description:
      "My background in mathematics and statistics sparked my interest in using statistical modeling, inference, and experimental design to understand data and answer meaningful questions.",
    icon: FaChartLine,
  },

  {
    title: "Natural Language Processing",
    description:
      "I enjoy using NLP techniques to analyze and understand human language. My recent work with text embeddings and language models has allowed me to explore how machines can represent and evaluate language.",
    icon: FaLanguage,
  },

  {
    title: "Artificial Intelligence",
    description:
      "I am fascinated by how AI systems learn, reason, and respond to complex inputs. My research with large language models has given me experience designing experiments to evaluate their behavior and consistency.",
    icon: FaBrain,
  },

  {
    title: "Sports Analytics",
    description:
      "My interest in sports and statistics naturally led me to sports analytics. I have worked with MLB, NFL, and FIFA data to investigate statistical questions and uncover patterns in sports.",
    icon: FaBaseballBall,
  },
];

export default function AreasOfInterest() {
  return (
    <section
      id="interests"
      className="py-24 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* Section Heading */}
        <div className="mb-14">
          <div className="w-16 h-1 bg-blue-600 rounded-full mb-4" />

          <h2 className="text-4xl font-bold text-gray-900">
            Areas of Interest
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Here are some areas of data science and research that I love
            working on.
          </p>
        </div>

        {/* Interest Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">

          {interests.map((interest, index) => {
            const Icon = interest.icon;

            return (
              <div
                key={interest.title}
                className={`bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  index === 0
                    ? "lg:col-span-2"
                    : index === 1
                    ? "lg:col-span-2"
                    : index === 2
                    ? "lg:col-span-2"
                    : index === 3
                    ? "lg:col-start-2 lg:col-span-2"
                    : "lg:col-start-4 lg:col-span-2"
                }`}
              >

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
                    <Icon
                      size={30}
                      className="text-blue-600"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {interest.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7">
                  {interest.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}