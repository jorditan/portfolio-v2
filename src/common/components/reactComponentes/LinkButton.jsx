/**
 * LinkButton — anchor styled as a button.
 *
 * Props:
 *   href      — destination URL
 *   target    — link target (default "_blank")
 *   rel       — rel attribute
 *   variant   — "primary" (default, dark/filled) | "ghost" (outlined)
 *   className — additional classes
 *   children  — content
 */
function LinkButton({
  href,
  target = "_blank",
  rel,
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  const base =
    "gap-2 text-[12px] sm:text-sm inline-flex items-center px-3 py-2 font-medium text-center rounded-lg transition-all";

  const variants = {
    primary:
      "border border-gray-700 bg-gray-700 dark:bg-gray-900 text-white hover:border-gray-500 hover:bg-gray-800 dark:hover:bg-gray-950",
    ghost:
      "border border-gray-500 dark:border-white/30 dark:bg-black/10 text-slate-900 dark:text-slate-50 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-600",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

export default LinkButton;
