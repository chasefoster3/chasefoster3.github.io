import Image from "next/image";
import Link from "next/link";

export default function MLBThesisPage() {
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


        {/* Header */}
        <div className="mt-12">

          <div className="w-16 h-1 bg-blue-600 rounded-full mb-5" />

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Undergraduate Honors Thesis
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900">
            MLB Postseason Prediction
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-8 max-w-4xl">
            A machine learning analysis of the factors that contribute to
            Major League Baseball teams reaching the postseason, culminating
            in a Random Forest model used to predict the 2025 playoff field.
          </p>


        </div>


        {/* Project Image */}
        <div className="mt-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/project-images/mlb-postseason-prediction.jpg"
            alt="MLB Postseason Prediction Thesis"
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
            This honors thesis investigates which team performance metrics
            most strongly influence whether a Major League Baseball team
            qualifies for the postseason. The project combines statistical
            analysis, unsupervised learning, and supervised machine learning
            to identify important patterns in team performance and build
            predictive models.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            The ultimate goal was twofold: first, to identify the factors most
            strongly associated with postseason qualification, and second, to
            use those factors to predict which teams would reach the
            postseason in a future MLB season.
          </p>

        </section>


        {/* Research Question */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Research Question
          </h2>

          <div className="mt-6 border-l-4 border-blue-600 bg-gray-50 p-8">

            <p className="text-2xl font-semibold text-gray-900 leading-9">
              Which team performance factors most strongly influence whether
              an MLB team qualifies for the postseason, and can machine
              learning accurately predict postseason qualification?
            </p>

          </div>

          <p className="mt-6 text-gray-600 leading-8">
            The study was motivated by the increasing role of statistical
            analysis and machine learning in professional baseball, where
            data-driven approaches are used for performance evaluation,
            scouting, recruitment, team strategy, and forecasting.
          </p>

        </section>


        {/* Data */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Data
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The study used team-level MLB data covering the 1998 through 2024
            seasons. The starting dataset contained 810 team-season
            observations and 60 variables consisting of team identifiers,
            hitting statistics, and pitching statistics.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                1998–2024
              </p>

              <p className="mt-2 text-gray-600">
                Seasons included in the study
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                810
              </p>

              <p className="mt-2 text-gray-600">
                Original team-season observations
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                60
              </p>

              <p className="mt-2 text-gray-600">
                Variables considered
              </p>

            </div>

          </div>

          <p className="mt-8 text-gray-600 leading-8">
            The hitting and pitching data were exported separately from
            Stathead Baseball and merged using team and season identifiers.
            The analysis was conducted in RStudio.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            The 2020 season was removed because the COVID-19 pandemic reduced
            the regular season from 162 games to only 60 games and produced a
            fundamentally different postseason structure. This left 780
            observations for analysis.
          </p>

        </section>


        {/* Exploratory Analysis */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Exploratory & Unsupervised Analysis
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Before building predictive models, the project used unsupervised
            learning to investigate the underlying structure of MLB team
            performance. Principal Component Analysis and clustering were
            used to identify patterns among teams and determine which
            performance variables appeared most important.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="border border-gray-200 rounded-xl p-7">

              <h3 className="text-2xl font-semibold text-gray-900">
                Principal Component Analysis
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                PCA was used to reduce the dimensionality of the dataset and
                examine how the many correlated performance metrics combined
                to explain variation among MLB teams.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-7">

              <h3 className="text-2xl font-semibold text-gray-900">
                Clustering
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Hierarchical and K-Means clustering were used to group teams
                with similar performance profiles and investigate whether
                postseason teams formed distinguishable groups.
              </p>

            </div>

          </div>

        </section>


        {/* Supervised Learning */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Supervised Machine Learning
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Multiple supervised learning approaches were developed and
            evaluated to determine how accurately team performance statistics
            could classify postseason qualification.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-5">

            {[
              {
                title: "Logistic Regression",
                description:
                  "An interpretable classification model used to evaluate the relationship between individual predictors and postseason qualification.",
              },
              {
                title: "KNN Classification",
                description:
                  "A neighborhood-based classifier used to determine whether similar team performance profiles produced similar postseason outcomes.",
              },
              {
                title: "Linear Discriminant Analysis",
                description:
                  "A classification approach used to identify separation between postseason and non-postseason teams.",
              },
              {
                title: "Nonlinear Functions",
                description:
                  "Nonlinear modeling approaches were explored to capture relationships that could not be adequately represented by simple linear effects.",
              },
              {
                title: "Decision Trees",
                description:
                  "Tree-based models were used to identify nonlinear relationships and important decision boundaries among team statistics.",
              },
              {
                title: "Bagging",
                description:
                  "Bootstrap aggregation was evaluated as an ensemble approach for improving classification performance.",
              },
              {
                title: "Random Forest",
                description:
                  "An ensemble of decision trees was ultimately selected for prediction because of its performance, robustness, and ability to evaluate variable importance.",
              },
            ].map((model) => (
              <div
                key={model.title}
                className="border border-gray-200 rounded-xl p-6"
              >

                <h3 className="text-xl font-semibold text-gray-900">
                  {model.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {model.description}
                </p>

              </div>
            ))}

          </div>

        </section>


        {/* Important Variables */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            What Drives Postseason Success?
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Across the different analytical approaches, several variables
            consistently emerged as important predictors of postseason
            qualification.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="border border-gray-200 rounded-xl p-7">

              <p className="text-4xl font-bold text-gray-900">
                ERA+
              </p>

              <p className="mt-3 text-gray-600">
                The most consistently important predictor identified by the
                analysis, highlighting the importance of pitching and defensive
                performance.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-7">

              <p className="text-4xl font-bold text-gray-900">
                Runs Allowed
              </p>

              <p className="mt-3 text-gray-600">
                Teams that limit opposing scoring have a substantially stronger
                postseason profile.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-7">

              <p className="text-4xl font-bold text-gray-900">
                OPS+
              </p>

              <p className="mt-3 text-gray-600">
                Offensive quality also played an important role in determining
                postseason qualification.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-7">

              <p className="text-4xl font-bold text-gray-900">
                Runs Scored
              </p>

              <p className="mt-3 text-gray-600">
                Offensive production was consistently identified as an
                important contributor to team success.
              </p>

            </div>

          </div>

          <div className="mt-8 border-l-4 border-blue-600 bg-gray-50 p-7">

            <p className="text-xl font-semibold text-gray-900">
              The central finding:
            </p>

            <p className="mt-3 text-gray-600 leading-7">
              Postseason teams need to balance offensive and defensive
              strength. However, ERA+ repeatedly emerged as the most important
              variable, suggesting that strong pitching and defense may have
              an especially large influence on postseason qualification.
            </p>

          </div>

          <p className="mt-6 text-gray-600 leading-8">
            These four variables were consistently emphasized through PCA,
            logistic regression significance, and Random Forest variable
            importance analysis.
          </p>

        </section>


        {/* Model Selection */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Model Selection
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Random Forest was ultimately selected as the final model for
            postseason prediction. Although Logistic Regression and LDA were
            more interpretable and performed well, the large number of
            correlated predictors created concerns about multicollinearity.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            Random Forest was considered better suited to the structure of the
            dataset because it is robust to multicollinearity and outliers,
            captures complex interactions, handles high-dimensional data, and
            provides variable importance measures.
          </p>

          <div className="mt-8 border border-blue-200 bg-blue-50 rounded-xl p-8">

            <p className="text-4xl font-bold text-gray-900">
              Random Forest
            </p>

            <p className="mt-3 text-gray-600 leading-7">
              Selected as the final model for predicting 2025 MLB postseason
              qualification.
            </p>

          </div>

        </section>


        {/* 2025 Prediction */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            2025 Postseason Prediction
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The final Random Forest model was applied to MLB data collected on
            April 12, 2025. At that point, most teams had played only around
            15 games, approximately one tenth of a typical 162-game season.
            Therefore, the predictions were explicitly treated as early-season
            forecasts rather than definitive postseason projections.
          </p>

          <div className="mt-8">

            <h3 className="text-2xl font-semibold text-gray-900">
              Predicted Postseason Teams
            </h3>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">

              {[
                "Oakland Athletics",
                "Houston Astros",
                "Detroit Tigers",
                "Boston Red Sox",
                "New York Yankees",
                "Los Angeles Dodgers",
                "San Diego Padres",
                "Chicago Cubs",
                "Atlanta Braves",
                "New York Mets",
              ].map((team) => (
                <div
                  key={team}
                  className="border border-gray-200 rounded-xl p-5 text-center"
                >
                  <p className="font-semibold text-gray-900">
                    {team}
                  </p>
                </div>
              ))}

            </div>

          </div>

          <p className="mt-8 text-gray-600 leading-8">
            The predictions were adjusted to match the MLB postseason
            structure, requiring five teams from each league and representation
            from each division. Many of the predicted teams were already
            division leaders or near the top of their divisions at the time
            the prediction was generated.
          </p>

        </section>


        {/* Limitations */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Limitations
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The study also identified several important limitations. The large
            number of predictor variables creates potential multicollinearity
            and high dimensionality, while the complex underlying structure of
            team performance makes it difficult to isolate completely
            independent effects.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Multicollinearity
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Many baseball statistics measure related aspects of team
                performance and are therefore highly correlated.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                High Dimensionality
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                The large number of predictors makes interpretation and model
                assumptions more difficult.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                External Factors
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                The analysis did not incorporate external factors such as
                injuries, player-level information, trades, or roster changes.
              </p>

            </div>

          </div>

        </section>


        {/* Future Work */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Future Work
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Several extensions could make the analysis more robust and useful
            for future baseball forecasting.
          </p>

          <ul className="mt-6 space-y-4 text-gray-600 leading-7">

            <li>
              • Reduce multicollinearity and dimensionality among the predictor
              variables.
            </li>

            <li>
              • Examine predictor distributions and more thoroughly test model
              assumptions.
            </li>

            <li>
              • Investigate whether a particular ratio of runs scored to runs
              allowed is strongly associated with postseason qualification.
            </li>

            <li>
              • Incorporate individual player-level performance metrics.
            </li>

            <li>
              • Incorporate external variables such as injuries, trades, and
              roster composition.
            </li>

            <li>
              • Evaluate the model's predictions at multiple points throughout
              a season rather than relying only on very early-season data.
            </li>

          </ul>

        </section>


        {/* Conclusion */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Conclusion
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            This study demonstrated how machine learning can be used to
            investigate the factors associated with MLB postseason
            qualification and develop predictive models for team success.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            Across multiple analytical approaches, ERA+, Runs Allowed, OPS+,
            and Runs Scored consistently emerged as important contributors to
            postseason qualification. The results emphasize that successful
            teams need to maintain a balance between offensive production and
            run prevention, with pitching and defensive performance appearing
            particularly important.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            The Random Forest model provided a practical way to handle the
            dataset's high dimensionality and multicollinearity while also
            providing useful insight into variable importance. It was
            ultimately used to generate an early prediction of the 2025
            postseason field.
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
                Statistical Analysis
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Applied statistical modeling and exploratory analysis to
                identify relationships between team performance and postseason
                qualification.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Machine Learning
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Developed and compared multiple supervised and unsupervised
                machine learning approaches.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Feature Analysis
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Used PCA, model coefficients, and Random Forest variable
                importance to identify influential baseball metrics.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Sports Analytics
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Applied data science and machine learning techniques to a
                real-world professional sports forecasting problem.
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
              "R",
              "RStudio",
              "Machine Learning",
              "Random Forest",
              "Logistic Regression",
              "KNN",
              "LDA",
              "Decision Trees",
              "Bagging",
              "K-Means",
              "Hierarchical Clustering",
              "PCA",
              "Statistical Analysis",
              "Sports Analytics",
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
              href="https://github.com/chasefoster3/mlb-postseason-prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-white font-medium hover:bg-gray-700 transition"
            >
              View on GitHub →
            </a>

          </div>

        </section>


        {/* Back */}
        <div className="mt-16 pb-10">

          <Link
            href="/projects"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to All Projects
          </Link>

        </div>

      </div>

    </main>
  );
}