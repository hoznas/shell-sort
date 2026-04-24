/**
 * シェルソート：シンプル実装
 */
export const shellSort = (list: number[]): number[] => {
  const n = list.length;

  // 1. 間隔（gap）のリストを作成する
  // 一般的な「半分ずつにしていく」手法を採用
  const gapList = getGapList(n);

  // 2. 各間隔ごとに「挿入ソート」を適用する
  gapList.forEach((gap) => {
    gapInsertionSort(list, gap);
  });

  return list;
};

/**
 * 間隔リストを作成する関数
 * 配列の長さを 2 で割り続けて 1 になるまでの数列を生成
 */
const getGapList = (n: number): number[] => {
  const gaps: number[] = [];
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    gaps.push(gap);
  }
  return gaps;
};

/**
 * 特定の間隔（gap）で挿入ソートを行う関数
 */
const gapInsertionSort = (list: number[], gap: number): void => {
  for (let i = gap; i < list.length; i++) {
    const temp = list[i];
    let j = i;

    // gap分だけ離れた要素と比較して、必要なら後ろにずらす
    while (j >= gap && list[j - gap] > temp) {
      list[j] = list[j - gap];
      j -= gap;
    }
    // 空いた場所に現在の値を挿入
    list[j] = temp;
  }
};

