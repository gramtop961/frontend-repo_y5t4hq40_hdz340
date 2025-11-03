import { Briefcase, Lightbulb, Users, Rocket } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Strategy & Positioning',
    desc: 'Clarity on where to play and how to win. Market analysis, value propositions, and strategic roadmaps you can execute.'
  },
  {
    icon: Users,
    title: 'Operating Model Design',
    desc: 'Structure, process, and governance for scale. Define roles, rituals, and metrics that make excellence repeatable.'
  },
  {
    icon: Briefcase,
    title: 'Digital Transformation',
    desc: 'Modernize platforms and ways of working. Product operating models, agile at scale, and change adoption that sticks.'
  },
  {
    icon: Rocket,
    title: 'Execution & PMO',
    desc: 'From idea to impact. Stand-up, steer, and land complex initiatives with transparent reporting and hard delivery.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Senior consultants focused on tangible business outcomes. No padding, no noise.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-blue-600/10 text-blue-700 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 text-xs font-medium text-blue-700">Engagements typically 4–12 weeks</div>
            </div>
          ))}
        </div>

        <div id="approach" className="mt-16 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-slate-900">A crisp, outcome-led approach</h3>
            <p className="mt-3 text-slate-600">We keep it practical: align on outcomes, co-create with your team, and build capability as we go.</p>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
            {[ 'Diagnose quickly', 'Design the path', 'Deliver and embed' ].map((step, idx) => (
              <div key={step} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="text-3xl font-extrabold text-blue-600">{String(idx + 1).padStart(2,'0')}</div>
                <div className="mt-2 font-semibold text-slate-900">{step}</div>
                <p className="mt-1 text-sm text-slate-600">{idx === 0 && 'Rapid discovery and baseline to focus on the real constraints.'}
                  {idx === 1 && 'Co-create the operating blueprint and a pragmatic delivery plan.'}
                  {idx === 2 && 'Ship change, prove value early, and transfer capability to your team.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
