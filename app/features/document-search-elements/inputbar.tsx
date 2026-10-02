import { TextArea } from "@/components/base/textarea/textarea";

export function InputBar() {
    return (
      <TextArea className="text-black" isRequired placeholder="Write your question here" rows={1} />
  );
}

