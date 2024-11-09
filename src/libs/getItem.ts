// データ取得用関数
export const getItem = async (api: string) => {
  try {
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error(`レスポンスステータス: ${res.status}`);
    }
    const resData = await res.json();
    return {
      message: 200,
      result: resData,
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      return {
        message: 400,
        result: e.message,
      };
    } else {
      return { message: 400, result: "不明なエラー" };
    }
  }
};
