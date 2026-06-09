export function Loader() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-600 border-r-violet-400 animate-spin" />
        </div>
        {/* Loading text */}
        <p className="text-sm font-medium text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export function LoaderPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-sky-50 to-emerald-50">
      <div className="flex flex-col items-center gap-4">
        {/* Larger spinner for full page */}
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-violet-600 border-r-violet-400 animate-spin" />
        </div>
        <p className="text-lg font-medium text-gray-700">Loading page...</p>
      </div>
    </div>
  );
}

export function SkeletonText({ lines = 1 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 w-full animate-pulse rounded bg-gray-200"
          style={{
            width: i === lines - 1 ? "80%" : "100%",
          }}
        />
      ))}
    </div>
  );
}

export function SkeletonBox({ className = "" }: { className?: string }) {
  return <div className={`animate-pulse rounded bg-gray-200 ${className}`} />;
}
