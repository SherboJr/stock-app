// pages/StocksPage.tsx
"use client";
import { useState, useEffect } from "react";
import Sheet from "react-modal-sheet";
import SplashScreen from "./(Screens)/Splash";
import React from "react";
import { StockContainer } from "/Next Nasdaq/stock-app/src/app/stockContainer";

const Home: React.FC = () => {
  const [selectedStock, setSelectedStock] = useState<{
    ticker: string;
    shares: string;
    open: string;
    close: string;
    high: string;
    low: string;
  } | null>(null);
  const [stockData, setStockData] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [isOpen, setOpen] = useState(false);

  const handleStockClick = (stock: (typeof stockData)[0]) => {
    setOpen(true);
    setSelectedStock({
      ticker: stock.T,
      shares: stock.v,
      open: stock.o,
      close: stock.c,
      high: stock.h,
      low: stock.l
    });
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=NZqSkFngRrHtDAM4CO22GEvpby_YyhCp"
        );
        const data = await response.json();
        console.log("Fetched Data:", data); // Log the fetched data to the console
        setStockData(data.results || []); // Initialize with an empty array if data.results is undefined
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  const [filteredStocks, setFilteredStocks] =
    useState<typeof stockData>(stockData);
  useEffect(() => {
    const filteredResults = stockData.filter((stock) =>
      stock.T.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredStocks(filteredResults);
  }, [searchTerm]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className=" mx-3">
          <h1 className=" font-bold text-4xl mt-3">Stocks Page</h1>

          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 p-3 mb-5 rounded-full w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <ul>
            {filteredStocks.map((stock: any, index: number) => (
              <div
                key={index}
                className="bg-gray-200 p-4 rounded-md shadow-md cursor-pointer my-3"
                onClick={() => handleStockClick(stock)}
              >
                <h2 className="text-lg font-semibold mb-2">{stock.T}</h2>
              </div>
            ))}
          </ul>

          <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container>
              <Sheet.Header />
              <h1 className=" self-center font-bold text-4xl mt-3 mb-5">
                {selectedStock?.ticker}
              </h1>

              <Sheet.Content>
                <div className=" flex flex-col">
                  <div className="flex my-5 justify-around">
                    <p className=" text-2xl font-semibold">Shares:</p>
                    <p className="text-2xl font-bold ">
                      {selectedStock?.shares}
                    </p>
                  </div>

                  <div className="flex my-5 justify-around">
                    <p className=" text-2xl font-semibold">Open Price:</p>
                    <p className="text-2xl font-bold ">{selectedStock?.open}</p>
                  </div>
                  <div className="flex my-5 justify-around">
                    <p className=" text-2xl font-semibold">Close Price:</p>
                    <p className="text-2xl font-bold">{selectedStock?.close}</p>
                  </div>
                  <div className="flex my-5 justify-around">
                    <p className=" text-2xl font-semibold">Highest Price:</p>
                    <p className="text-2xl font-bold ">{selectedStock?.high}</p>
                  </div>
                  <div className="flex my-5 justify-around">
                    <p className=" text-2xl font-semibold">Lowest Price:</p>
                    <p className="text-2xl font-bold ">{selectedStock?.low}</p>
                  </div>
                  <img
                    src="/pepe.jpg"
                    alt="pepe"
                    className=" h-60 w-60 self-center my-5"
                  />
                </div>
              </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
          </Sheet>
        </div>
      )}
    </div>
  );
};

export default Home;
