/* components/courses/CompareBar.jsx */
"use client";

import { X, GitCompare } from "lucide-react";

export default function CompareBar({ selected, onRemove, onClear, max }) {
  const open = selected.length > 0;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-out ${
        open ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="border-t border-border bg-white px-4 py-3 shadow-[0_-16px_40px_-24px_rgba(15,23,42,0.4)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 lg:px-8">
          <p className="text-sm font-semibold text-dark">
            {selected.length} of {max} selected
          </p>

          <ul className="flex min-w-0 flex-1 flex-wrap gap-2">
            {selected.map((course) => (
              <li key={course.id}>
                <button
                  type="button"
                  onClick={() => onRemove(course)}
                  className="flex items-center gap-1.5 rounded-lg bg-surface px-2.5 py-1.5 text-xs font-medium text-dark hover:bg-primary-light"
                >
                  <span aria-hidden="true">{course.flag}</span>
                  <span className="max-w-[160px] truncate">{course.title}</span>
                  <X size={13} />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={onClear} className="btn btn-ghost text-sm">
              Clear
            </button>
            <button
              type="button"
              disabled={selected.length < 2}
              className="btn btn-primary text-sm disabled:cursor-not-allowed disabled:opacity-50"
            >
              <GitCompare size={16} />
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}