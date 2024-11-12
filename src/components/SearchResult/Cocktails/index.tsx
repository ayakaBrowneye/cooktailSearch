"use client";
import useSWR from "swr";

import { Skeleton } from "@/components/Skeleton";

type props = {
  base: string;
  technique: string;
};

// 返り値
type res = {
  name: string;
  base: string;
  desc: string;
};

type SuccessResponse = {
  message: 200;
  result: res[];
};

type ErrorResponse = {
  message: 400;
  result: string;
};

type getData = SuccessResponse | ErrorResponse;

// fetcher関数
const fetcher = async (key: string) => {
  return await fetch(key).then((res) => res.json());
};

export function CocktailsSearch(props: props) {
  // ルートAPIへ送信するパラム
  const param = new URLSearchParams({
    base: props.base,
    technique: props.technique,
  });

  const { data, error, isLoading } = useSWR<getData>(
    "/api?" + param.toString(),
    fetcher
  );

  if (isLoading) {
    return (
      <ul className="space-y-1 w-2/3 m-auto">
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index}>
            <Skeleton />
          </li>
        ))}
      </ul>
    );
  }
  if (error) return <div>Data acquisition failed.</div>;
  if (data) {
    if (data.message === 200) {
      return (
        <div className="py-4">
          <ul className="space-y-1 w-2/3 m-auto">
            {data.result.map((item) => {
              return (
                <li key={item.name}>
                  <div
                    key={item.name}
                    className="border-gray-500-800 border-solid border w-auto px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
                  >
                    <div className="mt-2">
                      <div className="text-xl font-bold text-gray-700 dark:text-white ">
                        {item.name}
                      </div>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-start mt-4 space-x-2">
                      <p className="bg-blue-500 text-white dark:text-blue-400 p-1.5 rounded-lg">
                        BASE
                      </p>

                      <div className="flex items-center">
                        <p className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                          {item.base}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else if (data.message === 400) {
      return <div>{data.result}</div>;
    }
  }
}
