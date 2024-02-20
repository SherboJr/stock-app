// "use client";
// import { useState, useEffect, useRef } from "react";
// import Sheet from "react-modal-sheet";
// import SplashScreen from "./(Screens)/Splash";
// import React from "react";
// import "firebase/firestore";

// const Home: React.FC = () => {
//   const [selectedStock, setSelectedStock] = useState<{
//     ticker: string;
//     name: string;
//     market: string;
//     locale: string;
//     primary_exchange: string;
//     type: string;
//     active: boolean;
//     currency_name: string;
//     cik: string;
//     composite_figi: string;
//     share_class_figi: string;
//     market_cap: number;
//     phone_number: string;
//     description: string;
//     sic_code: string;
//     sic_description: string;
//     ticker_root: string;
//     homepage_url: string;
//     total_employees: number;
//     list_date: string; // You might want to use a Date type for this
//     branding: {
//       logo_url: string;
//       icon_url: string;
//     };
//     share_class_shares_outstanding: number;
//     weighted_shares_outstanding: number;
//     round_lot: number;
//   } | null>(null);

//   const [stockData, setStockData] = useState<any[]>([]);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [loading, setLoading] = useState(true);

//   const [isOpen, setOpen] = useState(false);
//   const observer = useRef<IntersectionObserver | null>(null);

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.polygon.io/v3/reference/tickers?active=true&limit=20&apiKey=NZqSkFngRrHtDAM4CO22GEvpby_YyhCp`
//         );
//         const data = await response.json();
//         console.log("Fetched Data:", data);
//         setStockData(data.results || []);
//       } catch (error) {
//         console.error("Error fetching stock data:", error);
//       }
//     };

//     fetchStockData();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleStockClick = async (stock: any) => {
//     try {
//       const response = await fetch(
//         `https://api.polygon.io/v3/reference/tickers/${stock.ticker}?apiKey=NZqSkFngRrHtDAM4CO22GEvpby_YyhCp`
//       );
//       const details = await response.json();
//       console.log(details),
//         setSelectedStock({
//           ticker: stock.ticker,
//           name: stock.name,
//           market: stock.market,
//           locale: stock.locale,
//           primary_exchange: stock.primary_exchange,
//           type: stock.type,
//           active: stock.active,
//           currency_name: stock.currency_name,
//           cik: stock.cik,
//           composite_figi: stock.composite_figi,
//           share_class_figi: stock.share_class_figi,
//           market_cap: stock.market_cap,
//           phone_number: stock.phone_number,
//           description: stock.description,
//           sic_code: stock.sic_code,
//           sic_description: stock.sic_description,
//           ticker_root: stock.ticker_root,
//           homepage_url: stock.homepage_url,
//           total_employees: stock.total_employees,
//           list_date: stock.list_date,
//           branding: {
//             logo_url: stock.logo_url,
//             icon_url: stock.icon_url
//           },
//           share_class_shares_outstanding: stock.share_class_shares_outstanding,
//           weighted_shares_outstanding: stock.weighted_shares_outstanding,
//           round_lot: stock.round_lot
//         });

//       setOpen(true);
//     } catch (error) {
//       console.error("Error fetching stock details:", error);
//     }
//   };

//   const fetchMoreStocks = async () => {
//     try {
//       const response = await fetch(
//         `https://api.polygon.io/v3/reference/tickers?active=true&limit=20&apiKey=NZqSkFngRrHtDAM4CO22GEvpby_YyhCp`
//       );
//       const data = await response.json();
//       console.log("Fetched More Data:", data);
//       setStockData((prevData) => [...prevData, ...(data.results || [])]);
//     } catch (error) {
//       console.error("Error fetching more stock data:", error);
//     }
//   };

//   const lastStockRef = useRef<HTMLDivElement | null>(null);
//   const searchStocks = async (term: string) => {
//     try {
//       const response = await fetch(
//         `https://api.polygon.io/v3/reference/tickers?search=${term}&active=true&limit=1&apiKey=NZqSkFngRrHtDAM4CO22GEvpby_YyhCp`
//       );
//       const data = await response.json();
//       console.log("Searched Data:", data);
//       setStockData(data.results || []);
//     } catch (error) {
//       console.error("Error searching stocks:", error);
//     }
//   };
//   useEffect(() => {
//     if (lastStockRef.current) {
//       observer.current = new IntersectionObserver(
//         (entries) => {
//           if (entries[0].isIntersecting) {
//             fetchMoreStocks();
//           }
//         },
//         {
//           threshold: 0.1
//         }
//       );

