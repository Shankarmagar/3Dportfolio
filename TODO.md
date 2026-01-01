# Fix Rendering Issue - Move Data Fetching to Parent

## Problem

The `SectionWrapper` HOC uses `viewport={{ once: true }}` which prevents animations from re-triggering when data loads after the initial render (loading state).

## Solution

Move data fetching to App.tsx (parent component) and pass data as props to Experience and Works components. This ensures components only render when data is available.

## Tasks

- [x] Analyze current component structure
- [x] Create shared types for Projects and Experiences
- [x] Modify App.tsx to fetch all data and pass as props
- [x] Modify Works.tsx to accept projects as props
- [x] Modify Experience.tsx to accept experiences as props
- [x] Update SectionWrapper to support generic props
- [x] Test the fix - Dev server running successfully

## Files Changed

1. `src/data/types.ts` - Created shared type definitions
2. `src/components/Works.tsx` - Removed local state, accepts projects as prop
3. `src/components/Experience.tsx` - Removed local state, accepts experiences as prop
4. `src/hoc/SectionWrapper.tsx` - Updated to support generic props
5. `src/App.tsx` - Centralized data fetching and passes data to child components
