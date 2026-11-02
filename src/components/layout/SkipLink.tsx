export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main"
      className="sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:inline-block focus:bg-black focus:px-4 focus:py-2 focus:text-beige"
    >
      {label}
    </a>
  );
}
