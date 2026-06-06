const paths = {
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="11" x2="12" y2="16" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9a2.5 2.5 0 015 0c0 1.5-2.5 2-2.5 3.5" />
      <line x1="12" y1="16.5" x2="12" y2="16.5" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.38 8.38 0 01-9 8.5 8.5 8.5 0 01-3.8-.9L3 20l1.9-4.2A8.38 8.38 0 0121 11.5z" />
    </>
  ),
};

export default function NavIcon({ name, className = "" }) {
  return (
    <svg
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
      {paths[name] || null}
    </svg>
  );
}
