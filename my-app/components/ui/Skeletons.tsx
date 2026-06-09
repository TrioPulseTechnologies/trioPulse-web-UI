import { SkeletonBox, SkeletonText } from "./Loader";

export function HeroSkeleton() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-100/80 via-sky-50/60 to-emerald-50/80 pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Text skeleton */}
          <div className="space-y-4">
            <SkeletonBox className="h-12 w-3/4" />
            <SkeletonText lines={3} />
            <div className="flex gap-3 pt-4">
              <SkeletonBox className="h-12 w-32" />
              <SkeletonBox className="h-12 w-32" />
            </div>
          </div>
          {/* Image skeleton */}
          <SkeletonBox className="h-96 rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export function CardsSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-3 rounded-lg bg-white p-6 shadow">
          <SkeletonBox className="h-6 w-1/3" />
          <SkeletonText lines={2} />
          <SkeletonBox className="h-10 w-24" />
        </div>
      ))}
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="mx-auto max-w-2xl space-y-4 rounded-lg bg-white p-6 shadow">
      <SkeletonBox className="h-10 w-1/3" />
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i}>
            <SkeletonBox className="mb-2 h-4 w-20" />
            <SkeletonBox className="h-10" />
          </div>
        ))}
      </div>
      <SkeletonBox className="h-12 w-32" />
    </div>
  );
}

export function GridSkeleton({ rows = 3, cols = 3 }: { rows?: number; cols?: number }) {
  return (
    <div className={`grid gap-4 md:grid-cols-${cols}`}>
      {Array.from({ length: rows * cols }).map((_, i) => (
        <SkeletonBox key={i} className="h-48 rounded" />
      ))}
    </div>
  );
}
