import { Stats } from '@/types/game';
import { clock } from '@/lib/game';
export default function StatusBar({ s }: { s: Stats }) {
  return <div className="border-b border-white/10 pb-4"><div className="flex items-center justify-between text-xs tracking-wide text-white/55"><span className={s.battery < 5 ? 'text-red-300' : ''}>手机 · {s.battery}%</span><span>{clock(s.time)}</span><span>酒店 {s.distance.toFixed(1)} km</span></div><div className="mt-2 h-[2px] overflow-hidden rounded-full bg-white/10"><div className={`h-full rounded-full transition-all duration-500 ${s.battery < 5 ? 'bg-red-400' : 'bg-amber-100/75'}`} style={{ width: `${Math.max(4, s.battery)}%` }} /></div></div>;
}
