function Hero() {
  return (
    <section className="min-h-[85vh] bg-gradient-to-r from-blue-700 to-indigo-900 text-white flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-6xl font-extrabold leading-tight">
        AI-Powered <br />
        Campus Recruitment
      </h1>

      <p className="mt-6 text-xl max-w-2xl text-gray-200">
        Connect Students, Companies, and Placement Officers
        through Artificial Intelligence.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>

        <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
          Explore
        </button>
      </div>

    </section>
  );
}

export default Hero;