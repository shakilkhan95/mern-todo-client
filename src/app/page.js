import { ArrowRight } from "@gravity-ui/icons";
import Link from "next/link";


export default function Home() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">
      <div>
        <span className="mb-6 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
          ✨ Your productivity partner
        </span>

        <h1 className="text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
          Organize your life.
          <br />
          <span className="text-indigo-600">One task at a time.</span>
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
          Welcome to TaskFlow! Take control of your day, organize your tasks,
          and stay focused on what matters most. A simpler way to get things
          done starts here.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/signup"
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
          >
            Start Organizing <ArrowRight size={18} />
          </Link>

          <Link
            href="/signin"
            className="rounded-lg border border-slate-300 px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Sign In
          </Link>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          ✓ Simple &nbsp; ✓ Organized &nbsp; ✓ Productive
        </p>
      </div>

      {/* Task Preview */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-indigo-100/50 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold tracking-widest text-slate-400">
              YOUR WORKSPACE
            </p>
            <h2 className="mt-2 text-2xl font-bold">Today's Tasks</h2>
          </div>
          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm text-indigo-600">
            My Day ☀️
          </span>
        </div>

        {/* Progress */}
        <div className="mt-8">
          <div className="mb-3 flex justify-between text-sm">
            <span className="text-slate-500">Daily progress</span>
            <span className="font-bold text-indigo-600">60%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[60%] rounded-full bg-indigo-600" />
          </div>
        </div>

        <p className="mt-7 text-center text-sm text-slate-400">
          Small steps lead to big achievements. 🚀
        </p>
      </div>
    </section>
  );
}
