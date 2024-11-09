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
  } catch (error: unknown) {
    return {
      message: 400,
      result: error.message,
    };
  }
};
