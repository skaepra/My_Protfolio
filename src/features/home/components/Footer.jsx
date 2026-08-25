

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.container}>
        <div className={styles.bottomSection}>
          {/* Copyright & Info */}
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Modern Portfolio. Built with React & Tailwind CSS.
          </p>

          {/* Social Links & Navigation */}
          <div className={styles.links}>
            <a
              href="https://github.com/skaepra"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="mailto:eng.ahmad.alshaar@gmail.com"
              className={styles.linkItem}
            >
              Email
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/ahmad-al-shaar-b699aa427"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkItem}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// التنسيقات المتناسقة مع تصميم المحفظة
// التنسيقات المعدلة للـ Footer
const styles = {
  footerWrapper: "bg-slate-50 dark:bg-zinc-900 border-t border-zinc-300 dark:border-zinc-800 text-zinc-400 transition-colors duration-200 mt-auto",
  container: "mx-auto max-w-5xl px-6 py-6 xl:px-0",
  bottomSection: "flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-400 gap-4",
  copyright: "text-center sm:text-left text-zinc-600 dark:text-zinc-400 font-normal",
  links: "flex gap-3 items-center text-zinc-600 dark:text-zinc-400 font-medium",
  linkItem: "hover:text-blue-600 dark:hover:text-red-400 transition-colors cursor-pointer",
};