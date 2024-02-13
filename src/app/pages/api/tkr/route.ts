import type { InferGetStaticPropsType, GetStaticProps } from "next";
export async function GET() {
  try {
    const res = await fetch(
      "https://api.polygon.io/v3/reference/tickers/AAPL?apiKey=" +
        process.env.POLYGON_API_KEY
    );
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw Error;
  }
}
