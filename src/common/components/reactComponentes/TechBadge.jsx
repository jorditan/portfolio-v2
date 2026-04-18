/**
 * TechBadge — small badge displaying a technology icon and label.
 *
 * Props:
 *   text  — label string
 *   icon  — React node (icon component)
 */
function TechBadge({ text, icon }) {
  return (
    <div className="ui-text-badge dark:bg-black/10 bg-gray-200 badge gap-2 dark:text-slate-50 text-gray-800 inline-flex items-center px-1.5 rounded py-1 dark:bg-gray-700 border border-gray-500 transition-all">
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </div>
  );
}

export default TechBadge;
