import React from 'react';
const TONES={neutral:{background:'var(--surface-sunken)',color:'var(--fg-2)'},brand:{background:'var(--brand-tint)',color:'var(--brand-press)'},success:{background:'var(--success-tint)',color:'var(--success)'},danger:{background:'var(--danger-tint)',color:'var(--danger)'},warning:{background:'var(--warning-tint)',color:'var(--warning)'}};
export function Badge({children,tone='neutral'}){
return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',padding:'4px 12px',borderRadius:'var(--radius-pill)',font:'var(--text-caption)',letterSpacing:'var(--tracking-caption)',fontFamily:'var(--font-body)',...TONES[tone]}},children);
}
