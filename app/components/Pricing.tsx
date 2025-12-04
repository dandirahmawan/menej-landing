export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      features: ["Basic Production Tools", "1 Workspace", "Email Support"],
    },
    {
      name: "Business",
      price: "$49",
      features: ["Advanced Tools", "Unlimited Projects", "Priority Support"],
    },
    {
      name: "Enterprise",
      price: "$129",
      features: ["Custom Integrations", "Dedicated Support", "On-site Setup"],
    },
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-semibold mb-12">
          Choose Your Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div
              key={i}
              className="p-8 bg-secondary rounded-xl hover:bg-teal-900 transition"
            >
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-4xl font-bold mt-3">{p.price}</p>

              <ul className="mt-6 space-y-2 text-sm text-gray-200">
                {p.features.map((f, j) => (
                  <li key={j}>✓ {f}</li>
                ))}
              </ul>

              <button className="mt-8 px-6 py-2 rounded-lg bg-accent text-primary font-semibold hover:opacity-90">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}