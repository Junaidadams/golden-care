import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import type { Faq, FaqAudience } from "../../constants";

interface Props {
  items: Faq[];
  limit?: number;
  mini?: boolean;
}

const tabs: { value: FaqAudience; label: string }[] = [
  { value: "client", label: "For me" },
  { value: "family", label: "For family" },
];

export default function FaqTabs({ items, limit, mini = false }: Props) {
  const [active, setActive] = useState<FaqAudience>("client");

  const visible = items
    .filter((faq) => faq.audience === active || faq.audience === "both")
    .sort(
      (a, b) => Number(b.audience === active) - Number(a.audience === active),
    )
    .slice(0, limit);

  return (
    <>
      <div
        role="tablist"
        className="mb-8 flex flex-wrap gap- bg-brand-50 w-fit rounded-xl"
      >
        {tabs.map((tab) => {
          const selected = active === tab.value;
          return (
            <button
              key={tab.value}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.value)}
              className={` px-4 py-2 text-sm font-semibold transition hover:cursor-pointer ${
                selected
                  ? "bg-brand-600 text-white shadow-sm"
                  : "border  bg-white  border-brand-500 text-brand-600"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-4">
        {visible.map((faq) => (
          <details
            key={faq.question}
            className="group overflow-hidden rounded-2xl border border-gray-300 bg-background-1 shadow-sm transition"
          >
            <summary
              className={`flex cursor-pointer list-none items-center justify-between gap-4 font-fraunces font-semibold text-gray-900 [&::-webkit-details-marker]:hidden ${
                mini ? "p-4 text-sm" : "p-5 text-lg"
              }`}
            >
              <span>{faq.question}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition duration-300 group-open:rotate-45">
                <FiPlus className="h-5 w-5" />
              </span>
            </summary>
            <p className="px-5 pb-5 text-base leading-relaxed text-gray-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </>
  );
}
