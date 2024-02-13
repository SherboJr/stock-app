// // pages/StocksPage.tsx
// "use client";
// import { useState, useEffect } from "react";
// import Sheet from "react-modal-sheet";
// import SplashScreen from "./(Screens)/Splash";
// import React from "react";

// export function StocksPage({}: {}) {
//   const [selectedStock, setSelectedStock] = useState<{
//     name: string;
//     ticker: string;
//   } | null>(null);

//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [filteredStocks, setFilteredStocks] =
//     useState<typeof stocksData>(stocksData);

//   useEffect(() => {
//     // Filter stocks based on the search term
//     const filteredResults = stocksData.filter(
//       (stock) =>
//         stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         stock.ticker.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredStocks(filteredResults);
//   }, [searchTerm]);
//   const [isOpen, setOpen] = useState(false);

//   const handleStockClick = (stock: (typeof stocksData)[0]) => {
//     setOpen(true);
//     setSelectedStock({
//       name: stock.name,
//       ticker: stock.ticker
//     });
//   };

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);
//   const [stockData, setStockData] = useState<any[]>([]);
//   useEffect(() => {
//     // Make API request when component mounts
//     fetch("/api/Home")
//       .then((response) => response.json())
//       .then((data) => {
//         setStockData(data.results || []);
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // E
//   return (
//     <div>
//       {loading ? (
//         <SplashScreen />
//       ) : (
//         <div className="container mx-auto mt-8 p-4">
//           {/* Search bar */}
//           <input
//             type="text"
//             placeholder="Search..."
//             className="border border-gray-300 p-2 mb-4 rounded-full w-full"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <ul>
//             {stockData.map((stock: any, index: number) => (
//               <li className=" bg-gray-600" key={index}>
//                 <p>Symbol: {stock.T}</p>
//                 <p>Volume: {stock.v}</p>
//                 <p>Open: {stock.o}</p>
//                 <p>Close: {stock.c}</p>
//               </li>
//             ))}
//           </ul>

//           {/* Grid of stock containers */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {filteredStocks.map((stock, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-200 p-4 rounded-md shadow-md cursor-pointer"
//                 onClick={() => handleStockClick(stock)}
//               >
//                 <h2 className="text-lg font-semibold mb-2">{stock.name}</h2>
//               </div>
//             ))}
//           </div>

//           {/* Display stock details in a modal sheet when a stock is selected */}
//           <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
//             <Sheet.Container>
//               <Sheet.Header />
//               <img src="/logo.png" alt="" className=" h-24 w-40" />
//               <h1>{selectedStock?.ticker}</h1>

//               <Sheet.Content>
//                 <div className=" flex flex-col">
//                   <div className=" flex">
//                     <p>Close Price:</p>
//                     <p className=" right-0">12</p>
//                   </div>
//                   <div className=" flex">
//                     <p>Close Price:</p>
//                     <p className=" right-0">12</p>
//                   </div>{" "}
//                   <div className=" flex">
//                     <p>Close Price:</p>
//                     <p className=" right-0">12</p>
//                   </div>{" "}
//                   <div className=" flex">
//                     <p>Close Price:</p>
//                     <p className=" right-0">12</p>
//                   </div>
//                   <p className=" m5 line-clamp-3">
//                     aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
//                   </p>
//                 </div>
//               </Sheet.Content>
//             </Sheet.Container>
//             <Sheet.Backdrop />
//           </Sheet>
//         </div>
//       )}
//     </div>
//   );
// }

// export default StocksPage;

// const stocksData = [
//   { name: "Company A", ticker: "AAPL" },
//   { name: "Company B", ticker: "GOOGL" },
//   { name: "Company C", ticker: "MSFT" }
// ];
