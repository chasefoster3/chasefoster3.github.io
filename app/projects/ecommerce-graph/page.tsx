import Image from "next/image";
import Link from "next/link";

export default function EcommerceGraphPage() {
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
            eCommerce Graph Analytics
          </h1>

          <p className="mt-6 text-xl text-gray-600 leading-8 max-w-4xl">
            A graph-based analysis of Amazon product relationships designed
            to uncover product importance, communities, and similarities for
            recommendation, cross-selling, and product bundling.
          </p>

        </div>


        {/* Project Image */}
        <div className="mt-12 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/project-images/ecommerce_graph_analytics.png"
            alt="eCommerce Graph Analytics"
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
            E-commerce platforms depend heavily on understanding relationships
            between customers and products. Traditional relational databases
            are effective for storing tabular information, but analyzing large
            numbers of interconnected relationships can require expensive
            joins and make relationship patterns difficult to discover.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            This project explored how graph analytics can represent and analyze
            these relationships directly. Using Amazon sales data, we built a
            graph connecting users and products based on review behavior and
            used graph algorithms to identify important products, product
            communities, and similar products.
          </p>

        </section>


        {/* Business Scenario */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Business Scenario
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We approached the project from the perspective of working as a
            data science team at a large e-commerce company such as Amazon.
            The goal was to use customer behavior and product relationships
            to generate insights that could support product recommendations,
            cross-selling, and bundle discovery.
          </p>


          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Recommendations
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Identify products that are strongly connected to products a
                customer has already interacted with.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Cross-Selling
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Discover products with strong relationships that could be
                presented as complementary purchases.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Bundle Discovery
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Identify groups of closely connected products that may make
                sense as product bundles.
              </p>

            </div>

          </div>

        </section>


        {/* Why Graphs */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Why a Graph?
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The central idea of the project was to model customer behavior as
            a network of relationships rather than treating each record as an
            isolated row in a table.
          </p>


          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Relational Approach
              </h3>

              <ul className="mt-4 space-y-3 text-gray-600">

                <li>• Expensive joins for complex relationships</li>
                <li>• Relationships are less visually apparent</li>
                <li>• More difficult to discover connection patterns</li>

              </ul>

            </div>


            <div className="border border-blue-200 bg-blue-50 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Graph Approach
              </h3>

              <ul className="mt-4 space-y-3 text-gray-600">

                <li>• Relationships are represented directly</li>
                <li>• Easier discovery of connected products</li>
                <li>• Enables graph-specific algorithms</li>

              </ul>

            </div>

          </div>

        </section>


        {/* Graph Design */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Graph Design
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The graph was constructed around users, products, and the
            relationships created by shared review behavior.
          </p>


          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="border border-gray-200 rounded-xl p-8">

              <h3 className="text-2xl font-semibold text-gray-900">
                Nodes
              </h3>

              <div className="mt-5 space-y-4">

                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="font-semibold text-gray-900">
                    Users
                  </span>

                  <p className="mt-1 text-gray-600">
                    Customers represented in the sales/review data.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="font-semibold text-gray-900">
                    Products
                  </span>

                  <p className="mt-1 text-gray-600">
                    Amazon products represented in the dataset.
                  </p>
                </div>

              </div>

            </div>


            <div className="border border-gray-200 rounded-xl p-8">

              <h3 className="text-2xl font-semibold text-gray-900">
                Relationships
              </h3>

              <div className="mt-5 space-y-4">

                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="font-semibold text-gray-900">
                    REVIEWED
                  </span>

                  <p className="mt-1 text-gray-600">
                    Connects users to products they reviewed.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="font-semibold text-gray-900">
                    CO_REVIEWED
                  </span>

                  <p className="mt-1 text-gray-600">
                    Connects products that were reviewed by the same users.
                  </p>
                </div>

              </div>

            </div>

          </div>


          <div className="mt-8 border border-gray-200 rounded-xl p-6">

            <h3 className="text-xl font-semibold text-gray-900">
              Edge Weight
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              The weight of a product-to-product connection represents the
              strength of the relationship — specifically, how frequently the
              products were reviewed together by the same users.
            </p>

          </div>

        </section>


        {/* Dataset */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Dataset
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The project used an Amazon sales dataset obtained from Kaggle. The
            dataset contained more than 1,000 Amazon sales records along with
            product ratings and review information.
          </p>


          <div className="mt-8 border border-gray-200 rounded-xl p-8 bg-gray-50">

            <p className="text-4xl font-bold text-gray-900">
              1K+
            </p>

            <p className="mt-3 text-lg text-gray-600">
              Amazon sales records used to construct the product relationship
              network.
            </p>

          </div>

        </section>


        {/* Algorithms */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Graph Algorithms
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Three graph analytics techniques were used to investigate
            different aspects of the product network.
          </p>


          <div className="mt-8 space-y-6">

            {/* PageRank */}
            <div className="border border-gray-200 rounded-xl p-8">

              <div className="flex items-start gap-5">

                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  1
                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900">
                    PageRank
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    PageRank was used to identify important or influential
                    nodes within the product network. This provides a way to
                    identify products that occupy particularly important
                    positions within the graph.
                  </p>

                </div>

              </div>

            </div>


            {/* Louvain */}
            <div className="border border-gray-200 rounded-xl p-8">

              <div className="flex items-start gap-5">

                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  2
                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900">
                    Louvain Community Detection
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    Louvain community detection was used to identify groups
                    of products that were more strongly connected to one
                    another. These communities can reveal product clusters
                    and groups of items with related customer behavior.
                  </p>

                </div>

              </div>

            </div>


            {/* Node Similarity */}
            <div className="border border-gray-200 rounded-xl p-8">

              <div className="flex items-start gap-5">

                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  3
                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-gray-900">
                    Node Similarity
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    Node similarity was used to identify products with similar
                    positions or connection patterns in the graph. This can
                    support recommendations by finding products that behave
                    similarly within the network.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* Findings */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Findings
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The graph-based approach revealed meaningful relationships between
            products that would be more difficult to identify by looking only
            at individual sales records.
          </p>


          <div className="mt-8 grid md:grid-cols-3 gap-6">

            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Important Products
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                PageRank helped identify products occupying important positions
                within the product network.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Product Communities
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Louvain community detection exposed groups of products with
                strong relationships to one another.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Similar Products
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Node similarity provided a way to discover related products
                that could be useful for recommendations and cross-selling.
              </p>

            </div>

          </div>

        </section>


        {/* Database Technologies */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Database Technologies & Use Cases
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            The project also considered how different database technologies
            could support different parts of an e-commerce analytics system.
          </p>


          <div className="mt-8 grid md:grid-cols-2 gap-6">

            {/* MongoDB */}
            <div className="border border-gray-200 rounded-xl p-8">

              <h3 className="text-2xl font-semibold text-gray-900">
                MongoDB
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                MongoDB was considered for product sentiment analysis and
                storage of Amazon review data.
              </p>

              <h4 className="mt-6 font-semibold text-gray-900">
                Strengths
              </h4>

              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Flexible schema</li>
                <li>• Natural storage for JSON data</li>
                <li>• Easy integration with Python models</li>
                <li>• Well suited for semi-structured review text</li>
              </ul>

              <h4 className="mt-6 font-semibold text-gray-900">
                Limitation
              </h4>

              <p className="mt-2 text-gray-600">
                Less effective for discovering complex product relationships
                and recommendation chains.
              </p>

            </div>


            {/* Redis */}
            <div className="border border-gray-200 rounded-xl p-8">

              <h3 className="text-2xl font-semibold text-gray-900">
                Redis
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                Redis was considered for real-time product insights, such as
                identifying currently viewed or discounted products.
              </p>

              <h4 className="mt-6 font-semibold text-gray-900">
                Strengths
              </h4>

              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Fast retrieval</li>
                <li>• Real-time performance</li>
                <li>• Useful for live dashboard insights</li>
              </ul>

              <h4 className="mt-6 font-semibold text-gray-900">
                Limitations
              </h4>

              <ul className="mt-3 space-y-2 text-gray-600">
                <li>• Memory constrained by RAM</li>
                <li>• Less suitable for long historical analysis</li>
                <li>• Not designed for complex graph relationships</li>
              </ul>

            </div>

          </div>

        </section>


        {/* Takeaways */}
        <section className="mt-14">

          <h2 className="text-3xl font-bold text-gray-900">
            Key Takeaways
          </h2>

          <div className="mt-8 border-l-4 border-blue-600 bg-gray-50 p-8">

            <p className="text-xl text-gray-800 leading-8">
              Graph-based analytics can reveal relationships between products
              that are difficult to see when customer and product data are
              treated as isolated records.
            </p>

          </div>

          <p className="mt-6 text-gray-600 leading-8">
            By combining PageRank, community detection, and node similarity,
            the project demonstrated how a product graph can uncover important
            products, product groups, and similar items. These insights can
            support recommendation systems, cross-selling strategies, and
            product bundle discovery.
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
                Graph Analytics
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Modeled relationships between users and products and applied
                graph algorithms to uncover network structure.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Recommendation Thinking
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Translated graph relationships into potential recommendation,
                cross-selling, and bundling use cases.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Data Modeling
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Designed nodes, relationships, and edge weights to represent
                customer-product interactions.
              </p>

            </div>


            <div className="border border-gray-200 rounded-xl p-6">

              <h3 className="text-xl font-semibold text-gray-900">
                Database Systems
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Evaluated MongoDB and Redis for complementary e-commerce
                analytics and data-storage use cases.
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
              "Graph Analytics",
              "PageRank",
              "Louvain",
              "Node Similarity",
              "Amazon Sales Dataset",
              "Kaggle",
              "MongoDB",
              "Redis",
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
              href="https://github.com/chasefoster3/ecommerce-graph-analytics"
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