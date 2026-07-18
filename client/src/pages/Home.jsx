import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why CampusConnect AI?
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          <FeatureCard
            icon="🤖"
            title="AI Resume Matching"
            description="AI analyzes student resumes and recommends the best opportunities."
          />

          <FeatureCard
            icon="🎓"
            title="Student Portal"
            description="Students can explore internships, jobs and placement drives."
          />

          <FeatureCard
            icon="🏢"
            title="Company Dashboard"
            description="Companies can post jobs and find eligible candidates instantly."
          />

          <FeatureCard
            icon="📊"
            title="Placement Analytics"
            description="Track applications, hiring progress and placement statistics."
          />
        </div>
      </section>
      <section className="bg-blue-700 text-white py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

    <div>
      <h2 className="text-5xl font-bold">5000+</h2>
      <p className="mt-2">Students</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold">150+</h2>
      <p className="mt-2">Companies</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold">300+</h2>
      <p className="mt-2">Job Listings</p>
    </div>

    <div>
      <h2 className="text-5xl font-bold">95%</h2>
      <p className="mt-2">Placement Success</p>
    </div>

  </div>
</section>

      <Footer />
    </>
  );
}

export default Home;