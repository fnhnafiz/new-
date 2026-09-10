/* components/courses/CourseSkeleton.jsx */

export default function CourseSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <div className="flex items-start gap-3">
        <div className="h-11 w-11 shrink-0 animate-pulse rounded-xl bg-surface" />
        <div className="flex-1 space-y-2">
          <div className="h-3.5 w-2/3 animate-pulse rounded bg-surface" />
          <div className="h-3 w-1/3 animate-pulse rounded bg-surface" />
        </div>
        <div className="h-11 w-11 shrink-0 animate-pulse rounded-full bg-surface" />
      </div>

      <div className="mt-4 h-5 w-4/5 animate-pulse rounded bg-surface" />

      <div className="mt-3 flex gap-1.5">
        <div className="h-6 w-20 animate-pulse rounded-lg bg-surface" />
        <div className="h-6 w-24 animate-pulse rounded-lg bg-surface" />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-1.5">
            <div className="h-2.5 w-12 animate-pulse rounded bg-surface" />
            <div className="h-3 w-16 animate-pulse rounded bg-surface" />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <div className="h-6 w-28 animate-pulse rounded bg-surface" />
        <div className="h-8 w-24 animate-pulse rounded-lg bg-surface" />
      </div>
    </div>
  );
}