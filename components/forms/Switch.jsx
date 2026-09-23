import React from 'react';
export function Switch({checked=false,onChange,disabled=false,label}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:'10px',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.45:1,fontFamily:'var(--font-body)'}},
React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(!checked),
style:{width:44,height:26,borderRadius:'var(--radius-pill)',background:checked?'var(--brand)':'var(--surface-sunken)',
display:'inline-flex',alignItems:'center',padding:3,transition:'background var(--duration-fast) var(--ease-standard)',flexShrink:0}},
React.createElement('span',{style:{width:20,height:20,borderRadius:'var(--radius-pill)',background:'var(--surface-raised)',
transform:checked?'translateX(18px)':'translateX(0)',transition:'transform var(--duration-fast) var(--ease-standard)'}})),
label&&React.createElement('span',{style:{font:'var(--text-body)',color:'var(--fg-1)'}},label));
}
