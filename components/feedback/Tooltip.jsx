import React,{useState} from 'react';
export function Tooltip({children,label,side='top'}){
const [show,setShow]=useState(false);
const pos={top:{bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'},bottom:{top:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)'}}[side]||{};
return React.createElement('span',{style:{position:'relative',display:'inline-flex'},onMouseEnter:()=>setShow(true),onMouseLeave:()=>setShow(false)},
children,
show&&React.createElement('span',{style:{position:'absolute',...pos,padding:'6px 12px',borderRadius:'var(--radius-md)',background:'var(--surface-inverse)',color:'var(--fg-inverse)',font:'var(--text-caption)',fontFamily:'var(--font-body)',whiteSpace:'nowrap',boxShadow:'var(--shadow-overlay-sm)',zIndex:10}},label));
}
