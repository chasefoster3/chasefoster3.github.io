import Image from "next/image";
import Link from "next/link";

export default function AIConsistencyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* =========================
          HEADER / PROJECT INTRO
      ========================== */}

      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-28">

        <Link
          href="/"
          className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-gray-900 transition"
        >
          ← Back to Home
        </Link>

        <div className="mt-16 max-w-4xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Experimental Research · NLP · Machine Learning
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            AI Consistency
            <br />
            Experiment
          </h1>

          <p className="mt-8 max-w-3xl text-xl md:text-2xl text-gray-500 leading-relaxed">
            Does adding consistency-focused instructions to AI prompts
            actually make large language models more consistent?
          </p>

        </div>

        {/* Project Metadata */}

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-gray-500">

          <div>
            <span className="block text-xs uppercase tracking-widest text-gray-400">
              Type
            </span>
            <span className="block mt-1 text-gray-800">
              Experimental Study
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-gray-400">
              Models
            </span>
            <span className="block mt-1 text-gray-800">
              Gemini · Gemma · ChatGPT
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-gray-400">
              Outcome
            </span>
            <span className="block mt-1 text-gray-800">
              Semantic Consistency
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-gray-400">
              Role
            </span>
            <span className="block mt-1 text-gray-800">
              Researcher
            </span>
          </div>

        </div>

      </div>


      {/* =========================
          HERO IMAGE
      ========================== */}

      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-16">

        <div className="overflow-hidden bg-gray-50 border-y border-gray-200">
          <Image
            src="/project-images/ChatGPT_Image.png"
            alt="AI Consistency Experiment"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </div>

      </div>


      {/* =========================
          OVERVIEW
      ========================== */}

      <div className="max-w-4xl mx-auto px-6 md:px-10">

        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            The Problem
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Measuring consistency in AI systems
          </h2>

          <div className="mt-8 space-y-6 text-lg text-gray-600 leading-8">

            <p>
              Large language models can produce meaningfully different outputs
              when given the exact same prompt multiple times. This
              inconsistency can undermine user trust, complicate quality
              assurance and testing, and make model behavior more difficult to
              reproduce or audit.
            </p>

            <p>
              This study investigates whether simple prompt engineering
              interventions can reduce this variability. We designed a
              randomized within-subjects experiment comparing multiple prompt
              interventions across different types of text and image tasks,
              language models, and temperature settings.
            </p>

          </div>

        </section>


        {/* Research Question */}

        <section className="mt-20 border-t border-gray-200 pt-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Research Question
          </p>

          <blockquote className="mt-6 text-3xl md:text-4xl font-medium leading-tight tracking-tight">
            “Does adding consistency-focused instructions to AI prompts
            produce more consistent responses across repeated generations?”
          </blockquote>

        </section>


        {/* Hypothesis */}

        <section className="mt-20 border-t border-gray-200 pt-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Hypothesis
          </p>

          <div className="mt-6 space-y-5 text-lg text-gray-600 leading-8">

            <p>
              We hypothesized that consistency-focused instructions would
              increase response similarity across repeated generations, with
              effects varying by prompt type and language model.
            </p>

            <p>
              We expected the effect to be strongest for open-ended factual
              prompts, where multiple reasonable responses and phrasings are
              possible, and weaker for closed factual prompts where the output
              space is already more constrained.
            </p>

          </div>

        </section>


        {/* =========================
            EXPERIMENT AT A GLANCE
        ========================== */}

        <section className="mt-24 border-y border-gray-200 py-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Experiment at a Glance
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-y-10">

            <div>
              <p className="text-4xl md:text-5xl font-bold tracking-tight">
                51
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Text prompts
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-5xl font-bold tracking-tight">
                51
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Images
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-5xl font-bold tracking-tight">
                3
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Language models
              </p>
            </div>

            <div>
              <p className="text-4xl md:text-5xl font-bold tracking-tight">
                10
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Generations per condition
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            EXPERIMENTAL DESIGN
        ========================== */}

        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Methodology
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Experimental Design
          </h2>

          <p className="mt-7 text-lg text-gray-600 leading-8">
            The experiment used a randomized within-subjects design. Rather
            than assigning different prompts to different treatment groups,
            every sampled prompt was evaluated under every applicable
            experimental condition. This allowed each prompt to serve as its
            own control and reduced between-prompt variability.
          </p>

        </section>


        {/* Data */}

        <section className="mt-20 border-t border-gray-200 pt-16">

          <h3 className="text-2xl font-bold">
            Data
          </h3>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            We randomly sampled 51 text prompts, with 17 prompts from each of
            three prompt categories, along with 51 images from the COCO
            dataset. Sampling was performed with a fixed random seed to ensure
            reproducibility.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-12">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Text
              </p>

              <ul className="mt-5 space-y-4 text-gray-600">

                <li>
                  <span className="font-semibold text-gray-900">
                    Open-ended factual
                  </span>
                  <br />
                  TruthfulQA
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
                    Closed factual
                  </span>
                  <br />
                  Google Natural Questions
                </li>

                <li>
                  <span className="font-semibold text-gray-900">
                    Ambiguous
                  </span>
                  <br />
                  ELI5
                </li>

              </ul>

            </div>


            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Images
              </p>

              <p className="mt-5 text-gray-600 leading-7">
                51 randomly sampled images from the COCO dataset were used for
                the image-description experiment.
              </p>

            </div>

          </div>

        </section>


        {/* Models */}

        <section className="mt-20 border-t border-gray-200 pt-16">

          <h3 className="text-2xl font-bold">
            Language Models
          </h3>

          <div className="mt-8 grid md:grid-cols-3 gap-8">

            <div>
              <p className="text-xl font-semibold">
                Gemini 2.5 Flash
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold">
                GPT-4.1 Mini
              </p>
            </div>

            <div>
              <p className="text-xl font-semibold">
                Gemma-3
              </p>
            </div>

          </div>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Each model was evaluated at both temperature 0 and temperature 2
            to examine how prompt engineering effects interacted with the
            randomness of generation.
          </p>

        </section>


        {/* =========================
            PROMPT INTERVENTIONS
        ========================== */}

        <section className="mt-20 border-t border-gray-200 pt-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Treatments
          </p>

          <h3 className="mt-4 text-2xl md:text-3xl font-bold">
            Prompt Engineering Interventions
          </h3>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Five prompt engineering interventions were compared against a
            control condition. Each intervention was prepended to the original
            question without changing the underlying prompt.
          </p>

          <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">

            <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <span className="font-semibold">
                Control
              </span>
              <span className="text-gray-500">
                Original prompt
              </span>
            </div>

            <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <span className="font-semibold">
                Consistency Instruction
              </span>
              <span className="text-gray-500">
                “Answer this question the same way every time.”
              </span>
            </div>

            <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <span className="font-semibold">
                Authority Role
              </span>
              <span className="text-gray-500">
                “Answer as a scientist.”
              </span>
            </div>

            <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <span className="font-semibold">
                Decisive Answer
              </span>
              <span className="text-gray-500">
                “Answer clearly and decisively.”
              </span>
            </div>

            <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <span className="font-semibold">
                Consensus Answer
              </span>
              <span className="text-gray-500">
                “Give the most widely accepted answer.”
              </span>
            </div>

            <div className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <span className="font-semibold">
                Format Constraint
              </span>
              <span className="text-gray-500">
                “Answer in exactly 2 sentences.”
              </span>
            </div>

          </div>

        </section>


        {/* =========================
            MEASUREMENT
        ========================== */}

        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Measurement
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Turning repeated responses into a measurable outcome
          </h2>

          <div className="mt-8 space-y-6 text-lg text-gray-600 leading-8">

            <p>
              Each prompt-condition combination produced ten independent
              responses. These responses were converted into sentence
              embeddings using the{" "}
              <span className="font-semibold text-gray-900">
                all-mpnet-base-v2
              </span>{" "}
              model from the SentenceTransformers library.
            </p>

            <p>
              We then calculated cosine similarity for all 45 unique pairs of
              the ten responses. The average cosine similarity became the
              consistency score, with higher values representing greater
              semantic consistency.
            </p>

          </div>


          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div>
              <p className="text-4xl font-bold">
                10
              </p>
              <p className="mt-2 text-gray-500">
                Responses
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold">
                45
              </p>
              <p className="mt-2 text-gray-500">
                Pairwise comparisons
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold">
                Cosine
              </p>
              <p className="mt-2 text-gray-500">
                Similarity-based outcome
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            POWER + STATISTICS
        ========================== */}

        <section className="mt-24 border-t border-gray-200 pt-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Statistical Analysis
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Designing the experiment before running it
          </h2>

          <p className="mt-7 text-lg text-gray-600 leading-8">
            Before running the experiment, we conducted a simulation-based
            power analysis to determine an appropriate number of prompts. We
            evaluated expected treatment effects of 4%, 8%, and 12% and
            simulated 1,000 datasets for each scenario.
          </p>

          <div className="mt-10 bg-gray-950 text-white px-8 md:px-12 py-10">

            <p className="text-sm uppercase tracking-widest text-gray-400">
              Target Sample
            </p>

            <p className="mt-3 text-5xl font-bold">
              51
            </p>

            <p className="mt-3 max-w-xl text-gray-300 leading-7">
              Prompts and images selected based on statistical power and
              computational feasibility.
            </p>

          </div>

          <p className="mt-8 text-lg text-gray-600 leading-8">
            Under the conservative 4% effect scenario, the regression analysis
            achieved approximately 0.73 power with 10 prompts, 0.94 with 20
            prompts, and nearly 1.00 with 50 prompts.
          </p>


          <div className="mt-14 space-y-6 text-lg text-gray-600 leading-8">

            <p>
              The primary causal estimand was the Average Treatment Effect
              (ATE), defined as the expected difference in semantic consistency
              between each treatment condition and its corresponding control.
            </p>

            <p>
              Regression models included language model, temperature, and prompt
              type as covariates. We also examined interactions between
              treatment condition, prompt type, and temperature.
            </p>

            <p>
              Because the experiment generated repeated observations from the
              same prompts, cluster-robust standard errors were used to account
              for dependence within prompts.
            </p>

          </div>

        </section>


        {/* =========================
            RESULTS
        ========================== */}

        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Results
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            The result was not what we expected.
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-8">
            Rather than consistently increasing semantic consistency, most
            prompt engineering interventions produced decreases in consistency.
            The strongest and most consistent driver of response consistency
            was temperature.
          </p>


          {/* Main Result */}

          <div className="mt-12 bg-gray-950 text-white p-8 md:p-12">

            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
              Most Important Finding
            </p>

            <h3 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Temperature 0 produced the largest and most consistent increase
              in response consistency.
            </h3>

            <p className="mt-6 text-gray-300 text-lg leading-8">
              Across all three language models, reducing temperature from 2 to
              0 had a substantially larger and more consistent effect than the
              prompt engineering interventions themselves.
            </p>

          </div>


          {/* Result comparison */}

          <div className="mt-12 grid md:grid-cols-2 gap-12">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Text Prompts
              </p>

              <p className="mt-5 text-lg text-gray-600 leading-8">
                No treatment condition produced a statistically significant
                increase in consistency at temperature 2. Several treatments
                produced significant decreases, and no single intervention
                behaved consistently across all three LLMs.
              </p>

            </div>


            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Image Prompts
              </p>

              <p className="mt-5 text-lg text-gray-600 leading-8">
                The consistency instruction produced a negative and statistically
                significant treatment effect for all three models when
                considered independently of temperature.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            KEY FINDINGS
        ========================== */}

        <section className="mt-24 border-t border-gray-200 pt-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            What We Found
          </p>

          <div className="mt-10 space-y-12">

            <div className="grid md:grid-cols-[80px_1fr] gap-6">

              <span className="text-4xl font-bold text-gray-300">
                01
              </span>

              <div>
                <h3 className="text-2xl font-bold">
                  Temperature dominated
                </h3>

                <p className="mt-3 text-lg text-gray-600 leading-8">
                  Temperature 0 was the largest and most consistent driver of
                  response consistency across the three language models.
                </p>
              </div>

            </div>


            <div className="grid md:grid-cols-[80px_1fr] gap-6">

              <span className="text-4xl font-bold text-gray-300">
                02
              </span>

              <div>
                <h3 className="text-2xl font-bold">
                  Effects were heterogeneous
                </h3>

                <p className="mt-3 text-lg text-gray-600 leading-8">
                  No single prompt engineering intervention produced the same
                  effect across Gemini, Gemma, and ChatGPT.
                </p>
              </div>

            </div>


            <div className="grid md:grid-cols-[80px_1fr] gap-6">

              <span className="text-4xl font-bold text-gray-300">
                03
              </span>

              <div>
                <h3 className="text-2xl font-bold">
                  The most intuitive treatment failed
                </h3>

                <p className="mt-3 text-lg text-gray-600 leading-8">
                  The direct instruction to improve consistency was among the
                  most reliably negative treatment effects rather than the most
                  positive.
                </p>
              </div>

            </div>


            <div className="grid md:grid-cols-[80px_1fr] gap-6">

              <span className="text-4xl font-bold text-gray-300">
                04
              </span>

              <div>
                <h3 className="text-2xl font-bold">
                  There were limited exceptions
                </h3>

                <p className="mt-3 text-lg text-gray-600 leading-8">
                  Format Constraint combined with low temperature produced a
                  marginal improvement for Gemma on text prompts, while the
                  image treatment provided a marginal additional improvement
                  for Gemma over low temperature alone.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            DISCUSSION
        ========================== */}

        <section className="mt-24">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Interpretation
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Why might consistency instructions backfire?
          </h2>

          <div className="mt-8 space-y-6 text-lg text-gray-600 leading-8">

            <p>
              The findings challenge the assumption that explicitly asking an
              LLM to be consistent will necessarily make its responses more
              consistent. One possible explanation is that the additional
              instruction changes the generation process in ways that introduce
              additional noise, particularly at high temperature.
            </p>

            <p>
              Another possibility is that the wording of the consistency
              instruction is difficult for a stateless language model to act
              upon. The instruction to “answer the same way every time”
              implicitly refers to previous generations, even though each API
              call is independent and the model has no memory of its previous
              response.
            </p>

            <p>
              Overall, the results demonstrate that seemingly intuitive prompt
              engineering strategies should be evaluated empirically rather
              than assumed to improve model reliability.
            </p>

          </div>

        </section>


        {/* =========================
            SKILLS
        ========================== */}

        <section className="mt-24 border-t border-gray-200 pt-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Technical Work
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">

            <div>

              <h3 className="text-xl font-bold">
                Experimental Design
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Designed and implemented a randomized within-subjects
                experiment with multiple interventions, models, temperatures,
                and repeated observations.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-bold">
                Natural Language Processing
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Used sentence embeddings and cosine similarity to quantify
                semantic consistency between generated responses.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-bold">
                Statistical Analysis
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Applied regression, interaction models, F-tests, and
                cluster-robust standard errors to estimate treatment effects.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-bold">
                Research & Reproducibility
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Used randomized sampling with a fixed seed, simulation-based
                power analysis, and controlled experimental conditions.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            TECHNOLOGIES
        ========================== */}

        <section className="mt-20 border-t border-gray-200 pt-16">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Stack
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-gray-700">

            {[
              "Python",
              "PyTorch",
              "Transformers",
              "Sentence Transformers",
              "Pandas",
              "NumPy",
              "Scikit-learn",
              "Statsmodels",
              "LLMs",
              "Cosine Similarity",
              "Regression",
            ].map((technology) => (
              <span
                key={technology}
                className="text-sm"
              >
                {technology}
              </span>
            ))}

          </div>

        </section>


        {/* =========================
            PROJECT LINKS
        ========================== */}

        <section className="mt-20 border-t border-gray-200 pt-16 pb-24">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                Explore the Work
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                Interested in the implementation?
              </h2>

            </div>

            <a
              href="https://github.com/chasefoster3/ai-consistency-experiment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition"
            >
              View on GitHub →
            </a>

          </div>


          <div className="mt-16 pt-8 border-t border-gray-200">

            <Link
              href="/"
              className="text-sm font-medium text-blue-500 hover:text-gray-900 transition"
            >
              ← Back to Home
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}