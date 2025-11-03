import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Let’s unlock your next leap</h3>
            <p className="mt-2 text-slate-600">Share a little about your goals and we’ll set up a no‑pressure discovery call.</p>
            <form className="mt-6 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input required className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Full name" />
                <input required type="email" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Work email" />
              </div>
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Company (optional)" />
              <textarea rows={4} className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="What challenge are you solving?" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700">
                Request a call
                <ArrowRight className="h-5 w-5" />
              </button>
              <p className="text-xs text-slate-500">We’ll respond within one business day.</p>
            </form>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white">
            <h3 className="text-2xl font-bold">Prefer to reach out directly?</h3>
            <p className="mt-2 opacity-90">We work globally with HQ in India. Flexible hours to suit your timezone.</p>
            <div className="mt-6 space-y-4">
              <a href="mailto:hello@competenceconsulting.in" className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/15 grid place-items-center"><Mail className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm opacity-90">Email</div>
                  <div className="font-semibold">hello@competenceconsulting.in</div>
                </div>
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/15 grid place-items-center"><Phone className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm opacity-90">Phone</div>
                  <div className="font-semibold">+91 99999 99999</div>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/15 grid place-items-center"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm opacity-90">Location</div>
                  <div className="font-semibold">India • Remote, global clients</div>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-white/10 p-5">
              <p className="text-sm">"They deliver fast, align leadership, and leave our teams stronger. The ROI was obvious in the first quarter."</p>
              <p className="mt-2 text-sm font-semibold">COO, Fintech Scaleup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
