export default function Benefits() {
  const benefits = [
    {
      title: "Lower Production Costs",
      desc: "Optimize your manufacturing process with better resource utilization.",
    },
    {
      title: "High Quality Products",
      desc: "Ensure every output passes strict quality checks.",
    },
    {
      title: "Fast Manufacturing",
      desc: "Accelerate production speed without sacrificing quality.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold text-primary mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-primary">{b.title}</h3>
              <p className="text-gray-600 mt-3">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}