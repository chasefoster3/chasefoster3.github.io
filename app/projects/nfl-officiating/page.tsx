import Image from "next/image";
import Link from "next/link";

export default function NFLOfficiatingPage() {
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
            Exploratory Data Analysis
          </p>

          <h1 className="mt-3 text-5xl md:text-6xl font-bold text-gray-900">
            NFL Officiating Patterns
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-8 max-w-4xl">
            An exploratory analysis investigating how NFL officiating patterns
            changed between the pre-betting and post-betting eras, with a
            focus on penalties, officiating crews, and replay decisions.
          </p>


        </div>


        {/* Project Image */}
        <div className="mt-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/project-images/nfl-officiating.jpg"
            alt="NFL Officiating Patterns"
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
            Sports betting has become increasingly integrated into professional
            sports since the 2018 Supreme Court decision that removed the
            federal prohibition on sports betting. With billions of dollars
            now wagered on NFL games, questions about officiating consistency
            and potential bias have become increasingly prominent.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            Our team used NFL play-by-play and game-level data to explore
            whether officiating patterns changed following the emergence of
            widespread legalized sports betting. Rather than attempting to
            establish causality, the project focuses on describing changes in
            penalty rates, penalty types, officiating crews, and replay review
            outcomes over time.
          </p>

        </section>


        {/* Research Questions */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Research Questions
          </h2>

          <div className="mt-8 space-y-5">

            <div className="border-l-4 border-blue-600 bg-gray-50 p-6">

              <p className="font-semibold text-gray-900">
                01 — Penalty Trends
              </p>

              <p className="mt-2 text-gray-600 leading-7">
                How have overall NFL penalty rates, penalty types, and penalty
                yardage changed between the pre-betting and post-betting eras?
              </p>

            </div>


            <div className="border-l-4 border-blue-600 bg-gray-50 p-6">

              <p className="font-semibold text-gray-900">
                02 — Officiating Crews
              </p>

              <p className="mt-2 text-gray-600 leading-7">
                Do certain officiating crews differ in their frequency of
                calling penalties, and have those tendencies changed over time?
              </p>

            </div>


            <div className="border-l-4 border-blue-600 bg-gray-50 p-6">

              <p className="font-semibold text-gray-900">
                03 — Replay Reviews
              </p>

              <p className="mt-2 text-gray-600 leading-7">
                How have replay review outcomes, particularly reversals versus
                upheld calls, shifted between the two eras?
              </p>

            </div>

          </div>

        </section>


        {/* Data */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Data
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The analysis used NFL data covering the 2015 through 2024 seasons.
            The primary datasets were play-by-play data and game-level data
            accessed through the open-source nflreadpy package and the NFLverse
            data repository.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                2015–2024
              </p>

              <p className="mt-2 text-gray-600">
                NFL seasons analyzed
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                483,605
              </p>

              <p className="mt-2 text-gray-600">
                Play-by-play observations
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <p className="text-3xl font-bold text-gray-900">
                372
              </p>

              <p className="mt-2 text-gray-600">
                Original play-level variables
              </p>

            </div>

          </div>

          <p className="mt-8 text-gray-600 leading-8">
            The play-by-play dataset contains detailed information including
            penalty flags, EPA, WPA, play type, and replay/challenge markers.
            The games dataset provides game-level information such as
            pre-game betting lines, kickoff information, location, and final
            scores.
          </p>

        </section>


        {/* Era Definition */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Defining the Betting Era
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            To investigate potential changes associated with legalized sports
            betting, we divided the ten seasons into two periods.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="border border-gray-200 rounded-xl p-8">

              <p className="text-sm uppercase tracking-widest text-gray-500">
                Pre-Betting Era
              </p>

              <p className="mt-3 text-4xl font-bold text-gray-900">
                2015–2019
              </p>

              <p className="mt-3 text-gray-600 leading-7">
                Seasons preceding the widespread legalization of sports
                betting in the United States.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-8">

              <p className="text-sm uppercase tracking-widest text-gray-500">
                Post-Betting Era
              </p>

              <p className="mt-3 text-4xl font-bold text-gray-900">
                2020–2024
              </p>

              <p className="mt-3 text-gray-600 leading-7">
                Seasons following the expansion of legalized sports betting.
              </p>

            </div>

          </div>

          <p className="mt-6 text-gray-600 leading-8">
            This division was chosen because the federal prohibition on sports
            betting was struck down in May 2018, while most states did not begin
            legalizing sports betting until after the 2018–2019 NFL season.
          </p>

        </section>


        {/* Data Preparation */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Data Preparation
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Because the play-by-play and game-level datasets use different
            structures, they were merged using shared game and team
            identifiers. The analysis also required correcting historical team
            abbreviations because several NFL franchises relocated during the
            study period.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            After merging and cleaning the data, penalty types were grouped
            into broader categories to make trends easier to interpret.
            Categories included offensive holding, defensive pass interference,
            personal fouls and roughness, kicking and special teams,
            procedural penalties, illegal blocks, and other penalties.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            Penalty rates were generally expressed as penalties per 100 plays,
            allowing comparisons across seasons and officiating crews despite
            differences in the number of plays or games observed.
          </p>

        </section>


        {/* Finding 1 */}
        <section className="mt-14">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Finding 01
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Penalty Trends Changed Over Time
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            League-wide penalty rates varied considerably across the decade.
            Penalties occurred at a rate of 8.26 per 100 plays in 2015 and
            8.20 in 2019 before falling to 6.80 in 2020. Rates remained below
            the pre-betting levels through 2023 before increasing to 8.02 in
            2024.
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">

            {[
              ["2015", "8.26"],
              ["2019", "8.20"],
              ["2020", "6.80"],
              ["2024", "8.02"],
            ].map(([year, rate]) => (
              <div
                key={year}
                className="border border-gray-200 rounded-xl p-5 text-center"
              >

                <p className="text-sm text-gray-500">
                  {year}
                </p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {rate}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  penalties / 100 plays
                </p>

              </div>
            ))}

          </div>

          <p className="mt-8 text-gray-600 leading-8">
            Overall, penalty frequency and penalty yardage declined in the
            seasons immediately following the beginning of the betting era,
            while the distribution of commonly called penalty types remained
            relatively stable.
          </p>

        </section>


        {/* Finding 2 */}
        <section className="mt-14">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Finding 02
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Officiating Crews Differed Meaningfully
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The analysis found substantial variation in penalty-calling rates
            across officiating crews. Across the full 2015–2024 period, some
            referees averaged fewer than seven penalties per 100 plays while
            others approached nine.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-7">

              <p className="text-sm text-gray-500">
                League-wide referee average
              </p>

              <p className="mt-2 text-4xl font-bold text-gray-900">
                7.755
              </p>

              <p className="mt-2 text-gray-600">
                penalties per 100 plays
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-7">

              <p className="text-sm text-gray-500">
                Lower-rate example
              </p>

              <p className="mt-2 text-4xl font-bold text-gray-900">
                6.62
              </p>

              <p className="mt-2 text-gray-600">
                penalties per 100 plays
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-7">

              <p className="text-sm text-gray-500">
                Higher-rate example
              </p>

              <p className="mt-2 text-4xl font-bold text-gray-900">
                8.03
              </p>

              <p className="mt-2 text-gray-600">
                penalties per 100 plays
              </p>

            </div>

          </div>

          <p className="mt-8 text-gray-600 leading-8">
            Even among referees who worked throughout the entire ten-year
            period, meaningful differences remained. For example, Bill
            Vinovich averaged 6.62 penalties per 100 plays while Carl Cheffers
            averaged 8.03, suggesting that the observed variation was not
            simply caused by officials having different amounts of experience
            in the dataset.
          </p>

        </section>


        {/* Finding 3 */}
        <section className="mt-14">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Finding 03
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Replay Reversal Rates Increased
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Replay review outcomes showed a notable increase in the percentage
            of reviewed plays that were reversed during the post-betting era.
            However, this increase appears to be part of a broader trend that
            began before 2019.
          </p>

          <div className="mt-8 border-l-4 border-blue-600 bg-gray-50 p-7">

            <p className="text-xl font-semibold text-gray-900">
              An important distinction
            </p>

            <p className="mt-3 text-gray-600 leading-7">
              Officials became more likely to overturn reviewed calls, but the
              total number of replay reviews per season declined. This suggests
              that teams became less likely to challenge plays even as
              individual challenges were more likely to result in reversals.
            </p>

          </div>

          <p className="mt-6 text-gray-600 leading-8">
            Differences were also observed across play types and referees, but
            these differences did not directly correspond with the legalization
            of sports betting.
          </p>

        </section>


        {/* Main Conclusion */}
        <section className="mt-16">

          <div className="rounded-xl bg-gray-50 border border-gray-200 p-8 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Overall Conclusion
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              The patterns changed — but that does not mean betting caused them.
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              The analysis identified meaningful changes in NFL officiating
              between the pre-betting and post-betting eras. However, the
              descriptive evidence does not support the conclusion that
              widespread sports betting legalization caused those changes.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              The NFL regularly changes its rules, regulations, technology,
              officiating procedures, and training practices. These factors
              provide several plausible alternative explanations for the
              observed shifts.
            </p>

          </div>

        </section>


        {/* Limitations */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Limitations
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Because this project is exploratory and descriptive, the results
            should not be interpreted as causal evidence that legalized sports
            betting affected NFL officiating.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Descriptive Analysis
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                The analysis identifies patterns and associations but does not
                estimate causal effects.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Rule Changes
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                NFL rules and officiating guidelines changed throughout the
                study period and may explain some observed trends.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Other Confounders
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Technology, officiating training, team behavior, and other
                factors may have influenced penalty and replay patterns.
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
            A natural next step would be to move beyond descriptive analysis
            and use formal statistical methods to investigate whether the
            observed changes can be attributed to the expansion of legalized
            sports betting.
          </p>

          <ul className="mt-6 space-y-4 text-gray-600 leading-7">

            <li>
              • Use regression-based approaches to control for season,
              team, game, and officiating-crew characteristics.
            </li>

            <li>
              • Investigate heterogeneous effects across penalty types and
              game situations.
            </li>

            <li>
              • Account explicitly for NFL rule and technology changes.
            </li>

            <li>
              • Explore whether betting intensity varies across states,
              markets, games, or seasons.
            </li>

            <li>
              • Develop a causal framework for estimating the effect of sports
              betting legalization on officiating outcomes.
            </li>

          </ul>

        </section>


        {/* Skills */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Skills Demonstrated
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Data Wrangling
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Loaded, merged, cleaned, transformed, and filtered large
                play-by-play and game-level NFL datasets.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Exploratory Analysis
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Used descriptive statistics and temporal comparisons to
                investigate changes in officiating patterns.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Data Visualization
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Created visualizations to communicate penalty trends,
                officiating differences, and replay outcomes.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Critical Interpretation
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Distinguished descriptive associations from causal claims and
                considered alternative explanations for observed patterns.
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
              "Matplotlib",
              "Seaborn",
              "Plotly",
              "nflreadpy",
              "NFLverse",
              "Data Cleaning",
              "Exploratory Data Analysis",
              "Data Visualization",
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
              href="https://github.com/chasefoster3/nfl-officiating-analysis"
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