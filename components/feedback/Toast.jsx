import React from 'react';
const TONES={neutral:'var(--gray-900)',success:'var(--success)',danger:'var(--danger)',warning:'var(--warning)'};
export function Toast({tone='neutral',title,description,onClose}){
return React.createElement('div',{style:{display:'flex',gap:14,alignItems:'flex-start',padding:'16px 18px',borderRadius:'var(--radius-lg)',background:'var(--surface-inverse)',color:'var(--fg-inverse)',boxShadow:'var(--shadow-overlay-sm)',fontFamily:'var(--font-body)',maxWidth:360}},
React.createElement('span',{style:{width:8,height:8,marginTop:8,borderRadius:'var(--radius-pill)',background:TONES[tone],flexShrink:0}}),
React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:2,flex:1}},
React.createElement('span',{style:{font:'var(--text-label)'}},title),
description&&React.createElement('span',{style:{font:'var(--text-body-sm)',color:'var(--gray-300)'}},description)),
onClose&&React.createElement('span',{onClick:onClose,style:{cursor:'pointer',color:'var(--gray-400)',fontSize:14}},'✕'));
}
