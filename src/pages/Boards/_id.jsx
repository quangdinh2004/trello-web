import Container from "@mui/material/Container";

import Header from "~/components/Header";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
function Board() {
    return (
        <Container disableGutters maxWidth={false} sx={{
            height: "100vh",
        }}>
            <Header />
            <BoardBar />
            <BoardContent />
        </Container>
    );
}

export default Board;