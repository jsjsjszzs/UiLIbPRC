import React from 'react';
const SIZES={sm:{padding:'8px 16px',font:'var(--text-body-sm)'},md:{padding:'12px 22px',font:'var(--text-body)'},lg:{padding:'16px 30px',font:'var(--text-body-lg)'}};
const VARIANTS={primary:{background:'var(--brand)',color:'var(--fg-on-brand)'},secondary:{background:'var(--gray-800)',color:'var(--fg-inverse)'},subtle:{background:'var(--surface-sunken)',color:'var(--fg-1)'},ghost:{background:'transparent',color:'var(--fg-1)'},danger:{background:'var(--danger)',color:'var(--fg-inverse)'}};
export function Button({children,variant='primary',size='md',disabled=false,icon=null,onClick,type='button'}){
const style={fontFamily:'var(--font-body)',fontWeight:600,font:SIZES[size].font,padding:SIZES[size].padding,border:'none',borderRadius:'var(--radius-pill)',cursor:disabled?'not-allowed':'pointer',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'8px',transition:'filter var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)',opacity:disabled?0.45:1,...VARIANTS[variant]};
return React.createElement('button',{type,disabled,onClick,style,
onMouseEnter:e=>{if(!disabled)e.currentTarget.style.filter='brightness(0.92)'},
onMouseLeave:e=>{e.currentTarget.style.filter='none';e.currentTarget.style.transform='scale(1)'},
onMouseDown:e=>{if(!disabled)e.currentTarget.style.transform='scale(0.96)'},
onMouseUp:e=>{e.currentTarget.style.transform='scale(1)'}},icon,children);
}
