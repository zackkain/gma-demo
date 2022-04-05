import * as React from 'react';

import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import { CssBaseline, Container } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import PlayCard from 'Components/PlayCard'

export default function App(props) {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
          },
        }),
      [prefersDarkMode],
    );
    
    const style = {
      paddingTop: 10
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
            <Container style={style}>
                <Routes>
                <Route path="/" element={<PlayCard />} />
                </Routes>
            </Container>
            </BrowserRouter>
        </ThemeProvider>
    )
}