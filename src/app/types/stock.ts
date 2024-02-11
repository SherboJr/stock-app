export interface Stock {
  queryCount: number;
  resultsCount: number;
  adjusted: boolean;
  results: [
    {
      T: string;
      v: number;
      vw: number;
      o: number;
      c: number;
      h: number;
      l: number;
      t: number;
      n: number;
    }
  ];
}
