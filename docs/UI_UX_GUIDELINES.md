# UI / UX Guidelines

## Design Principles

- **Clarity over decoration** — every element serves a purpose.
- **Consistent spacing** — use Tailwind spacing scale; avoid arbitrary pixel values.
- **Accessible by default** — semantic HTML, descriptive `alt` text, keyboard navigable.

## Color

All colors are defined as CSS custom properties in `app/globals.css` using the `oklch` color space.

| Token | Usage |
|---|---|
| `background` / `foreground` | Page background and primary text |
| `muted` / `muted-foreground` | Subtle backgrounds and secondary text |
| `card` / `card-foreground` | Card surfaces |
| `primary` / `primary-foreground` | Brand action color |
| `destructive` | Error states |

Dark mode tokens are set under `.dark {}`. Do not hardcode color values — always use tokens.

### Accent Gradient

The warm amber-to-olive gradient used in hero and section accents:

```css
background: linear-gradient(
  135deg,
  oklch(0.68 0.22 31) 0%,
  oklch(0.86 0.13 78) 56%,
  oklch(0.47 0.11 108) 100%
);
```

## Typography

| Role | Class | Size |
|---|---|---|
| Display heading (h1) | `text-[3rem] sm:text-[4rem] font-semibold tracking-[-0.02em]` | 48–64 px |
| Section heading (h2) | `text-[2.75rem] font-semibold tracking-[-0.02em]` | 44 px |
| Card heading (h3) | `text-[2.25rem] font-semibold tracking-[-0.02em]` | 36 px |
| Body large | `text-xl leading-[1.4] tracking-[-0.01em]` | 20 px |
| Body base | `text-base leading-[1.4] tracking-[-0.01em]` | 16 px |
| Label / meta | `text-sm leading-[1.4] tracking-[-0.01em]` | 14 px |

Font: **Inter** via `--font-inter-display`.

## Spacing

Maximum content width: `max-w-[105rem]` (1680 px).  
Horizontal padding: `px-6 sm:px-10 lg:px-28`.  
Section vertical padding: `py-24` (96 px) as a baseline.

## Border Radius

Use the radius scale defined in `globals.css`:

| Class | Value |
|---|---|
| `rounded-md` | `~0.5 rem` |
| `rounded-lg` | `0.625 rem` |
| `rounded-xl` | `~0.875 rem` |
| `rounded-[1.15rem]` | Custom — used on main section cards |

## Components

- Use shadcn/ui primitives from `components/ui/` for all generic elements.
- Never override shadcn component internals with raw CSS — pass `className` instead.
- Compose application-specific components at the section level.

## Accessibility

- All images must have a meaningful `alt` attribute.
- Navigation `<nav>` elements must have an `aria-label`.
- Interactive elements must be reachable by keyboard (Tab) and have visible focus rings.
- Color contrast must meet WCAG AA (4.5:1 for normal text, 3:1 for large text).
- Do not rely solely on color to convey state — pair with text or icon.

## Responsive Breakpoints

| Breakpoint | Tailwind prefix | Width |
|---|---|---|
| Mobile | (default) | < 640 px |
| Small | `sm:` | ≥ 640 px |
| Large | `lg:` | ≥ 1024 px |

Desktop-first layout switches happen at `lg:`. Use `sm:` for intermediate adjustments.
