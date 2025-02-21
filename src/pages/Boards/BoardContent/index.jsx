import Box from "@mui/material/Box";
function BoardContent() {
    return (
        <Box sx={{
            height: (theme) => `calc(100vh - ${theme.trelloCustomer.heightBoardBar} - ${theme.trelloCustomer.heigthHeader})`,
            backgroundColor: "red"
        }}>
            Content
        </Box>
    );
}

export default BoardContent;