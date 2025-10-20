import { createContext, useContext } from 'react';

// --- 1. CONTEXT CREATION ---
// This context is configured with a static default value since the Provider is absent.
// All components consuming this context will receive this exact, static object.
export const ThemeContext = createContext(null);

// --- 2. CUSTOM HOOK ---
// This is the clean way for components to access the context.
export const useTheme = () => useContext(ThemeContext);