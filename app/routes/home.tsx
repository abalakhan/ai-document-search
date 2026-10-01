import type { Route } from "./+types/home";
import { Nav } from "../components/nav";
import { DocumentSearch } from "../features/document-search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Document Search" },
    { name: "description", content: "Welcome to AI Document Search!" },
  ];
}

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Nav />
      <main id="main-content" className="flex flex-1 flex-col">
        <DocumentSearch />
      </main>
    </div>
  );
}
