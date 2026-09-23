import React from 'react';
export function Radio({label,checked=false,onChange,disabled=false}){
return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:'10px',cursor:disabled?'not-allowed':'pointer',opacity:disabled?0.45:1,fontFamily:'var(--font-body)'}},
React.createElement('span',{onClick:()=>!disabled&&onChange&&onChange(),
style:{width:22,height:22,borderRadius:'var(--radius-pill)',background:'var(--surface-sunken)',
display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}},
checked&&React.createElement('span',{style:{width:12,height:12,borderRadius:'var(--radius-pill)',background:'var(--brand)'}})),
label&&React.createElement('span',{style:{font:'var(--text-body)',color:'var(--fg-1)'}},label));
}
