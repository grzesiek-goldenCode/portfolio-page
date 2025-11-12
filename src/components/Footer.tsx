export default function Footer() {
  return (
    <div id="footer" className="mb-auto">
      <hr className="border-t border-gray-400 border-dotted opacity-60 mb-6 w-[60vw] mx-auto" />
      <div className="w-[60vw] flex justify-between items-center mt-10 mx-auto mb-5">
        <div className="text-sm">
          <p>@{new Date().getFullYear()} Zaprojektowane i zbudowane przez:</p>
          <p className="font-semibold">Grzesiek z GoldenCode </p>
        </div>
        <div className="flex gap-4">
          <a
            className="text-gray-600 hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">code</span>
          </a>
          <a
            className="text-gray-600 hover:text-primary transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
          </a>
        </div>
      </div>
    </div>
  );
}
