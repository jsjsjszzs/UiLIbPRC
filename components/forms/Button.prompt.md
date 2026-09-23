Flat, stroke-free button for primary actions, in 6 color variants and 3 sizes.

```jsx
<Button variant="primary" size="md" onClick={()=>{}}>Continue</Button>
<Button variant="subtle" icon={<PlusIcon/>}>Add item</Button>
<Button variant="mainCta">Get started</Button>
```

Variants: primary (brand fill), secondary (charcoal fill), subtle (gray fill), ghost (transparent), danger (red fill) — all pill-shaped. mainCta (blue `--cta` fill) is the exception: it uses `--radius-sm` instead of the pill radius, to stand apart as a single main call-to-action. No borders on any variant — depth comes from flat fill contrast only.
