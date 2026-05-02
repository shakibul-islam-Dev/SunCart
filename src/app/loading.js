export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 space-y-4">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

      {/* Loading Text */}
      <h2 className="text-xl font-semibold text-slate-700 animate-pulse">
        Loading content...
      </h2>

      {/* Skeleton Placeholder */}
      <div className="w-64 h-4 bg-slate-200 rounded-full overflow-hidden">
        <div className="w-1/2 h-full bg-blue-500 animate-shimmer"></div>
      </div>
    </div>
  );
}
