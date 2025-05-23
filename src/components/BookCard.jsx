import { Typography, Box, Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toggleFavourite } from '../store/BooksSlice';
import { useDispatch } from 'react-redux';
import React from 'react';
import { Link } from "react-router";

const BookCard = React.memo(({ book }) => {
    const dispatch = useDispatch();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid',
                p: 1,
                gap: 2,
                width: '100%',
            }}
        >
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
                    <Box sx={{ textAlign: 'center', mt: 1 }}>
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
