import React from 'react';
export function Tabs({tabs,active,onChange}){
return React.createElement('div',{style:{display:'inline-flex',background:'var(--surface-sunken)',borderRadius:'var(--radius-pill)',padding:4,gap:2,fontFamily:'var(--font-body)'}},
tabs.map(t=>React.createElement('button',{key:t.value,onClick:()=>onChange&&onChange(t.value),style:{
border:'none',cursor:'pointer',padding:'9px 20px',borderRadius:'var(--radius-pill)',font:'var(--text-label)',
background:active===t.value?'var(--surface-raised)':'transparent',color:active===t.value?'var(--fg-1)':'var(--fg-2)',
transition:'background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)'}},t.label)));
}
