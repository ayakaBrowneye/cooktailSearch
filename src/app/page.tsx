import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            カクテル検索
          </h1>

          <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
            このサイトでは、ジャンル別のカクテル検索を行うことができます。
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
            <Link href="/CocktailsSearch">
              <div
                className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{
                  backgroundImage: "url('/image/topImage_left.png')",
                }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    カクテルジャンル検索
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                    ベース、作り方などからカクテルを検索することができます。
                  </p>
                </div>
              </div>
            </Link>
            {/* <Link href="/CocktailsIdSearch"> */}
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage: "url('/image/topImage_right.png')",
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  カクテルID検索
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                  coming soon
                </p>
              </div>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
