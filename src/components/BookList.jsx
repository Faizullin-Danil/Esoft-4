import BookCard from "./BookCard";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

const BookList = () => {
    const books = useSelector(state => state.books.value)

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 3,
                padding: 2
            }}
            >
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </Box>
    );
};

export default BookList;