//       observer.current.observe(lastStockRef.current);
//     }

//     return () => {
//       if (observer.current) {
//         observer.current.disconnect();
//       }
//     };
//   }, [lastStockRef.current]);
//   const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const term = e.target.value;
//     setSearchTerm(term);
//     searchStocks(term);
//   };
//   return (
//     <div>
//       {loading ? (
//         <SplashScreen />
//       ) : (
//         <div className="">
//           <div className=" flex flex-row bg-slate-900 w-full h-20">
//             <img src="/nlogo.png" alt="pepe" className=" h-8 w-8 ml-4 mt-3 " />
//             <div className="text-2xl font-mono text-white pt-3 ">Nasdaq</div>
//           </div>

//           <div className=" mt-5 mx-3">
//             <input
//               type="text"
//               placeholder="Search for stocks"
//               className="border border-gray-300 p-3 mb-5 rounded-full w-full bg-slate-700"
//               value={searchTerm}
//               onChange={handleSearchTermChange}
//             />

//             <div className="grid grid-cols-2 gap-4">
//               {stockData.map((stock: any, index: number) => (
//                 <div
//                   key={index}
//                   className=" bg-slate-700 p-4 rounded-md shadow-md cursor-pointer my-3"
//                   onClick={() => handleStockClick(stock)}
//                 >
//                   <div className=" ml-11 mb-3 h-12 w-12 rounded-lg border-solid border-2 border-gray-500  text-center ">
//                     <div className=" mt-4 overflow-hidden text-xs text-gray-300">
//                       {stock.ticker}
//                     </div>
//                   </div>
//                   <h2 className="text-lg mb-2 text-white text-center">
//                     {stock.ticker}
//                   </h2>
//                   <p className="text-sm mb-2 text-gray-500 text-center">
//                     {stock.name}
//                   </p>

//                   {/* Display more details or customize as needed */}

//                   {/* Add more details as needed */}
//                 </div>
//               ))}
//             </div>
//             <div ref={lastStockRef}></div>
//             <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
//               <Sheet.Container>
//                 <Sheet.Content className="bg-slate-800">
//                   <div className="mx-5 my-3 text-white text-2xl">
//                     {selectedStock?.homepage_url}
//                     {selectedStock?.name}
//                     {selectedStock?.ticker}
//                     {selectedStock?.active}
//                     {selectedStock?.currency_name}
//                     {selectedStock?.market_cap}
//                     {selectedStock?.weighted_shares_outstanding}
//                     {selectedStock?.sic_code}
//                   </div>
//                   <div className="mx-5 my-3 text-white text-2xl">
//                     {selectedStock?.primary_exchange}
//                     {selectedStock?.weighted_shares_outstanding}
//                   </div>

//                   <div className="mx-5 text-gray-500 text-base">
//                     description
//                   </div>
//                   <div className="mx-5 my-3 text-white text-2xl">
//                     Statistics
//                   </div>
//                   <div className=" grid-flow-col grid-cols-2 justify-between">
//                     <div className="mx-5 text-gray-500 text-base flex flex-col">
//                       Open
//                     </div>
//                     <div className="mx-5 text-white text-base">
//                       {selectedStock?.type}
//                     </div>
//                     <div className="mx-5 text-gray-500 text-base flex flex-col">
//                       Shares
//                     </div>
//                     <div className="mx-5 text-white text-base">
//                       {" "}
//                       {selectedStock?.market}
//                     </div>
//                     <div className="mx-5 text-gray-500 text-base flex flex-col">
//                       Close Price:
//                     </div>
//                     <div className="mx-5 text-white text-base">
//                       {selectedStock?.homepage_url}
//                     </div>
//                     <div className="mx-5 text-gray-500 text-base flex flex-col">
//                       Highest Price:
//                     </div>
//                     <div className="mx-5 text-white text-base">
//                       {selectedStock?.phone_number}
//                     </div>
//                     <div className="mx-5 text-gray-500 text-base flex flex-col">
//                       Lowest Price:
//                     </div>
//                     <div className="mx-5 text-white text-base">
//                       {selectedStock?.list_date}
//                     </div>
//                   </div>
//                 </Sheet.Content>
//               </Sheet.Container>
//               <Sheet.Backdrop />
//             </Sheet>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
