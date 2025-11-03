import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-blue-700 text-xs font-semibold">
              <span>Strategy • Transformation • Delivery</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Build a sharper, stronger, scalable business
            </h1>
            <p className="mt-5 text-lg text-slate-600 max-w-xl">
              We help ambitious teams clarify strategy, design resilient operating models, and ship change that sticks. Less slideware, more outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700">
                Book a discovery call
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-slate-800 font-semibold hover:bg-slate-50">
                Explore services
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" />Clear ROI focus</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" />Senior-only team</div>
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-600" />Delivery to adoption</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-indigo-200/50 blur-3xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Growth Strategy', metric: '+28% YoY' },
                  { title: 'Cost Optimisation', metric: '−17% OPEX' },
                  { title: 'NPS Uplift', metric: '+22 pts' },
                  { title: 'Time-to-Market', metric: '3x faster' },
                ].map((card) => (
                  <div key={card.title} className="rounded-xl border border-slate-200 p-4">
                    <p className="text-xs uppercase tracking-wide text-slate-500">{card.title}</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">{card.metric}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">
                <p className="text-sm opacity-90">Featured program</p>
                <p className="mt-1 text-lg font-semibold">90‑Day Operating Model Sprint</p>
                <p className="mt-2 text-sm opacity-90">Diagnose, design, and implement a scalable operating model in 12 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
