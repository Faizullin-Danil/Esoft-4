import { useState } from 'react';
import {
  Button,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import { useTheme } from '../context/ThemeContext';
import books from "../books";
import MiniBook from "../components/MiniBook";
import { useDispatch } from 'react-redux';
import { resetFavourites } from '../store/BooksSlice';

const SettingsPage = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState(false);

    const handleResetFavourites = () => {
        dispatch(resetFavourites())
        setOpenDialog(false);
    };

    const handleOpenDialog = () => setOpenDialog(true);
    const handleCloseDialog = () => setOpenDialog(false);

    return (
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}> 
                <Button onClick={handleOpenDialog}>
                    Сбросить все избранные
                </Button>
                <Button>
                    Загрузить примеры книг
                </Button>
            </Box>

            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', mt: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    <Typography>
                        Темная тема
                    </Typography>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <MiniBook book={books[0]} theme="dark"/>
                        <MiniBook book={books[1]} theme="dark"/>
                    </Box>
                </Box>
                    <Button onClick={toggleTheme} sx={{ }}>
                        Сменить тему
                    </Button>                
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    <Typography>
                        Светлая тема
                    </Typography>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <MiniBook book={books[2]} theme="ligth"/>
                        <MiniBook book={books[3]} theme="ligth"/>
                    </Box>
                </Box>
            </Box>

            <Dialog
                
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">
                    Подтверждение действия
                </DialogTitle>
                <DialogContent>
                    <Typography sx={{ color: 'white'}}>Вы уверены, что хотите сбросить все избранные книги?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Отмена</Button>
                    <Button 
                        onClick={() => handleResetFavourites()} 
                        color="error"
                        autoFocus
                    >
                        Сбросить
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default SettingsPage;