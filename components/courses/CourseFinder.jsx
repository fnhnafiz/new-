/* components/courses/CourseFinder.jsx */
"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { courses, MAX_TUITION } from "@/components/Data/courses";
import FilterSidebar from "./FilterSidebar";
import SearchSortBar from "./SearchSortBar";
import CourseCard from "./CourseCard";
import CourseSkeleton from "./CourseSkeleton";
import EmptyState from "./EmptyState";
import CompareBar from "./CompareBar";

const MAX_COMPARE = 3;

const emptyFilters = {
  countries: [],
  levels: [],
  subjects: [],
  intakes: [],
  maxTuition: MAX_TUITION,
  ielts: null,
  scholarshipOnly: false,
};

export default function CourseFinder() {
  const [filters, setFilters] = useState(emptyFilters);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("match");
  const [compare, setCompare] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // ব্যাকএন্ড এলে এই টাইমারের জায়গায় আসল fetch বসবে
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const activeCount =
    filters.countries.length +
    filters.levels.length +
    filters.subjects.length +
    filters.intakes.length +
    (filters.maxTuition < MAX_TUITION ? 1 : 0) +
    (filters.ielts ? 1 : 0) +
    (filters.scholarshipOnly ? 1 : 0);

  /* ফিল্টার আর sort একসাথে useMemo তে, নাহলে প্রতিটা রেন্ডারে পুরো লিস্ট ঘুরত */
  const results = useMemo(() => {
    const term = query.trim().toLowerCase();

    const filtered = courses.filter((course) => {
      if (
        filters.countries.length &&
        !filters.countries.includes(course.country)
      )
        return false;
      if (filters.levels.length && !filters.levels.includes(course.level))
        return false;
      if (filters.subjects.length && !filters.subjects.includes(course.subject))
        return false;
      if (
        filters.intakes.length &&
        !course.intakes.some((i) => filters.intakes.includes(i))
      )
        return false;
      if (course.tuitionUSD > filters.maxTuition) return false;
      if (filters.ielts && course.ielts > filters.ielts) return false;
      if (filters.scholarshipOnly && !course.scholarship) return false;

      if (term) {
        const haystack =
          `${course.title} ${course.university} ${course.subject} ${course.country}`.toLowerCase();
        if (!haystack.includes(term)) return false;
      }

      return true;
    });

    const sorters = {
      match: (a, b) => b.match - a.match,
      "tuition-low": (a, b) => a.tuitionUSD - b.tuitionUSD,
      "tuition-high": (a, b) => b.tuitionUSD - a.tuitionUSD,
      "ielts-low": (a, b) => a.ielts - b.ielts,
      name: (a, b) => a.title.localeCompare(b.title),
    };

    return [...filtered].sort(sorters[sort]);
  }, [filters, query, sort]);

  const clearFilters = () => {
    setFilters(emptyFilters);
    setQuery("");
  };

  const toggleCompare = (course) => {
    setCompare((prev) => {
      const exists = prev.some((c) => c.id === course.id);
      if (exists) return prev.filter((c) => c.id !== course.id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, course];
    });
  };

  const sidebar = (
    <FilterSidebar
      filters={filters}
      setFilters={setFilters}
      onClear={clearFilters}
      activeCount={activeCount}
    />
  );

  return (
    <section className="bg-surface pb-24 pt-10 lg:pb-32">
      <div className="wrapper grid gap-8 px-5 lg:grid-cols-[280px_1fr] lg:gap-10 lg:px-8">
        {/* ---------- desktop sidebar ---------- */}
        <aside className="hidden lg:block">
          <div
            data-lenis-prevent
            className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-white p-5"
          >
            {sidebar}
          </div>
        </aside>

        {/* ---------- results ---------- */}
        <div>
          <SearchSortBar
            query={query}
            setQuery={setQuery}
            sort={sort}
            setSort={setSort}
            total={results.length}
            loading={loading}
            activeCount={activeCount}
            onOpenFilters={() => setDrawerOpen(true)}
          />

          <div className="mt-6">
            {loading ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {[0, 1, 2, 3].map((i) => (
                  <CourseSkeleton key={i} />
                ))}
              </div>
            ) : results.length === 0 ? (
              <EmptyState onClear={clearFilters} />
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {results.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    compared={compare.some((c) => c.id === course.id)}
                    disabled={compare.length >= MAX_COMPARE}
                    onCompare={toggleCompare}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ---------- mobile filter drawer ---------- */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          drawerOpen ? "" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-dark/40 transition-opacity duration-300 ${
            drawerOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filters"
          className={`absolute inset-y-0 left-0 flex w-[88%] max-w-sm flex-col bg-white transition-transform duration-300 ease-out ${
            drawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5">
            <p className="text-base font-semibold">Filters</p>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close filters"
              className="-mr-2 p-2 text-dark"
            >
              <X size={22} />
            </button>
          </div>

          <div data-lenis-prevent className="flex-1 overflow-y-auto px-5">
            {sidebar}
          </div>

          <div className="border-t border-border p-4">
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="btn btn-primary w-full"
            >
              Show {results.length}{" "}
              {results.length === 1 ? "course" : "courses"}
            </button>
          </div>
        </div>
      </div>

      <CompareBar
        selected={compare}
        max={MAX_COMPARE}
        onRemove={toggleCompare}
        onClear={() => setCompare([])}
      />
    </section>
  );
}
