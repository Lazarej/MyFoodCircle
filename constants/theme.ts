

export const fontConfig = {

   titleLarge: {
    fontFamily: 'System',
    fontWeight: '600', 
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0,
  },
  titleMedium: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0,
  },
  titleSmall: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.5,
  },
  bodyMedium: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  bodySmall: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 16,
    letterSpacing: 0.1,
  },
} as const;


export const lightTheme = {
  dark: false,
  colors: {
    primary: '#4E61F6',
    onPrimary: '#FFFFFF',
    primaryContainer: '#DDE0FF',
    onPrimaryContainer: '#00105A',

    secondary: '#9EA2AE',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#E3E5EA',
    onSecondaryContainer: '#1E2026',

    tertiary: '#FFAA00',
    onTertiary: '#000000',
    tertiaryContainer: '#FFE0A3',
    onTertiaryContainer: '#2A1C00',

    background: '#F3F4F6',
    onBackground: '#1C1B1F',

    surface: '#FFFFFF',
    onSurface: '#1C1B1F',

    surfaceVariant: '#E0E0E0',
    onSurfaceVariant: '#444444',

    error: '#B3261E',
    onError: '#FFFFFF',
    errorContainer: '#F9DEDC',
    onErrorContainer: '#410E0B',

    outline: '#E5E7EA',
    shadow: '#000000',
    inverseSurface: '#2C2C2C',
    inverseOnSurface: '#F9FAFB',
    inversePrimary: '#BCC4FF',


  },

};

export const darkTheme = {
  dark: true,
  colors: {
    primary: '#BCC4FF',
    onPrimary: '#00105A',
    primaryContainer: '#4E61F6',
    onPrimaryContainer: '#FFFFFF',

    secondary: '#C8CAD3',
    onSecondary: '#2E3035',
    secondaryContainer: '#4B4E57',
    onSecondaryContainer: '#E3E5EA',

    tertiary: '#FFD285',
    onTertiary: '#2A1C00',
    tertiaryContainer: '#FFAA00',
    onTertiaryContainer: '#000000',

    background: '#1C1B1F',
    onBackground: '#E6E1E5',

    surface: '#1C1B1F',
    onSurface: '#E6E1E5',

    surfaceVariant: '#444444',
    onSurfaceVariant: '#CFCFCF',

    error: '#F2B8B5',
    onError: '#601410',
    errorContainer: '#8C1D18',
    onErrorContainer: '#F9DEDC',

    outline: '#928F99',
    shadow: '#000000',
    inverseSurface: '#E6E1E5',
    inverseOnSurface: '#1C1B1F',
    inversePrimary: '#4E61F6',


  },
};