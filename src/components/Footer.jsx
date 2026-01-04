export default function Footer() {
  return (
    <footer
      className="
        text-center py-10 mt-20
        bg-white dark:bg-[#0B0B0D]
        text-gray-600 dark:text-muted
        border-t border-gray-200 dark:border-border
      "
    >
      © {new Date().getFullYear()} Khushnawaj — Built with React
    </footer>
  );
}
