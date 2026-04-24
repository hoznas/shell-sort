// 実行: npm run dev
import { shellSort } from "./shell-sort";

const data = [9, 5, 3, 1, 8, 7, 2, 4];
console.log("ソート前:", data);
const sortedData = shellSort(data);
console.log("ソート後:", sortedData);
