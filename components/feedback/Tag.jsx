import React from 'react';
export function Tag({children,onRemove}){
return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:'8px',padding:'6px 10px 6px 14px',borderRadius:'var(--radius-pill)',background:'var(--surface-card)',color:'var(--fg-1)',font:'var(--text-body-sm)',fontFamily:'var(--font-body)'}},
children,
onRemove&&React.createElement('span',{onClick:onRemove,style:{width:18,height:18,borderRadius:'var(--radius-pill)',background:'var(--surface-sunken)',display:'inline-flex',alignItems:'center',justifyContent:'center',cursor:'pointer',fontSize:12,lineHeight:1}},'✕'));
}
