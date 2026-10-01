export function Nav() {
  return (
    <nav className="h-14 w-full shrink-0 border-b border-default bg-linear-to-bl from-violet-500 to-fuchsia-500 text-gray-900">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between p-6">
        <a href="/" className="flex items-center">
          <span className="text-xl font-semibold whitespace-nowrap px-6">
            AI Document Search
          </span>
        </a>
      </div>
    </nav>
  );
}