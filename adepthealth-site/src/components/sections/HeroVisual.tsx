export function HeroVisual() {
  return (
    <div className="relative h-[360px] w-full overflow-visible sm:h-[430px]">
      <div className="absolute left-6 top-8 w-[76%] -rotate-6 rounded-2xl border border-zinc-300/80 bg-white/88 p-5 backdrop-blur dark:border-white/20 dark:bg-zinc-100/10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500 dark:text-amber-200/90">
          Discovery
        </p>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-100/90">
          Priority workflow opportunities mapped to clinical and operational impact.
        </p>
      </div>

      <div className="absolute right-4 top-38 w-[72%] rotate-3 rounded-2xl border border-zinc-300/80 bg-white/88 p-5 backdrop-blur dark:border-white/20 dark:bg-zinc-200/10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500 dark:text-amber-200/90">
          Pilot
        </p>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-100/90">
          Controlled validation with governance and human oversight checkpoints.
        </p>
      </div>

      <div className="absolute bottom-6 left-8 w-[64%] -rotate-2 rounded-2xl border border-zinc-300/80 bg-white/88 p-5 backdrop-blur dark:border-white/20 dark:bg-zinc-300/10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500 dark:text-amber-200/90">
          Scale
        </p>
        <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-100/90">
          Monitoring, model controls, and continuous optimization in production.
        </p>
      </div>
    </div>
  );
}
