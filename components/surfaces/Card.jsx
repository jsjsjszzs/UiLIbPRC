import React from 'react';
export function Card({children,padding='24px',raised=false}){
return React.createElement('div',{style:{background:raised?'var(--surface-raised)':'var(--surface-card)',borderRadius:'var(--radius-lg)',padding,fontFamily:'var(--font-body)'}},children);
}
