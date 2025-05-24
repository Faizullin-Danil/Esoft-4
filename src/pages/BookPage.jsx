import { Typography, Box, Button } from '@mui/material';
import { useParams, useNavigate } from "react-router";
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { toggleFavourite } from '../store/BooksSlice';
import { useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';


const BookPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const allBooks = useSelector(state => state.books.all)
    const dispatch = useDispatch();
    const [textColor, setTextColor] = useState('black')
    const [textSize, setTextSize] = useState('medium')
    const [isFontBold, setIsFontBold] = useState(false)
    const { isDarkTheme } = useTheme();

    const book = allBooks.find(book => book.id === Number(id))
    console.log(isFontBold)

    return (
        <Box sx={{width: '80%', mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2, color: isDarkTheme ? 'black' : 'blue' }}>
            <Box sx={{ mx: 'auto', display: 'flex', gap: 2  }}>
                <ArrowBackIcon onClick={() => navigate(-1)} sx={{'&:hover': {
                    cursor: 'pointer',
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    borderRadius: 2,
                    transform: 'scale(1.1)', 
                    transition: 'transform 0.3s ease' 
                }}} />
                <Box 
                    component="img" 
                    src={book.coverUrl} 
                    sx={{ 
                        height: 500, 
                        objectFit: 'contain', 
                        mr: 5
                    }} 
                    alt={book.label} 
                />            
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Typography variant='h1'>{book.label}</Typography>
                    <Typography variant='h2'>{book.author}</Typography>
                    <Typography >{book.description}</Typography>
                    <Typography >Год: {book.year}</Typography>
                    <Typography >ISBN: {book.isbn}</Typography>
                    <Button onClick={() => dispatch(toggleFavourite(book.id))}>
                        {book.isFavourite ? 'Убрать из избранного' : 'Добавить в избранное'}
                    </Button>
                </Box>
                
            </Box>
            <Box>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 5}}>
                    <Typography variant='h5' sx={{mb: 3}}>Текст для чтения</Typography>
                    <FormControl>
                        <FormLabel  id="demo-row-radio-buttons-group-label">Цвет текста</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={(e) => setTextColor(e.target.value)}
                        >
                            <FormControlLabel value="black" control={<Radio />} label="black" />
                            <FormControlLabel value="sepia" control={<Radio />} label="sepia" />
                            <FormControlLabel value="dark blue" control={<Radio />} label="dark blue" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Размер шрифта</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={(e) => setTextSize(e.target.value)}
                        >
                            <FormControlLabel value="small" control={<Radio />} label="small" />
                            <FormControlLabel value="medium" control={<Radio />} label="medium" />
                            <FormControlLabel value="large" control={<Radio />} label="large" />
                        </RadioGroup>
                    </FormControl>
                    {isFontBold 
                        ? <Button onClick={() => setIsFontBold(prev => !prev)}>Обычный шрифт</Button>
                        : <Button onClick={() => setIsFontBold(prev => !prev)}>Жирный шрифт</Button>
                    }
                </Box>
                <Box sx={{ 
                    color: textColor === 'dark blue' ? '#00008B' : textColor === 'sepia' ? '#704214' : 'black',
                }}>
                    <Typography 
                        sx={{fontWeight: isFontBold ? 'bold' : 'regular' }} 
                        variant={textSize === 'small' ? 'body2' : textSize === 'large' ? 'h6' : 'body1'} paragraph
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Typography
                        sx={{fontWeight: isFontBold ? 'bold' : 'regular' }} 
                        variant={textSize === 'small' ? 'body2' : textSize === 'large' ? 'h6' : 'body1'} paragraph
                    >
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography 
                        sx={{fontWeight: isFontBold ? 'bold' : 'regular' }} 
                        variant={textSize === 'small' ? 'body2' : textSize === 'large' ? 'h6' : 'body1'} paragraph
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </Typography>    
                </Box>
             </Box>
        </Box>
        
    );
};

export default BookPage;