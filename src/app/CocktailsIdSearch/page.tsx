"use client";
import { useState } from "react";

import { CocktailsForm } from "@/components/Form/Cocktails";
import { Header } from "@/components/Header";
import { SearchList } from "@/components/SearchResult/SearchCocktails";

type Inputs = {
  base: string | null;
  technique: string | null;
};

export default function CocktailsSearch() {
  const [input, setInput] = useState<Inputs>({
    base: null,
    technique: null,
  });

  return (
    <main className="py-5">
      <Header />
      <CocktailsForm
        title="カクテル検索"
        titleDesc="指定した項目にあったカクテルを検索することができます。"
        input={input}
        setInput={setInput}
      />
      <SearchList input={input} setInput={setInput} />
    </main>
  );
}
