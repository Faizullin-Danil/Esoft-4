import { Typography, Box, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react';

const MiniBook = React.memo(({ book, theme }) => {
    
    return (
        <Box
            sx={{
                backgroundColor: theme === 'dark' ? 'black' : 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid',
                borderColor: theme === 'dark' ? 'white' : 'blue',
                p: 1,
                gap: 2,
                width: '100%',
            }}
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
                <Box sx={{ textAlign: 'center', mt: 1, color: theme === 'dark' ? 'white' : 'blue' }}>
                    <Typography sx={{ fontWeight: 'bold', color: theme === 'dark' ? 'white' : 'blue' }}>{book.label}</Typography>
                    <Typography sx={{ color: theme === 'dark' ? 'white' : 'blue' }}>{book.author}</Typography>
                    <Typography sx={{ color: theme === 'dark' ? 'white' : 'blue' }}>{book.year}</Typography>
                </Box>
            </Box>
            <FavoriteBorderIcon sx={{ color: theme === 'dark' ? 'white' : 'blue' }}/>
        </Box>
    );
});

export default MiniBook;
