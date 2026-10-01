import { Greeter } from "./document-search-elements/greeter"
import { Chat } from "./document-search-elements/chat";

export function DocumentSearch() {
  return (
    <section
      aria-labelledby="document-search-heading"
      className="flex flex-1 flex-col bg-white border-2 outline-black mx-auto
      p-1">
      <Greeter />
      <Chat />
    </section>
  );
}