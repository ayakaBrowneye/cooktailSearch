// カクテル検索APIのリクエストパラメータ
// 「特に指定しない」の場合は999を送信。
// 外部APIからデータを取得しているapi/route.tsで取捨選択をしている
// id は、外部APIへ送信する情報
// 【参照】https://cocktail-f.com/api

// カクテルのベース
export const base: { id: number; name: string }[] = [
  { id: 999, name: "特に指定しない" },
  { id: 0, name: "ノンアルコール" },
  { id: 1, name: "ジン" },
  { id: 2, name: "ウォッカ" },
  { id: 3, name: "テキーラ" },
  { id: 4, name: "ラム" },
  { id: 5, name: "ウイスキー" },
  { id: 6, name: "ブランデー" },
  { id: 7, name: "リキュール" },
  { id: 8, name: "ワイン" },
  { id: 9, name: "ビール" },
  { id: 10, name: "日本酒" },
];

// カクテルの技法
export const technique: { id: number; name: string }[] = [
  { id: 999, name: "特に指定しない" },
  { id: 1, name: "ビルド" },
  { id: 2, name: "ステア" },
  { id: 3, name: "シェイク" },
];

// カクテルの味わい
export const taste: { id: number; name: string }[] = [
  { id: 999, name: "特に指定しない" },
  { id: 1, name: "甘口" },
  { id: 2, name: "中甘口" },
  { id: 3, name: "中口" },
  { id: 4, name: "中辛口" },
  { id: 5, name: "辛口" },
];

// カクテルのスタイル
export const style: { id: number; name: string }[] = [
  { id: 999, name: "特に指定しない" },
  { id: 1, name: "ショート" },
  { id: 2, name: "ロング" },
];

// カクテルのタグ
export const tag: { id: number; name: string }[] = [
  { id: 999, name: "特に指定しない" },
  { id: 1, name: "スタンダード" },
  { id: 2, name: "オリジナル" },
  { id: 3, name: "シンプル" },
  { id: 4, name: "さっぱり" },
  { id: 5, name: "爽やか" },
  { id: 6, name: "まろやか" },
  { id: 7, name: "キレがある" },
  { id: 8, name: "酸っぱい" },
  { id: 9, name: "濃厚" },
  { id: 10, name: "強い" },
  { id: 11, name: "飲みやすい" },
  { id: 12, name: "酔い覚まし" },
  { id: 13, name: "楽しい" },
  { id: 14, name: "美しい" },
  { id: 15, name: "ホット" },
  { id: 16, name: "トロピカル" },
  { id: 17, name: "エレガント" },
  { id: 18, name: "男らしい" },
  { id: 19, name: "女性におすすめ" },
  { id: 20, name: "歴史ある" },
  { id: 21, name: "プース・カフェ" },
  { id: 22, name: "料理に合う" },
  { id: 23, name: "VA-11 Hall-A" },
  { id: 24, name: "CyberPunk 2077" },
];
