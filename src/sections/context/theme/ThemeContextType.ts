import { Theme } from '@mui/material/styles';

export interface ColorModeContextType {
  setMode: () => void;
  mode: 'light' | 'dark';
}

export type UseModeReturnType = [Theme, ColorModeContextType];