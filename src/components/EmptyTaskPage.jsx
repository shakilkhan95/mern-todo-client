import { ArrowRight, Plus, Sparkles } from "@gravity-ui/icons";
import Link from "next/link";
import { FaClipboardList } from "react-icons/fa";

const EmptyTasks = () => {
  return (
    <div className="flex min-h-[65vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">

        {/* Illustration */}
        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-indigo-50">
          <div className="absolute inset-3 rounded-full border border-indigo-100" />
          <FaClipboardList size={48} className="text-indigo-600" />

          <span className="absolute -right-1 -top-1 flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-500">
            <Sparkles size={19} />
          </span>
        </div>

        {/* Content */}
        <span className="mb-4 inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-600">
          A FRESH START
        </span>

        <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Nothing on your list yet!
        </h2>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-slate-500">
          Every great achievement starts with a small step.
          Add your first task and start making progress toward your goals.
        </p>

        {/* Add Task Button */}
        <Link
          href="/my-tasks/add-task"
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-indigo-300"
        >
          <Plus size={19} />
          Add Your First Task
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        <p className="mt-6 text-xs text-slate-400">
          Stay organized. Stay focused. Get things done.
        </p>
      </div>
    </div>
  );
};

export default EmptyTasks;
