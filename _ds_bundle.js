/* @ds-bundle: {"format":4,"namespace":"PRCDesignSystem_ab70b2","components":[{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"}],"sourceHashes":{"components/feedback/Badge.jsx":"38b599fda0bf","components/feedback/Tag.jsx":"9a627ccdc68a","components/feedback/Toast.jsx":"e5b7d1d5cfed","components/feedback/Tooltip.jsx":"0c7bb48a5ebe","components/forms/Button.jsx":"f32181bf8179","components/forms/Checkbox.jsx":"c0960484e9fe","components/forms/IconButton.jsx":"4248ba0ef06e","components/forms/Input.jsx":"cf05e31a5404","components/forms/Radio.jsx":"efe87340fe98","components/forms/Select.jsx":"fb30c1f2d9fe","components/forms/Switch.jsx":"c23a58a3b071","components/navigation/Tabs.jsx":"7db5eda99b8e","components/surfaces/Card.jsx":"19922b12dc21","components/surfaces/Dialog.jsx":"2d7b669429fb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PRCDesignSystem_ab70b2 = window.PRCDesignSystem_ab70b2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    background: 'var(--surface-sunken)',
    color: 'var(--fg-2)'
  },
  brand: {
    background: 'var(--brand-tint)',
    color: 'var(--brand-press)'
  },
  success: {
    background: 'var(--success-tint)',
    color: 'var(--success)'
  },
  danger: {
    background: 'var(--danger-tint)',
    color: 'var(--danger)'
  },
  warning: {
    background: 'var(--warning-tint)',
    color: 'var(--warning)'
  }
};
function Badge({
  children,
  tone = 'neutral'
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      fontFamily: 'var(--font-body)',
      ...TONES[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function Tag({
  children,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 10px 6px 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      color: 'var(--fg-1)',
      font: 'var(--text-body-sm)',
      fontFamily: 'var(--font-body)'
    }
  }, children, onRemove && React.createElement('span', {
    onClick: onRemove,
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-sunken)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: 12,
      lineHeight: 1
    }
  }, '✕'));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  neutral: 'var(--gray-900)',
  success: 'var(--success)',
  danger: 'var(--danger)',
  warning: 'var(--warning)'
};
function Toast({
  tone = 'neutral',
  title,
  description,
  onClose
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      padding: '16px 18px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-inverse)',
      color: 'var(--fg-inverse)',
      boxShadow: 'var(--shadow-overlay-sm)',
      fontFamily: 'var(--font-body)',
      maxWidth: 360
    }
  }, React.createElement('span', {
    style: {
      width: 8,
      height: 8,
      marginTop: 8,
      borderRadius: 'var(--radius-pill)',
      background: TONES[tone],
      flexShrink: 0
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-label)'
    }
  }, title), description && React.createElement('span', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--gray-300)'
    }
  }, description)), onClose && React.createElement('span', {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--gray-400)',
      fontSize: 14
    }
  }, '✕'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  children,
  label,
  side = 'top'
}) {
  const [show, setShow] = useState(false);
  const pos = {
    top: {
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }[side] || {};
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      ...pos,
      padding: '6px 12px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-inverse)',
      color: 'var(--fg-inverse)',
      font: 'var(--text-caption)',
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-overlay-sm)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    padding: '8px 16px',
    font: 'var(--text-body-sm)'
  },
  md: {
    padding: '12px 22px',
    font: 'var(--text-body)'
  },
  lg: {
    padding: '16px 30px',
    font: 'var(--text-body-lg)'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--fg-on-brand)'
  },
  secondary: {
    background: 'var(--gray-800)',
    color: 'var(--fg-inverse)'
  },
  subtle: {
    background: 'var(--surface-sunken)',
    color: 'var(--fg-1)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--fg-1)'
  },
  danger: {
    background: 'var(--danger)',
    color: 'var(--fg-inverse)'
  },
  mainCta: {
    background: 'var(--cta)',
    color: 'var(--fg-inverse)',
    borderRadius: 'var(--radius-sm)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  onClick,
  type = 'button'
}) {
  const style = {
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    font: SIZES[size].font,
    padding: SIZES[size].padding,
    border: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'filter var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)',
    opacity: disabled ? 0.45 : 1,
    ...VARIANTS[variant]
  };
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    style,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.96)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-sm)',
      background: checked ? 'var(--brand)' : 'var(--surface-sunken)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, checked && React.createElement('svg', {
    width: 12,
    height: 10,
    viewBox: '0 0 12 10',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M1 5L4.5 8.5L11 1.5',
    stroke: 'var(--fg-on-brand)',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }))), label && React.createElement('span', {
    style: {
      font: 'var(--text-body)',
      color: 'var(--fg-1)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
const VARIANTS = {
  primary: {
    background: 'var(--brand)',
    color: 'var(--fg-on-brand)'
  },
  subtle: {
    background: 'var(--surface-sunken)',
    color: 'var(--fg-1)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--fg-1)'
  }
};
function IconButton({
  icon,
  variant = 'subtle',
  size = 'md',
  disabled = false,
  onClick,
  label
}) {
  const d = SIZES[size];
  const style = {
    width: d,
    height: d,
    border: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.45 : 1,
    transition: 'filter var(--duration-fast) var(--ease-standard),transform var(--duration-fast) var(--ease-standard)',
    ...VARIANTS[variant]
  };
  return React.createElement('button', {
    type: 'button',
    'aria-label': label,
    disabled,
    onClick,
    style,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  disabled = false
}) {
  const [focus, setFocus] = useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && React.createElement('label', {
    style: {
      font: 'var(--text-label)',
      color: 'var(--fg-2)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--text-body)',
      padding: '13px 18px',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--surface-disabled)' : 'var(--surface-card)',
      color: 'var(--fg-1)',
      outline: focus ? '2px solid var(--focus-ring)' : '2px solid transparent',
      outlineOffset: '2px',
      boxShadow: error ? 'inset 0 0 0 2px var(--danger)' : 'none',
      transition: 'outline-color var(--duration-fast) var(--ease-standard)'
    }
  }), error && React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-sunken)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, checked && React.createElement('span', {
    style: {
      width: 12,
      height: 12,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--brand)'
    }
  })), label && React.createElement('span', {
    style: {
      font: 'var(--text-body)',
      color: 'var(--fg-1)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState
} = React;
function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false
}) {
  const [focus, setFocus] = useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)',
      width: '100%'
    }
  }, label && React.createElement('label', {
    style: {
      font: 'var(--text-label)',
      color: 'var(--fg-2)'
    }
  }, label), React.createElement('select', {
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--text-body)',
      padding: '13px 18px',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--surface-disabled)' : 'var(--surface-card)',
      color: 'var(--fg-1)',
      appearance: 'none',
      outline: focus ? '2px solid var(--focus-ring)' : '2px solid transparent',
      outlineOffset: '2px'
    }
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand)' : 'var(--surface-sunken)',
      display: 'inline-flex',
      alignItems: 'center',
      padding: 3,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-raised)',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  })), label && React.createElement('span', {
    style: {
      font: 'var(--text-body)',
      color: 'var(--fg-1)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      padding: 4,
      gap: 2,
      fontFamily: 'var(--font-body)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t.value,
    onClick: () => onChange && onChange(t.value),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '9px 20px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--text-label)',
      background: active === t.value ? 'var(--surface-raised)' : 'transparent',
      color: active === t.value ? 'var(--fg-1)' : 'var(--fg-2)',
      transition: 'background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  padding = '24px',
  raised = false
}) {
  return React.createElement('div', {
    style: {
      background: raised ? 'var(--surface-raised)' : 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding,
      fontFamily: 'var(--font-body)'
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(27,25,23,0.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    }
  }, React.createElement('div', {
    style: {
      background: 'var(--surface-raised)',
      borderRadius: 'var(--radius-xl)',
      padding: '32px',
      width: 400,
      maxWidth: '90vw',
      fontFamily: 'var(--font-body)',
      boxShadow: 'var(--shadow-overlay)'
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--fg-1)',
      marginBottom: 12
    }
  }, title), React.createElement('div', {
    style: {
      font: 'var(--text-body)',
      color: 'var(--fg-2)',
      marginBottom: 24
    }
  }, children), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
