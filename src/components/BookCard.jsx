import {Typography, Box} from '@mui/material';

const BookCard = ({book}) => {

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            border: '1px solid',
            p: 1
        }}>
            <img src={book.coverUrl} style={{ width: '50%'}} alt="" />
            <Typography sx={{ fontWeight: 'bold'}}>{book.label}</Typography>
            <Typography>{book.author}</Typography>
            <Typography>{book.year}</Typography>
            
        </Box>
    );
};

export default BookCard;