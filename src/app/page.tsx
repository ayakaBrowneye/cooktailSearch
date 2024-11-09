"use client";
import { Form } from "@/components/Form";
import { useState } from "react";
import { SearchList } from "@/components/SearchList";

type Inputs = {
  text: string;
  base: string;
  technique: string;
  taste: string;
  style: string;
  tag: string;
};

export default function Home() {
  const [input, setInput] = useState<Inputs>({
    text: "",
    base: "",
    technique: "",
    taste: "",
    style: "",
    tag: "",
  });

  return (
    <main className="py-5">
      <Form
        title="カクテル検索"
        titleDesc="指定した項目にあったカクテルを検索することができます。"
        input={input}
        setInput={setInput}
      />
      <SearchList input={input} setInput={setInput} />
    </main>
  );
}
