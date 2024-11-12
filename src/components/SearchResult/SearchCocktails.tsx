"use client";

import { CocktailsSearch } from "./Cocktails";

type Inputs = {
  base: string | null;
  technique: string | null;
};

type props = {
  input: Inputs;
  setInput: React.Dispatch<React.SetStateAction<Inputs>>;
};

export function SearchList(props: props) {
  try {
    if (props.input.base === null || props.input.technique === null) {
      return (
        <div className="w-2/4 m-auto text-center">
          検索項目を入力してください。
        </div>
      );
    }

    return (
      <CocktailsSearch
        base={props.input.base}
        technique={props.input.technique}
      />
    );
  } catch (error) {
    if (error instanceof Error) {
      return (
        <div>未知のエラーが発生しました。エラーメッセージ：{error.message}</div>
      );
    }
  }
}
