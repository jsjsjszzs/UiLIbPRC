import React,{useState} from 'react';
export function Select({label,value,onChange,options=[],disabled=false}){
const [focus,setFocus]=useState(false);
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'6px',fontFamily:'var(--font-body)',width:'100%'}},
label&&React.createElement('label',{style:{font:'var(--text-label)',color:'var(--fg-2)'}},label),
React.createElement('select',{value,disabled,onChange:e=>onChange&&onChange(e.target.value),
onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),
style:{font:'var(--text-body)',padding:'13px 18px',border:'none',borderRadius:'var(--radius-md)',
background:disabled?'var(--surface-disabled)':'var(--surface-card)',color:'var(--fg-1)',appearance:'none',
outline:focus?'2px solid var(--focus-ring)':'2px solid transparent',outlineOffset:'2px'}},
options.map(o=>React.createElement('option',{key:o.value,value:o.value},o.label))));
}
