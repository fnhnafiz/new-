/* components/courses/FilterSidebar.jsx */
"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { filterOptions, flagOf, MAX_TUITION } from "@/components/Data/courses";

export default function FilterSidebar({ filters, setFilters, onClear, activeCount }) {
  const toggle = (key, value) =>
    setFilters((prev) => {
      const list = prev[key];
      return {
        ...prev,
        [key]: list.includes(value)
          ? list.filter((v) => v !== value)
          : [...list, value],
      };
    });

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-base font-semibold">Filters</h2>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-sm font-medium text-primary-dark hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      <Group title="Country" count={filters.countries.length}>
        {filterOptions.countries.map((country) => (
          <CheckRow
            key={country}
            label={country}
            prefix={flagOf(country)}
            checked={filters.countries.includes(country)}
            onChange={() => toggle("countries", country)}
          />
        ))}
      </Group>

      <Group title="Degree" count={filters.levels.length}>
        {filterOptions.levels.map((level) => (
          <CheckRow
            key={level}
            label={level}
            checked={filters.levels.includes(level)}
            onChange={() => toggle("levels", level)}
          />
        ))}
      </Group>

      <Group title="Subject" count={filters.subjects.length}>
        {filterOptions.subjects.map((subject) => (
          <CheckRow
            key={subject}
            label={subject}
            checked={filters.subjects.includes(subject)}
            onChange={() => toggle("subjects", subject)}
          />
        ))}
      </Group>

      <Group
        title="Tuition per year"
        count={filters.maxTuition < MAX_TUITION ? 1 : 0}
      >
        <div className="px-1 pt-1">
          <p className="text-sm font-medium text-dark">
            Up to ${filters.maxTuition.toLocaleString("en-US")}
          </p>
          <input
            type="range"
            min={0}
            max={MAX_TUITION}
            step={1000}
            value={filters.maxTuition}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                maxTuition: Number(e.target.value),
              }))
            }
            aria-label="Maximum tuition per year"
            className="mt-3 w-full accent-[var(--color-primary)]"
          />
          <div className="mt-1 flex justify-between text-xs">
            <span>Free</span>
            <span>${MAX_TUITION.toLocaleString("en-US")}+</span>
          </div>
        </div>
      </Group>

      <Group title="My IELTS score" count={filters.ielts ? 1 : 0}>
        <div className="flex flex-wrap gap-2 px-1 pt-1">
          {filterOptions.ieltsScores.map((score) => {
            const selected = filters.ielts === score;
            return (
              <button
                key={score}
                type="button"
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    ielts: selected ? null : score,
                  }))
                }
                className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${
                  selected
                    ? "border-primary bg-primary-light text-primary-dark"
                    : "border-border text-body hover:border-primary/50"
                }`}
              >
                {score.toFixed(1)}
              </button>
            );
          })}
        </div>
        <p className="px-1 pt-3 text-xs leading-relaxed">
          Shows only courses you already meet the English requirement for.
        </p>
      </Group>

      <Group title="Intake" count={filters.intakes.length}>
        {filterOptions.intakes.map((intake) => (
          <CheckRow
            key={intake}
            label={intake}
            checked={filters.intakes.includes(intake)}
            onChange={() => toggle("intakes", intake)}
          />
        ))}
      </Group>

      <div className="border-t border-border pt-4">
        <CheckRow
          label="Scholarship available"
          checked={filters.scholarshipOnly}
          onChange={() =>
            setFilters((prev) => ({
              ...prev,
              scholarshipOnly: !prev.scholarshipOnly,
            }))
          }
        />
      </div>
    </div>
  );
}

function Group({ title, count, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-t border-border py-3">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-2 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-dark">
          {title}
          {count > 0 && (
            <span className="rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
              {count}
            </span>
          )}
        </span>
        <ChevronDown
          size={16}
          className={`text-body transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* 0fr → 1fr, উচ্চতা না মেপেই মসৃণভাবে খোলে */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

function CheckRow({ label, prefix, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 rounded-lg px-1 py-2 text-sm transition-colors hover:text-dark">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border transition-colors ${
          checked ? "border-primary bg-primary text-white" : "border-border"
        }`}
      >
        {checked && <Check size={12} strokeWidth={3} />}
      </span>
      {prefix && <span aria-hidden="true">{prefix}</span>}
      {label}
    </label>
  );
}