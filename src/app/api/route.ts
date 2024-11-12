import { NextRequest } from "next/server";

import { getItem } from "@/libs/getItem";

// データ受け取り用
type fetchDataError = {
  status: string;
  error_detail: string;
};

type fetchData = {
  status: string;
  total_pages: number;
  current_page: number;
  cocktails: DataItem[];
};

type DataItem = {
  cocktail_id: number;
  cocktail_name: string;
  cocktail_name_english: string;
  base_name: string;
  technique_name: string;
  taste_name: string;
  style_name: string;
  alcohol: number;
  tpo_name: string;
  glass_name: string;
  type_name: string;
  color_name: string;
  cocktail_digest: string;
  cocktail_desc: string;
  recipe_desc: string;
  recipes: Recipes[];
  tags: Tags[];
};

type Recipes = {
  ingredient_id: number;
  ingredient_name: string;
  amount: string;
  unit: string;
};

type Tags = {
  tag_id: number;
  tag_name: string;
};

// 返り値用
type res = {
  name: string;
  base: string;
  desc: string;
};

export async function GET(req: NextRequest) {
  const reqUrl = new URL(req.url).searchParams;
  let paramObject: { [key: string]: string } = {};
  reqUrl.forEach((value, key) => {
    if (value !== "999") {
      paramObject = { ...paramObject, [key]: value };
    }
  });

  const apiParam = new URLSearchParams(paramObject);

  try {
    const dataItem = await getItem(
      "https://cocktail-f.com/api/v1/cocktails?" + apiParam
    );
    if (dataItem.message !== 200) {
      throw new Error(dataItem.result);
    }

    if (dataItem.result.status !== "0000") {
      const errorData: fetchDataError = dataItem.result;
      throw new Error(errorData.error_detail);
    }
    const fetchData: fetchData = dataItem.result;

    // データ成型
    const data: Array<res> = [];
    fetchData.cocktails.forEach((element, index) => {
      data[index] = {
        name: element.cocktail_name,
        base: element.base_name,
        desc: element.cocktail_desc,
      };
    });

    return Response.json({ message: 200, result: data });
  } catch (e: unknown) {
    if (e instanceof Error) {
      return Response.json({ message: 400, result: e.message });
    } else {
      return Response.json({ message: 400, result: "不明なエラー" });
    }
  }
}
