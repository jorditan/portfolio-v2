function Badge(icon, texto) {
    return (
      <span class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 ">
      {icon}
      {texto}
      </span>
    );
}

export { Badge }
