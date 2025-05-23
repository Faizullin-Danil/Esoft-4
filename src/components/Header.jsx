import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { useTheme } from '../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../store/BooksSlice';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const HintBox = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  marginTop: 4,
  padding: '6px 10px',
  backgroundColor: 'white',
  color: 'black',
  borderRadius: 4,
  boxShadow: theme.shadows[2],
  fontSize: '0.875rem',
  zIndex: 1,
}));

const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const allBooks = useSelector(state => state.books.all);
  const dispatch = useDispatch();
  const favouriteCounter = allBooks.filter(book => book.isFavourite).length;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: isDarkTheme ? 'black' : 'blue' }}>
        <Toolbar sx={{ gap: 3, height: '70px' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Booker
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onFocus={() => setTimeout(() => setIsFocused(true), 200)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => dispatch(search(e.target.value))}
            />
            {isFocused && (
              <HintBox>Введите название книги или автора</HintBox>
            )}
          </Search>

          <FavoriteIcon />
          {favouriteCounter}
          <Button sx={{ color: 'white' }} onClick={toggleTheme}>
            Сменить тему
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
