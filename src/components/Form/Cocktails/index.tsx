"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { base, technique } from "@/libs/cocktailsParam";

type Inputs = {
  base: string | null;
  technique: string | null;
};

type props = {
  title: string;
  titleDesc: string;
  input: Inputs;
  setInput: React.Dispatch<React.SetStateAction<Inputs>>;
};

export function CocktailsForm(props: props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    props.setInput({
      base: data.base,
      technique: data.technique,
    });
  };

  return (
    <div>
      <div className="p-8">
        <h1 className="font-medium text-3xl">{props.title}</h1>
        <p className="text-gray-600 mt-6">{props.titleDesc}</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8 space-y-6">
            <div className="flex justify-start">
              <label className="text-sm text-gray-700 block mb-1 font-medium w-1/4 text-center">
                ベース
              </label>
              <select
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                {...register("base", {
                  required: "この項目は必須です。",
                })}
              >
                {base.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              {errors.base && (
                <p className="text-red-600">{errors.base.message}</p>
              )}
            </div>

            <div className="flex justify-start">
              <label className="text-sm text-gray-700 block mb-1 font-medium w-1/4 text-center">
                技法
              </label>
              <select
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                {...register("technique", {
                  required: "この項目は必須です。",
                })}
              >
                {technique.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
              {errors.technique && (
                <p className="text-red-600">{errors.technique.message}</p>
              )}
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              検索
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
