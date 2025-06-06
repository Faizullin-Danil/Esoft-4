import { Typography, Box, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toggleFavourite, deleteBook } from '../store/BooksSlice';
import { useDispatch } from 'react-redux';
import React from 'react';
import { Link } from "react-router";
import { useTheme } from '../context/ThemeContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const BookCard = React.memo(({ book }) => {
    const dispatch = useDispatch();
    const { isDarkTheme } = useTheme();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))   
    }
    
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid',
                borderColor: isDarkTheme ? 'white' : 'blue',
                p: 1,
                gap: 2,
                width: '100%',
                position: 'relative' 
            }}
        >
            <IconButton 
                sx={{
                    position: 'absolute',
                    top: 4,
                    right: 4,
                    color: 'red'
                }}
                onClick={() => handleDeleteBook(book.id)}
            >
                <DeleteForeverIcon />
            </IconButton>

            <Link
                to={`book/${book.id}`}
                style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box
                        sx={{
                            height: 200, 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            overflow: 'hidden',
                        }}
                    >
                        <img
                            src={book.coverUrl}
                            alt=""
                            style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </Box>
                    <Box sx={{ textAlign: 'center', mt: 1, color: isDarkTheme ? 'black' : 'blue' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>{book.label}</Typography>
                        <Typography>{book.author}</Typography>
                        <Typography>{book.year}</Typography>
                    </Box>
                </Box>
            </Link>
            <Button onClick={() => dispatch(toggleFavourite(book.id))}>
                {book.isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Button>
        </Box>
    );
});

export default BookCard;