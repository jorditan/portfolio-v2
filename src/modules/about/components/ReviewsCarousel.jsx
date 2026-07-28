import React, { useState } from "react";

function Calendar({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ReviewsCarousel({ reviews = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalReviews = reviews.length;

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalReviews);
  };

  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="relative flex w-full flex-col gap-4">
      <div className="w-full">
        {reviews.map((review, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={`${review.name}-${review.date}`}
              aria-hidden={!isActive}
              className={isActive ? "block w-full" : "hidden"}
            >
              <div className="relative overflow-hidden p-4 sm:p-6 group flex flex-col rounded-xl border border-slate-200 bg-gray-100 hover:shadow-slate-300/70 dark:border-white/10 dark:bg-gray-800 dark:shadow-black/30 dark:hover:border-slate-50 dark:hover:shadow-black/40 shadow-md shadow-slate-300/40  backdrop-blur-sm transition-all duration-300">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-slate-300 dark:border-slate-700 bg-gray-200 dark:bg-slate-800">
                      <img
                        className="h-full w-full rounded-full object-cover"
                        src={review.avatar}
                        alt={`Avatar de ${review.name}`}
                        width={48}
                        height={48}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex flex-col">
                      <a
                        href={review.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex flex-wrap items-center gap-2 text-base font-bold text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                      >
                        <span>{review.name}</span>
                        <span className="text-sm font-medium text-sky-600 dark:text-sky-300">
                          ({review.role})
                        </span>
                      </a>
                      <small className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                        Trabajamos juntos en: <strong className="font-semibold text-slate-700 dark:text-slate-300">{review.job}</strong>
                      </small>
                    </div>
                  </div>

                  <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                    "{review.message}"
                  </p>

                  <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60 dark:border-white/10">
                    <Calendar className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-4 px-1">
        <div className="flex items-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={`indicator-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir a reseña ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                ? "w-8 bg-sky-500 dark:bg-sky-300"
                : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Ver reseña anterior"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300/80 bg-gray-100 text-slate-700 transition hover:bg-slate-200 hover:text-sky-600 dark:border-white/15 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Ver siguiente reseña"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300/80 bg-gray-100 text-slate-700 transition hover:bg-slate-200 hover:text-sky-600 dark:border-white/15 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewsCarousel;
