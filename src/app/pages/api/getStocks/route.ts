export async function GET() {
  try {
    const res = await fetch(
      "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=" +
        process.env.POLYGON_API_KEY
    );
    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw Error;
  }
}
