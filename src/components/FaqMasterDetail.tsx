import { useEffect, useState } from "react";
import type { Faq, FaqAudience } from "../../constants";

interface Props {
  items: Faq[];
}

const tabs: { value: FaqAudience; label: string }[] = [
  { value: "client", label: "For me" },
  { value: "family", label: "For family" },
];

export default function FaqMasterDetail({ items }: Props) {
  const [active, setActive] = useState<FaqAudience>("client");
  const [selected, setSelected] = useState(0);

  const visible = items
    .filter((faq) => faq.audience === active || faq.audience === "both")
    .sort(
      (a, b) => Number(b.audience === active) - Number(a.audience === active),
    );

  useEffect(() => {
    setSelected(0);
  }, [active]);

  const current = visible[selected];

  return (
    <>
      <div
        role="tablist"
        className="mb-10 flex flex-wrap gap- bg-brand-50 w-fit rounded-xl"
      >
        {tabs.map((tab) => {
          const selectedTab = active === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={selectedTab}
              onClick={() => setActive(tab.value)}
              className={` px-4 py-2 text-sm font-semibold transition hover:cursor-pointer ${
                selectedTab
                  ? "bg-brand-600 text-white shadow-sm"
                  : "border border-gray-300 bg-white text-gray-700 hover:border-brand-500 hover:text-brand-600"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Answer panel */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-fraunces text-sm font-semibold uppercase tracking-wide text-gray-500">
            Answer
          </p>
          <div className="mt-4">
            {current && (
              <div>
                <h3 className="font-fraunces text-2xl font-bold text-gray-900 md:text-3xl">
                  {current.question}
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                  {current.answer}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Question list */}
        <div>
          <p className="font-fraunces text-sm font-semibold uppercase tracking-wide text-gray-500">
            Questions
          </p>
          <ul className="mt-4 max-h-[32rem] space-y-3 overflow-y-auto pr-2">
            {visible.map((faq, index) => {
              const isSelected = index === selected;
              return (
                <li key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setSelected(index)}
                    aria-pressed={isSelected}
                    className={`flex w-full items-center justify-between gap-4 rounded-xl border p-5 text-left transition ${
                      isSelected
                        ? "border-brand-600 bg-brand-600 text-white"
                        : "border-gray-300 bg-white text-gray-900 hover:border-brand-500"
                    }`}
                  >
                    <span className="font-fraunces text-lg font-semibold">
                      {faq.question}
                    </span>
                    <svg
                      className="h-5 w-5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M9 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
