// components/StockDetails.tsx

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

interface StockDetailsProps {
  stockData: {
    logoUrl?: string;
    ticker: string;
    closePrice: number;
    priceChangePercentage: number;
    description: string;
    statistics: {
      close: number;
      open: number;
      high: number;
      low: number;
    };
    website?: string;
  };
}

const StockDetails: React.FC<StockDetailsProps> = ({ stockData }) => {
  const router = useRouter();

  // Unique device ID generation
  useEffect(() => {
    const deviceId = uuidv4();
    // Send the deviceId to the backend API

    console.log("Device ID:", deviceId);
  }, []);

  const handleClose = () => {
    // Navigate back to the previous page
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        {/* Stock Logo or Initials */}
        <div className="flex items-center mb-4">
          {stockData.logoUrl ? (
            <img
              src={stockData.logoUrl}
              alt="Stock Logo"
              className="w-8 h-8 mr-2"
            />
          ) : (
            <div className="w-8 h-8 bg-gray-300 flex items-center justify-center rounded-full mr-2">
              {stockData.ticker.charAt(0)}
            </div>
          )}
          <h2 className="text-lg font-semibold">{stockData.ticker}</h2>
        </div>

        {/* Stock Close Price and Price Change Percentage */}
        <div className="mb-4">
          <p className="text-xl font-semibold">{`$${stockData.closePrice.toFixed(
            2
          )}`}</p>
          <p
            className={`text-sm ${
              stockData.priceChangePercentage > 0
                ? "text-green-500"
                : stockData.priceChangePercentage < 0
                ? "text-red-500"
                : "text-gray-500"
            }`}
          >
            {`${
              stockData.priceChangePercentage > 0 ? "+" : ""
            }${stockData.priceChangePercentage.toFixed(2)}%`}
          </p>
        </div>

        {/* Stock Description */}
        <p className="text-sm mb-4">{stockData.description}</p>

        {/* Statistics for the previous day */}
        <div className="mb-4">
          <p>Close: {stockData.statistics.close}</p>
          <p>Open: {stockData.statistics.open}</p>
          <p>High: {stockData.statistics.high}</p>
          <p>Low: {stockData.statistics.low}</p>
        </div>

        {/* Open Website Button */}
        <a
          href={stockData.website}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-blue-500 text-white p-2 rounded-md ${
            stockData.website ? "" : "cursor-not-allowed opacity-50"
          }`}
          //   disabled={!stockData.website}
        >
          Open Website
        </a>

        {/* Close Button */}
        <button
          className="mt-4 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default StockDetails;
