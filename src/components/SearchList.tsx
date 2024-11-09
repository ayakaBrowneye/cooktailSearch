"use client";
import useSWR from "swr";

type Inputs = {
  text: string;
  base: string;
  technique: string;
  taste: string;
  style: string;
  tag: string;
};

type props = {
  input: Inputs;
  setInput: React.Dispatch<React.SetStateAction<Inputs>>;
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

export function SearchList(props: props) {
  // ルートAPIへ送信するパラム
  const param = new URLSearchParams({
    base: props.input.base,
    technique: props.input.technique,
    taste: props.input.taste,
    style: props.input.style,
    tag: props.input.tag,
  });

  const { data, error, isLoading } = useSWR<getData>(
    "/api?" + param.toString(),
    fetcher
  );

  if (isLoading)
    return <div className="w-2/5 mx-auto text-center">Loading...</div>;
  if (error)
    return (
      <div className="w-2/5 mx-auto text-center">Data acquisition failed.</div>
    );
  if (data) {
    if (data.message === 200 && data.result.length !== 0) {
      return (
        <ul className="space-y-1 mx-auto w-9/12">
          {data.result.map((item) => {
            return (
              <li key={item.name}>
                <div
                  key={item.name}
                  className="border-gray-500-800 border-solid border max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
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
      );
    } else if (data.message === 200 && data.result.length === 0) {
      return (
        <div className="w-2/5 mx-auto text-center">
          ヒットするものはありませんでした。
        </div>
      );
    } else if (data.message === 400) {
      return <div className="w-2/5 mx-auto text-center">{data.result}</div>;
    }
  }
}
