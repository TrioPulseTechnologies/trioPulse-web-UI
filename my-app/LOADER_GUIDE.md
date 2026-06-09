# Loader Implementation Guide

Your app now includes comprehensive loading states for better UX. Here's how to use them:

## Components Added

### 1. **Main Loader Components** (`components/ui/Loader.tsx`)
- `Loader` - Small inline loader for sections
- `LoaderPage` - Full-page loader with background
- `SkeletonText` - Animated text placeholder
- `SkeletonBox` - Animated box placeholder

### 2. **Section-Specific Skeletons** (`components/ui/Skeletons.tsx`)
- `HeroSkeleton` - For hero sections
- `CardsSkeleton` - For card grids
- `FormSkeleton` - For forms
- `GridSkeleton` - For any grid layout

## How It Works

### Automatic Page Loading
Each route now has a `loading.tsx` file that shows a full-page loader while the page is being rendered:
- `/` (home)
- `/contact`
- `/services`
- `/portfolio`
- `/about-us`

The loader automatically appears during:
- Route navigation
- Server-side data fetching
- Page transitions

### Using in Components with Suspense

For more granular loading states, use React's `Suspense` component:

```tsx
import { Suspense } from "react";
import { HeroSkeleton } from "@/components/ui/Skeletons";
import { Hero } from "@/components/home/Hero";

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
    </>
  );
}
```

## Common Use Cases

### 1. Image Loading Sections
```tsx
<Suspense fallback={<GridSkeleton rows={2} cols={3} />}>
  <ImageGallery />
</Suspense>
```

### 2. Form Loading
```tsx
<Suspense fallback={<FormSkeleton />}>
  <ContactForm />
</Suspense>
```

### 3. Dynamic Content
```tsx
<Suspense fallback={<Loader />}>
  <DynamicComponent />
</Suspense>
```

## Customization

### Styling
All loaders use Tailwind CSS. Modify colors in `Loader.tsx`:
- Change `border-violet-600` to your primary color
- Change `border-violet-400` to your accent color
- Update background gradients in `LoaderPage`

### Adding Loading States
Create custom skeleton loaders in `Skeletons.tsx`:

```tsx
export function CustomSkeleton() {
  return (
    <div className="space-y-3">
      <SkeletonBox className="h-10 w-1/4" />
      <SkeletonText lines={4} />
    </div>
  );
}
```

## Animation Details
- Loader uses CSS `animate-spin` for the spinner
- Skeletons use `animate-pulse` for fading effect
- All animations are smooth and performant

## Best Practices
1. Use full-page loader (`LoaderPage`) for route transitions
2. Use specific skeletons (`HeroSkeleton`, `CardsSkeleton`) for sections
3. Use small `Loader` component for inline loading states
4. Always provide a fallback in Suspense boundaries
5. Keep loader duration short - optimize your data fetching

## Files Modified/Created
- ✅ `components/ui/Loader.tsx` - Main loader components
- ✅ `components/ui/Skeletons.tsx` - Section-specific skeletons
- ✅ `app/loading.tsx` - Home page loader
- ✅ `app/contact/loading.tsx` - Contact page loader
- ✅ `app/services/loading.tsx` - Services page loader
- ✅ `app/portfolio/loading.tsx` - Portfolio page loader
- ✅ `app/about-us/loading.tsx` - About us page loader
- ✅ `app/layout.tsx` - Updated with Suspense boundary

## Testing
To test the loaders:
1. Build your app: `npm run build`
2. Start the production server: `npm start`
3. Loaders appear during route navigation
4. In development with `npm run dev`, loaders may appear briefly

The loading states ensure your users always see feedback during page transitions!
