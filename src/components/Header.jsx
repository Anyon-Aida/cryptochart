import React from "react";
import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { useNavigate } from  "react-router-dom"
import {
    createTheme,
    ThemeProvider,
} from "@mui/material/styles";
import { CryptoState } from "../CryptoContext";
const Header = () => {

    const history = useNavigate();
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    const { currency, setCurrency } = CryptoState();
    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography 
                            onClick={() => history(`/`)}
                            className="crypto" 
                        >
                            Crypto Hunter
                        </Typography>
                        <Select
                            variant="outlined"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency}
                            style={{ width: 100, height: 40, marginLeft: 15 }}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"EUR"}>EUR</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header