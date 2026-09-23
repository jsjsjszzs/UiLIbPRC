import React from 'react';
const SIZES={sm:32,md:40,lg:48};
const VARIANTS={primary:{background:'var(--brand)',color:'var(--fg-on-brand)'},subtle:{background:'var(--surface-sunken)',color:'var(--fg-1)'},ghost:{background:'transparent',color:'var(--fg-1)'}};
export function IconButton({icon,variant='subtle',size='md',disabled=false,onClick,label}){
const d=SIZES[size];
const style={width:d,height:d,border:'none',borderRadius:'var(--radius-pill)',cursor:disabled?'not-allowed':'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',opacity:disabled?0.45:1,transition:'filter var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)',...VARIANTS[variant]};
return React.createElement('button',{type:'button','aria-label':label,disabled,onClick,style,
onMouseEnter:e=>{if(!disabled)e.currentTarget.style.filter='brightness(0.92)'},
onMouseLeave:e=>{e.currentTarget.style.filter='none'},
onMouseDown:e=>{if(!disabled)e.currentTarget.style.transform='scale(0.92)'},
onMouseUp:e=>{e.currentTarget.style.transform='scale(1)'}},icon);
}
