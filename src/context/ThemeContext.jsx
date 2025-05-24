import { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        const stored = localStorage.getItem('theme');
        return stored === 'dark' ? 'dark' : 'light';
    });

    const toggleTheme = () => {
        setMode(prev => {
            const newMode = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newMode);
            return newMode;
        });
    };

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '& .MuiInputLabel-root': {
                            color: mode === 'dark' ? 'black' : 'blue',
                            '&.Mui-focused': { // Стили для label в фокусе
                                color: mode === 'dark' ? 'black' : 'blue',
                        },
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: mode === 'dark' ? 'black' : 'blue',
                            },
                            '&:hover fieldset': {
                                borderColor: mode === 'dark' ? 'black' : 'blue',
                                borderWidth: '2px', 
                            },
                            '&.Mui-focused fieldset': { 
                                borderColor: mode === 'dark' ? 'black' : 'blue',
                                borderWidth: '2px', 
                            },
                        },
                        '& .MuiInputBase-input::placeholder': {
                            color: mode === 'dark' ? 'black' : 'blue',
                            opacity: 1,
                        },
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        color: theme.palette.mode === 'dark' ? 'black' : 'blue',
                    }),
                },
            },
            MuiRadio: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        color: theme.palette.mode === 'dark' ? 'black' : 'blue',
                        '&.Mui-checked': {
                            color: theme.palette.mode === 'dark' ? 'black' : 'blue',
                        },
                    }),
                },
            },
            MuiFormControlLabel: {
                styleOverrides: {
                    label: ({ theme }) => ({
                        color: theme.palette.mode === 'dark' ? 'black' : 'blue',
                    }),
                },
            },
            MuiFormLabel: {
                styleOverrides: {
                    root: ({ theme }) => ({
                        color: theme.palette.mode === 'dark' ? 'black' : 'blue',
                    }),
                },
            },
        },
    }), [mode]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme: mode === 'dark', toggleTheme }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);