import { Stock } from "./types/stock";
import React from "react";

export function StockContainer({ stock }: { stock: Stock }) {
  return <div>{stock.results[0].T}</div>;
}
