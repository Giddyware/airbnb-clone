import Loader from "./components/Loader";

const Loading = () => {
  return <Loader />;
  // return (
  //   <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
  //     <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
  //       {[...new Array(10)].map((listing, index) => {
  //         return (
  //           <div key={index} className="col-span-1 cursor-pointer group">
  //             <div className="flex flex-col w-full gap-2 skeleton">
  //               <div className="relative w-full rounded-xl skeleton skeleton-card">
  //                 <div className=" w-full h-[250px] rounded-xl skeleton" />
  //                 <div className="absolute top-3 right-3 skeleton"></div>
  //               </div>
  //               <div className="skeleton"></div>
  //               <div className="skeleton"></div>
  //               <div className="skeleton">
  //                 <div className="skeleton"> </div>
  //               </div>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
};
export default Loading;
