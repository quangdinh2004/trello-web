import Box from "@mui/material/Box";
function BoardBar() {
    return (
        <Box sx={{
            width: "100%",
            height: (theme) => theme.trelloCustomer.heightBoardBar,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#333"
        }}>
            Board bar
        </Box>
    );
}

export default BoardBar;