
// [page.tsx](http://_vscodecontentref_/2)
import Image from "next/image";
import Link from "next/link";

const conferencePhotos = [
  "/images/conferences/IMG_20251126_170639_709.jpg",
  "/images/conferences/IMG_20251130_115133_099.jpg",
  "/images/conferences/IMG_20251126_170631_244.jpg",
  "/images/conferences/Panel_Speaking.jpeg",
  "/images/conferences/Me_4.jpeg",
  "/images/conferences/esf-warsaw-1.jpg",
  "/images/conferences/esf-warsaw-2.jpg",
  "/images/conferences/graduants.jpg",
];

const highlights = [
  { label: "Countries engaged", value: "7+" },
  { label: "Talks and workshops", value: "20+" },
  { label: "Cross-sector collaborations", value: "15+" },
  { label: "Years in test engineering", value: "5+" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0f172a_0%,#0b1220_45%,#05070d_100%)] text-white">
      <section className="relative overflow-hidden px-4 pt-28 pb-20 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute top-24 -right-16 h-80 w-80 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-[0.2em] text-cyan-200 uppercase">
              Systems Quality • Global Development • Mentorship
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Building reliable systems and globally relevant impact
            </h1>

            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
              I am Mayowa Adeyemi, a System Test Engineer and Global Development Practitioner.
              I combine deep technical validation with international program delivery, conference speaking,
              and mentorship across Europe.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/engineering"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                Explore Engineering Work
              </Link>
              <Link
                href="/global-dev/conferences"
                className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                See Talks and Conferences
              </Link>
            </div>
          </div>

          <div className="animate-fade-up-delay">
            <div className="relative mx-auto h-72 w-72 overflow-hidden rounded-[2rem] border border-white/20 bg-white/5 p-3 shadow-2xl sm:h-80 sm:w-80">
              <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/headshot.jpg"
                  alt="Mayowa Adeyemi"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/15 bg-white/[0.04] p-4 backdrop-blur-sm"
            >
              <p className="text-2xl font-semibold text-amber-300 sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Field Presence</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Conference and Talk Highlights</h2>
            </div>
            <Link
              href="/global-dev/conferences"
              className="hidden rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 sm:inline-flex"
            >
              View full gallery
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-4">
            <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#070b13] to-transparent" />
            <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#070b13] to-transparent" />

            <div className="marquee-track flex w-max gap-4">
              {[...conferencePhotos, ...conferencePhotos].map((src, index) => (
                <div
                  key={src + index}
                  className="relative h-48 w-72 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-slate-800 sm:h-56 sm:w-80"
                >
                  <Image
                    src={src}
                    alt="Conference and speaking moment"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/global-dev/conferences"
            className="mt-4 inline-flex rounded-lg border border-white/20 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 sm:hidden"
          >
            View full gallery
          </Link>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">Professional Pillars</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/engineering"
              className="group rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-cyan-300/60"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Engineering</p>
              <h3 className="mt-3 text-xl font-semibold">Systems Validation and Test Automation</h3>
              <p className="mt-3 text-slate-300">
                Advanced test design, IC validation, and robust automation pipelines across Python, PDL, and C++.
              </p>
              <p className="mt-5 text-cyan-200">Explore Engineering →</p>
            </Link>

            <Link
              href="/global-dev"
              className="group rounded-2xl border border-amber-400/30 bg-gradient-to-b from-amber-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-amber-300/60"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Global Development</p>
              <h3 className="mt-3 text-xl font-semibold">International Projects and Capacity Building</h3>
              <p className="mt-3 text-slate-300">
                Program and NGO support, workshop delivery, and cross-border collaboration for sustainable outcomes.
              </p>
              <p className="mt-5 text-amber-200">Explore Global Work →</p>
            </Link>

            <Link
              href="/mentorship"
              className="group rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 transition hover:translate-y-[-2px] hover:border-emerald-300/60"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Mentorship</p>
              <h3 className="mt-3 text-xl font-semibold">Career Guidance and Leadership Development</h3>
              <p className="mt-3 text-slate-300">
                Supporting graduates and young professionals through structured mentoring and practical career strategy.
              </p>
              <p className="mt-5 text-emerald-200">Explore Mentorship →</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}