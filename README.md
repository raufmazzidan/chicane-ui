# ⚡ chicane-ui

> UI components forged for the lone wolf developer. Pure grindset, zero bloat. 🗿🍷

A high-performance React 19 component library forged with **Tailwind CSS v4** and **Class Variance Authority (CVA)**.

---

### 🗿 The Sigma Protocol (What Is This?)

Real sigmas don't waste 4 hours re-centering divs or fighting button CSS at 3 AM while other devs are sleeping. You lock in, ship the product, and let `chicane-ui` mog bloated component libraries.

- 🗿 **Pure Efficiency**: Pre-styled, composable elements engineered for maximum developer speed.
- 🏎️ **Mog The Competition**: Razor-sharp typography, ultra-clean states, and cold minimalism.
- 🔒 **Type-Safe Grind**: Hardened TypeScript types out of the box. Zero weak code.
- 🧼 **Zero Bloat**: Built strictly on React 19, Tailwind CSS v4, and `cva`. Maximum performance, zero deadweight.

---

### 📦 Lock In (Installation)

Command your package manager:

```bash
# npm
npm install chicane-ui

# pnpm
pnpm add chicane-ui

# yarn
yarn add chicane-ui

# bun
bun add chicane-ui
```

---

### 🗿 Inject Styles

Import the core stylesheet into your root entry file (`main.tsx`, `App.tsx`, or `layout.tsx`):

```tsx
import "chicane-ui/style";
```

---

### ⚡ Quick Start (High-Value Example)

Drop components into your code and start building:

```tsx
import React from "react";
import { Button, Tags } from "chicane-ui";
import "chicane-ui/style";

export default function App() {
  return (
    <main className="p-8 flex flex-col items-start gap-4 font-sans bg-zinc-50 min-h-screen text-zinc-900">
      {/* Badge */}
      <Tags
        label="SIGMA PROTOCOL • v0.0.2"
        className="bg-zinc-900 text-zinc-100 font-bold"
      />

      <h1 className="text-3xl font-extrabold tracking-tight">
        While They Sleep, You Ship 🗿
      </h1>
      <p className="text-zinc-600">
        Cut out the bloat. Deploy clean UI with zero friction.
      </p>

      {/* Button Showcase */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Button
          variant="default"
          size="md"
          onClick={() => console.log("Locked in.")}
        >
          Execute
        </Button>

        <Button variant="outline" size="md">
          Grindset
        </Button>

        <Button variant="ghost" size="md">
          Silent Focus
        </Button>

        <Button isDisabled size="md">
          Distractions Disabled
        </Button>
      </div>
    </main>
  );
}
```

---

### 🧩 Components Arsenal

#### 1. `<Button />`

Built for high-pressure execution. Fully customizable with variants, sizes, and states.

```tsx
import { Button } from "chicane-ui";

<Button variant="default" size="md" onClick={handleExecute}>
  Take Action
</Button>;
```

| Prop         | Type                                | Default     | Description                                       |
| :----------- | :---------------------------------- | :---------- | :------------------------------------------------ |
| `variant`    | `'default' \| 'outline' \| 'ghost'` | `'default'` | Visual hierarchy                                  |
| `size`       | `'sm' \| 'md' \| 'lg'`              | `'md'`      | Component scale                                   |
| `isDisabled` | `boolean`                           | `false`     | Shuts down interaction and applies disabled state |
| `...props`   | `ButtonHTMLAttributes`              | —           | Standard HTML button attributes                   |

#### 2. `<Tags />`

Precision labels and status indicators for high-priority classification.

```tsx
import { Tags } from "chicane-ui";

<Tags label="Priority Alpha" />
<Tags label="Cold Storage" as="div" className="bg-zinc-200 text-zinc-800" />
```

| Prop        | Type          | Default  | Description                                   |
| :---------- | :------------ | :------- | :-------------------------------------------- |
| `label`     | `string`      | —        | Text label content                            |
| `as`        | `ElementType` | `'span'` | Polymorphic element (`'span'`, `'div'`, etc.) |
| `className` | `string`      | —        | Tailwind utility overrides                    |
| `children`  | `ReactNode`   | —        | Secondary badge content                       |

---

### 🛠️ Storybook & Command Center

Inspect your components in isolation:

```bash
# Launch Storybook dev server
npm run storybook

# Build Storybook static production docs
npm run build-storybook

# Compile production library bundle
npm run build

# Clean, build, and publish an update
npm run publish
# or yarn publish / npm run publish:update
```

---

### 📄 License

MIT © [chicane-ui](https://github.com/chicane-ui) — stay disciplined, keep shipping.
