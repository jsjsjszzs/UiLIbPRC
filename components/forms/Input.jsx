import React,{useState} from 'react';
export function Input({label,placeholder,value,onChange,type='text',error,disabled=false}){
const [focus,setFocus]=useState(false);
return React.createElement('div',{style:{display:'flex',flexDirection:'column',gap:'6px',fontFamily:'var(--font-body)',width:'100%'}},
label&&React.createElement('label',{style:{font:'var(--text-label)',color:'var(--fg-2)'}},label),
React.createElement('input',{type,placeholder,value,disabled,
onChange:e=>onChange&&onChange(e.target.value),
onFocus:()=>setFocus(true),onBlur:()=>setFocus(false),
style:{font:'var(--text-body)',padding:'13px 18px',border:'none',borderRadius:'var(--radius-md)',
background:disabled?'var(--surface-disabled)':'var(--surface-card)',color:'var(--fg-1)',
outline:focus?'2px solid var(--focus-ring)':'2px solid transparent',outlineOffset:'2px',
boxShadow:error?'inset 0 0 0 2px var(--danger)':'none',
transition:'outline-color var(--duration-fast) var(--ease-standard)'}}),
error&&React.createElement('span',{style:{font:'var(--text-caption)',color:'var(--danger)'}},error));
}
