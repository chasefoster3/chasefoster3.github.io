import Image from "next/image";
import Link from "next/link";

export default function WorldCupPredictorPage() {
  return (
    <main className="min-h-screen bg-white py-24">

      <div className="max-w-5xl mx-auto px-8">

        {/* Back to Home */}
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-700 transition"
        >
          ← Back to Home
        </Link>


        {/* Project Header */}
        <div className="mt-12">

          <div className="w-16 h-1 bg-blue-600 rounded-full mb-5" />

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            FIFA 2026 World Cup Predictor
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-8 max-w-4xl">
            A multiclass machine learning system designed to predict FIFA
            World Cup match outcomes and simulate the 2026 tournament using
            historical international match results, FIFA rankings, team form,
            ELO ratings, and match-level features.
          </p>

        </div>


        {/* Project Image */}
        <div className="mt-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/project-images/worldcupball.jpg"
            alt="FIFA 2026 World Cup Predictor"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>


        {/* Overview */}
        <section className="mt-16">

          <h2 className="text-3xl font-bold text-gray-900">
            Overview
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The FIFA World Cup is one of the largest sporting events in the
            world, making it an interesting environment for applying
            statistical modeling and machine learning. This project asks a
            simple but challenging question: can historical international
            soccer data be used to predict the outcomes of future World Cup
            matches?
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            Our team developed a multiclass classification system capable of
            predicting whether Team 1 would win, Team 2 would win, or the
            match would end in a draw. We then used the selected model to
            generate predictions for the 2026 FIFA World Cup group and
            knockout stages.
          </p>

        </section>


        {/* Motivation */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Why Predict the World Cup?
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Soccer prediction is particularly challenging because match
            outcomes depend on a large number of factors, many of which are
            difficult to quantify before kickoff. At the same time, the World
            Cup provides an ideal setting for sports analytics because of its
            global popularity, large historical dataset, and relatively
            structured tournament format.
          </p>


          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                5B
              </p>

              <p className="mt-2 text-gray-600">
                Estimated viewers of the 2022 World Cup
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                4Y
              </p>

              <p className="mt-2 text-gray-600">
                World Cup tournament cycle
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                3
              </p>

              <p className="mt-2 text-gray-600">
                Possible match outcomes
              </p>

            </div>

          </div>

        </section>


        {/* Related Work */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Research & Related Work
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Existing soccer prediction research suggests that the features
            available before a match begins are fundamentally different from
            the statistics available during or after a match.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            This project therefore focused specifically on reproducible
            pre-match features. We built on previous work using FIFA rankings,
            squad strength, and match context while introducing dynamic
            measures of recent team form.
          </p>


          <div className="mt-8 border-l-4 border-blue-600 bg-gray-50 p-6">

            <p className="text-lg text-gray-800 leading-7">
              A major modeling challenge identified in previous research was
              accurately predicting draws. Our results ultimately confirmed
              that this remained one of the central difficulties of the task.
            </p>

          </div>

        </section>


        {/* Dataset */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Data
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We combined two historical soccer datasets to create the modeling
            dataset. The primary dataset contained international match results,
            while a supplementary dataset provided FIFA rankings over time.
          </p>


          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                49,071
              </p>

              <p className="mt-2 text-gray-600">
                International match records
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                13,130
              </p>

              <p className="mt-2 text-gray-600">
                FIFA ranking records
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                25,691
              </p>

              <p className="mt-2 text-gray-600">
                Records in the final modeling dataset
              </p>

            </div>

          </div>


          <p className="mt-8 text-gray-600 leading-8">
            The two datasets were merged and processed to create a consistent
            set of pre-match observations. The resulting data was divided into
            training, validation, and test sets using a 60/20/20 split.
          </p>

        </section>


        {/* Feature Engineering */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Feature Engineering
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We engineered 15 features intended to capture both traditional
            measures of team strength and recent team performance, while also
            accounting for the context of each individual match.
          </p>


          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Traditional Strength
              </h3>

              <ul className="mt-4 space-y-3 text-gray-600">

                <li>• FIFA rank difference and sum</li>
                <li>• ELO rating difference and sum</li>

              </ul>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Recent Form
              </h3>

              <ul className="mt-4 space-y-3 text-gray-600">

                <li>• Goal difference over last 5 matches</li>
                <li>• Goal totals over last 5 matches</li>
                <li>• Points difference over last 5 matches</li>
                <li>• Points totals over last 5 matches</li>

              </ul>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Match Context
              </h3>

              <ul className="mt-4 space-y-3 text-gray-600">

                <li>• Head-to-head results</li>
                <li>• Neutral-ground indicator</li>
                <li>• Friendly vs. competitive match</li>
                <li>• Recent match count</li>

              </ul>

            </div>

          </div>

        </section>


        {/* Outcome */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Prediction Target
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The target variable was formulated as a three-class classification
            problem representing the result of the match.
          </p>


          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-8 text-center">

              <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700">
                0
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Draw
              </h3>

              <p className="mt-2 text-gray-600">
                Neither team wins.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-8 text-center">

              <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700">
                1
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Team 1 Wins
              </h3>

              <p className="mt-2 text-gray-600">
                The first listed team wins.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-8 text-center">

              <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-700">
                2
              </div>

              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Team 2 Wins
              </h3>

              <p className="mt-2 text-gray-600">
                The second listed team wins.
              </p>

            </div>

          </div>

        </section>


        {/* Models */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Models
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We compared several progressively more flexible modeling
            approaches to determine whether increased model complexity
            translated into better predictive performance.
          </p>


          <div className="mt-8 space-y-5">

            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Baseline
              </h3>

              <p className="mt-2 text-gray-600">
                A simple baseline model provided a reference point for
                evaluating whether machine learning models could improve
                predictive performance.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Logistic Regression
              </h3>

              <p className="mt-2 text-gray-600">
                A relatively interpretable multiclass model used as the first
                advanced machine learning approach.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Neural Network
              </h3>

              <p className="mt-2 text-gray-600">
                A nonlinear model designed to capture more complex
                relationships between the engineered features and match
                outcomes.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Gradient Boosting
              </h3>

              <p className="mt-2 text-gray-600">
                A tree-based ensemble model selected as the final model for
                generating the 2026 World Cup predictions.
              </p>

            </div>

          </div>

        </section>


        {/* Results */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Model Results
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The models achieved similar overall test accuracy, highlighting
            the difficulty of predicting international soccer outcomes and the
            particularly challenging nature of the draw class.
          </p>


          <div className="mt-8 overflow-x-auto">

            <table className="w-full border-collapse border border-gray-200">

              <thead>

                <tr className="bg-gray-50">

                  <th className="border border-gray-200 px-5 py-4 text-left font-semibold text-gray-900">
                    Model
                  </th>

                  <th className="border border-gray-200 px-5 py-4 text-center font-semibold text-gray-900">
                    Training
                  </th>

                  <th className="border border-gray-200 px-5 py-4 text-center font-semibold text-gray-900">
                    Validation
                  </th>

                  <th className="border border-gray-200 px-5 py-4 text-center font-semibold text-gray-900">
                    Test
                  </th>

                  <th className="border border-gray-200 px-5 py-4 text-center font-semibold text-gray-900">
                    Draw Recall
                  </th>

                </tr>

              </thead>


              <tbody>

                <tr>

                  <td className="border border-gray-200 px-5 py-4 font-medium text-gray-900">
                    Baseline
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    55.15%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    55.76%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    59.44%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    0.000
                  </td>

                </tr>


                <tr>

                  <td className="border border-gray-200 px-5 py-4 font-medium text-gray-900">
                    Logistic Regression
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    60.25%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    60.79%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    60.89%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    0.006
                  </td>

                </tr>


                <tr>

                  <td className="border border-gray-200 px-5 py-4 font-medium text-gray-900">
                    Neural Network
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    60.26%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    60.62%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    60.82%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center text-gray-600">
                    0.025
                  </td>

                </tr>


                <tr className="bg-blue-50">

                  <td className="border border-gray-200 px-5 py-4 font-semibold text-gray-900">
                    Gradient Boosting
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center font-semibold text-gray-900">
                    62.95%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center font-semibold text-gray-900">
                    60.83%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center font-semibold text-gray-900">
                    60.58%
                  </td>

                  <td className="border border-gray-200 px-5 py-4 text-center font-semibold text-gray-900">
                    0.077
                  </td>

                </tr>

              </tbody>

            </table>

          </div>


          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-4xl font-bold text-gray-900">
                60.89%
              </p>

              <p className="mt-2 text-gray-600">
                Best test accuracy — Logistic Regression
              </p>

            </div>


            <div className="border border-blue-200 bg-blue-50 rounded-xl p-6">

              <p className="text-4xl font-bold text-gray-900">
                0.077
              </p>

              <p className="mt-2 text-gray-600">
                Best draw recall — Gradient Boosting
              </p>

            </div>

          </div>

        </section>


        {/* Important Finding */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            The Draw Problem
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            One of the most important findings was how difficult it was for
            every model to correctly identify draws. Although the models
            achieved approximately 60% overall accuracy, draw recall remained
            extremely low.
          </p>

          <div className="mt-8 border-l-4 border-blue-600 bg-gray-50 p-8">

            <p className="text-2xl font-bold text-gray-900">
              Overall accuracy does not tell the whole story.
            </p>

            <p className="mt-4 text-gray-600 leading-7">
              The models were substantially better at distinguishing wins from
              losses than they were at identifying matches that ended in a
              draw.
            </p>

          </div>

          <p className="mt-6 text-gray-600 leading-8">
            This result suggests that there may be a practical ceiling on
            prediction accuracy using the available pre-match features.
            Soccer outcomes are influenced by many factors that are difficult
            to capture in historical data, and the draw class is particularly
            difficult to separate from wins and losses.
          </p>

        </section>


        {/* 2026 Predictions */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            2026 World Cup Predictions
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            After evaluating the candidate models, the Gradient Boosting model
            was selected to generate predictions for the 2026 FIFA World Cup.
            The model was used to predict both the group stage and subsequent
            knockout-stage outcomes.
          </p>


          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="border border-gray-200 rounded-xl p-8">

              <h3 className="text-2xl font-semibold text-gray-900">
                Group Stage
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Match-level predictions were generated for the 2026 World Cup
                group stage and used to determine projected group standings.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-8">

              <h3 className="text-2xl font-semibold text-gray-900">
                Knockout Stage
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                The projected group-stage results were carried forward into
                the knockout rounds to simulate a complete tournament
                prediction.
              </p>

            </div>

          </div>

        </section>


        {/* Conclusion */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Conclusion
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The project produced a modest improvement over the baseline but
            demonstrated that predicting international soccer outcomes remains
            a difficult machine learning problem.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            All three advanced approaches produced similar overall accuracy,
            suggesting that simply increasing model complexity does not
            necessarily solve the underlying prediction challenge. The
            difficulty of predicting draws and the many factors influencing
            individual matches likely impose a ceiling on achievable
            performance.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            Despite these limitations, the project successfully transformed
            historical soccer data into a reproducible pre-match prediction
            system and demonstrated how machine learning can be applied to a
            real-world sports forecasting problem.
          </p>

        </section>


        {/* Skills */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Skills Demonstrated
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Machine Learning
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Compared baseline, logistic regression, neural network, and
                gradient boosting approaches for multiclass classification.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Feature Engineering
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Created 15 pre-match features representing team strength,
                recent form, head-to-head history, and match context.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Data Integration
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Combined historical match results with FIFA ranking data to
                construct a unified modeling dataset.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Sports Analytics
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Applied statistical and machine learning techniques to a
                real-world sports forecasting problem and simulated an entire
                international tournament.
              </p>

            </div>

          </div>

        </section>


        {/* Tools */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Tools & Technologies
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">

            {[
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "Logistic Regression",
              "Neural Networks",
              "Gradient Boosting",
              "Feature Engineering",
              "FIFA Rankings",
              "ELO Ratings",
              "Sports Analytics",
              "Multiclass Classification",
            ].map((technology) => (
              <span
                key={technology}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
              >
                {technology}
              </span>
            ))}

          </div>

        </section>


        {/* Links */}
        <section className="mt-16 border-t border-gray-200 pt-10">

          <h2 className="text-2xl font-bold text-gray-900">
            Project Resources
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">

            <a
              href="https://github.com/chasefoster3/world-cup-predictor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-700 transition"
            >
              View on GitHub →
            </a>

          </div>

        </section>

        {/* Back to Portfolio */}
        <div className="mt-16 pb-10">

          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Portfolio
          </Link>

        </div>

      </div>

    </main>
  );
}