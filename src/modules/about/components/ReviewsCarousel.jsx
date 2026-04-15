import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { startTransition, useState } from "react";

function ReviewsCarousel({ reviews = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const totalReviews = reviews.length;

  const goToReview = (index) => {
    startTransition(() => {
      setActiveIndex(index);
    });
  };

  const goToPrevious = () => {
    goToReview((activeIndex - 1 + totalReviews) % totalReviews);
  };

  const goToNext = () => {
    goToReview((activeIndex + 1) % totalReviews);
  };



  return (
    <div className="relative flex w-full flex-col gap-4">
      <div className="relative overflow-hidden  ">
        {reviews.map((review, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={`${review.name}-${review.date}`}
              aria-hidden={!isActive}
              className={`transition-all duration-500 ease-out ${isActive
                ? "relative translate-x-0 opacity-100"
                : "pointer-events-none absolute inset-0 translate-x-6 opacity-0"
                }`}
            >
              <div className="relative overflow-hidden p-2 sm:p-4">
                <div className="pointer-events-none absolute inset-0 " />

                <div className="relative z-10 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-13 w-13 items-center justify-center overflow-hidden rounded-full border border-gray-300/80 bg-gray-800 p-1.5 text-sm font-semibold text-white">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={review.avatar}
                              alt={`Avatar de ${review.name}`}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              onError={() => {
                                setImageErrors((current) => ({
                                  ...current,
                                  [review.avatar]: true,
                                }));
                              }}
                            />
                        </div>

                      <div className="flex flex-col">
                        <div className="flex ">
                          <a href={review.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-900 dark:text-slate-100 sm:text-base hover:underline focus-visible:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 dark:focus-visible:ring-sky-300 hover:scale-105 transition-transform duration-200 gap-0.5 sm:gap-2 items-center flex flex-col sm:flex-row justify-start mb-1">
                            <span className="w-fit">
                              {review.name}
                            </span>
                            <span className="text-xs font-medium text-sky-600 dark:text-sky-300 w-full sm:w-fit">
                              {review.role}
                            </span>

                          </a>
                        </div>
                        <small className="dark:text-gray-300"> @{review.job}</small>
                      </div>
                    </div>

                  </div>

                  <div className="flex gap-4 flex-col">
                    <p className="whitespace-pre-line text-sm italic leading-2 text-slate-700 dark:text-slate-300 sm:text-[15px]">
                      "{review.message}"
                    </p>

                    <small className="text-sm text-slate-500 dark:text-slate-400">
                      {review.date}
                    </small>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={`${review.name}-indicator`}
              type="button"
              onClick={() => goToReview(index)}
              aria-label={`Ir a la reseña de ${review.name}`}
              aria-current={index === activeIndex}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                ? "w-8 bg-sky-500 dark:bg-sky-300"
                : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500"
                }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Ver reseña anterior"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-50 dark:hover:text-slate-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Ver siguiente reseña"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-50 dark:hover:text-slate-50"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewsCarousel;
