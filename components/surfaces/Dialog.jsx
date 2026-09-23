import React from 'react';
export function Dialog({open,title,children,onClose,actions}){
if(!open)return null;
return React.createElement('div',{style:{position:'fixed',inset:0,background:'rgba(27,25,23,0.45)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100}},
React.createElement('div',{style:{background:'var(--surface-raised)',borderRadius:'var(--radius-xl)',padding:'32px',width:400,maxWidth:'90vw',fontFamily:'var(--font-body)',boxShadow:'var(--shadow-overlay)'}},
React.createElement('div',{style:{font:'var(--text-h3)',color:'var(--fg-1)',marginBottom:12}},title),
React.createElement('div',{style:{font:'var(--text-body)',color:'var(--fg-2)',marginBottom:24}},children),
React.createElement('div',{style:{display:'flex',gap:10,justifyContent:'flex-end'}},actions)));
}
