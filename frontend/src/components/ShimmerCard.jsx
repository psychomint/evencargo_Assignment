export default function ShimmerCard() {
  return (
    <div className="rounded-2xl shadow-md bg-white h-96 flex flex-col animate-pulse">
      <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-full"></div>
        <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
      </div>
      <div className="p-6 pt-0 flex items-center justify-between mt-auto">
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
        <div className="h-8 w-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
