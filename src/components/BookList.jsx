import BookCard from "./BookCard";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const BookList = () => {
    const books = useSelector(state => state.books.value);

    return (
        books.length !== 0 
            ?   <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: 3,
                        padding: 2,
                    }}
                >
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} isMiniature={false} />
                    ))}
                </Box>
            : <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh'
                }}
              >
                <Typography variant="h6">Нет подходящих книг</Typography>
              </Box>       
    );
};

export default BookList;