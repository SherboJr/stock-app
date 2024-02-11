// // pages/StocksPage.tsx

// import { useState } from "react";
// import StockDetails from "./stockDetails";
// const StocksPage: React.FC = () => {
//   const [selectedStock, setSelectedStock] = useState<{
//     logoUrl?: string;
//     ticker: string;
//     closePrice: number;
//     priceChangePercentage: number;
//     description: string;
//     statistics: {
//       close: number;
//       open: number;
//       high: number;
//       low: number;
//     };
//     website?: string;
//   } | null>(null);

//   const handleStockClick = (stock: (typeof stocksData)[0]) => {
//     // Create a new object with the necessary properties
//     const selectedStockData = {
//       logoUrl: undefined, // Replace with the actual logo URL
//       ticker: stock.ticker,
//       closePrice: 0, // Replace with the actual close price
//       priceChangePercentage: 0, // Replace with the actual price change percentage
//       description: "", // Replace with the actual description
//       statistics: {
//         close: 0, // Replace with the actual close statistic
//         open: 0, // Replace with the actual open statistic
//         high: 0, // Replace with the actual high statistic
//         low: 0 // Replace with the actual low statistic
//       },
//       website: undefined // Replace with the actual website URL
//     };

//     // Set the selected stock to open the StockDetails bottom sheet
//     setSelectedStock(selectedStockData);
//   };

//   const stocksData = [
//     { name: "Company A", ticker: "AAPL", id: "1" },
//     { name: "Company B", ticker: "GOOGL", id: "2" },
//     { name: "Company C", ticker: "MSFT", id: "3" }
//     // Add more data as needed
//   ];

//   return (
//     <div className="container mx-auto mt-8 p-4">
//       {/* ... Existing code ... */}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {stocksData.map((stock, index) => (
//           <div
//             key={index}
//             className="bg-gray-200 p-4 rounded-md shadow-md cursor-pointer"
//             onClick={() => handleStockClick(stock)}
//           >
//             <h2 className="text-lg font-semibold mb-2">{stock.name}</h2>
//             <p className="text-sm text-gray-600">{stock.ticker}</p>
//           </div>
//         ))}
//       </div>

//       {/* Open StockDetails bottom sheet when a stock is selected */}
//       {selectedStock && <StockDetails stockData={selectedStock} />}
//     </div>
//   );
// };

// export default StocksPage;
