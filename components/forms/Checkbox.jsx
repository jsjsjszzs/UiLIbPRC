import React from 'react';
export function Checkbox({label,checked=false,onChange,disabled=false}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:'10px',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.45:1,fontFamily:'var(--font-body)'}},
React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(!checked),
style:{width:22,height:22,borderRadius:'var(--radius-sm)',background:checked?'var(--brand)':'var(--surface-sunken)',
display:'inline-flex',alignItems:'center',justifyContent:'center',transition:'background var(--duration-fast) var(--ease-standard)',flexShrink:0}},
checked&&React.createElement('svg',{width:12,height:10,viewBox:'0 0 12 10',fill:'none'},
React.createElement('path',{d:'M1 5L4.5 8.5L11 1.5',stroke:'var(--fg-on-brand)',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'}))),
label&&React.createElement('span',{style:{font:'var(--text-body)',color:'var(--fg-1)'}},label));
}
