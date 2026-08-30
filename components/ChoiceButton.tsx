type Props = { children: React.ReactNode; hint?: string; onClick: () => void };
export default function ChoiceButton({ children, hint, onClick }: Props) {
  return <button onClick={onClick} className="choice-card group w-full rounded-[22px] border border-white/10 bg-white/[.055] p-4 text-left active:scale-[.985]">
    {hint && <span className="mb-2 inline-flex rounded-full border border-amber-100/10 bg-amber-100/[.06] px-2.5 py-1 text-[11px] tracking-[.12em] text-amber-100/65">{hint}</span>}
    <span className="flex items-center justify-between gap-4 text-[17px] font-medium leading-6"><span>{children}</span><span className="text-2xl font-light text-amber-100/45">›</span></span>
  </button>;
}
