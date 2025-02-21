import { cyan, teal } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
    trelloCustomer: {
        heigthHeader: "58px",
        heightBoardBar: "58px",
    },
    colorSchemes: {
        light: {
            palette: {
                primary: teal
            }
        },
        dark: {
            palette: {
                primary: cyan
            },
        },
        // ...other properties
    }
})

export default theme;