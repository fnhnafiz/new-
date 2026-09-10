/* components/courses/SearchSortBar.jsx */
"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { sortOptions } from "@/components/Data/courses";

export default function SearchSortBar({
  query,
  setQuery,
  sort,
  setSort,
  total,
  loading,
  onOpenFilters,
  activeCount,
}) {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body/60"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a course, subject or university"
            aria-label="Search courses"
            className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-10 text-sm text-dark placeholder:text-body/70 focus:border-primary focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-body/60 hover:text-dark"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* মোবাইলে ফিল্টার drawer খোলার বাটন */}
        <button
          type="button"
          onClick={onOpenFilters}
          className="relative flex shrink-0 items-center gap-2 rounded-xl border border-border bg-white px-4 text-sm font-medium text-dark lg:hidden"
        >
          <SlidersHorizontal size={16} />
          Filters
          {activeCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
              {activeCount}
            </span>
          )}
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm">
          {loading ? (
            "Searching courses"
          ) : (
            <>
              <span className="font-semibold text-dark">{total}</span>{" "}
              {total === 1 ? "course" : "courses"} found
            </>
          )}
        </p>

        <label className="flex items-center gap-2 text-sm">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort courses"
            className="rounded-lg border border-border bg-white px-3 py-2 text-sm font-medium text-dark focus:border-primary focus:outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}