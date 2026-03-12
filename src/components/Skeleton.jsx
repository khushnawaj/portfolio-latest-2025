export default function Skeleton({ className }) {
  return (
    <div 
      className={`bg-gray-200 dark:bg-white/5 animate-pulse rounded-xl ${className}`}
      style={{
        backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
        backgroundSize: '200% 100%',
      }}
    />
  );
}

export function ProjectSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden bg-white dark:bg-[#0B0B0D]">
      <Skeleton className="h-56 w-full rounded-none" />
      <div className="p-6 space-y-4">
        <div className="flex justify-between">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-6 w-1/4" />
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-8 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
}
