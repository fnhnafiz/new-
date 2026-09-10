/* components/courses/EmptyState.jsx */

import Link from "next/link";
import { SearchX } from "lucide-react";

export default function EmptyState({ onClear }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-white px-6 py-16 text-center">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-surface text-body">
        <SearchX size={26} />
      </span>

      <h3 className="mt-5 text-lg font-semibold">No courses match that yet</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed">
        Try widening one filter at a time. Tuition and IELTS are usually the two
        doing the most damage.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button type="button" onClick={onClear} className="btn btn-primary">
          Clear all filters
        </button>
        <Link href="/counseling" className="btn btn-outline">
          Ask a counsellor
        </Link>
      </div>
    </div>
  );
}