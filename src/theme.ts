import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#0a9b01' // green,
        },
        secondary: {
            main: '#55ed7e',
        },
        text: {
            primary: '#000',
            secondary: '#222',
        }
    },
    typography: {
        fontFamily: 'Montserrat',
        h1: {
            color: '#000',
        },
        h2: {
            color: '#000',
        },
        h3: {
            color: '#000',
        },
        h4: {
            color: '#000',
        },
        h5: {
            color: '#000',
        },
        h6: {
            color: '#000',
        },
        body1: {
            color: '#000',
        },
        body2: {
            color: '#000',
        },
    },
    components: {
        MuiButton: {
        styleOverrides: {
            root: {
                textTransform: 'none',
            },
        },
        },
    },
 });

export default theme;