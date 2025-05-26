import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/BooksSlice';


const Modal = ({ openDialog, setOpenDialog, handleResetFilters }) => {
    const [formData, setFormData] = useState({
        label: '',
        author: '',
        year: '',
        coverUrl: '',
        description: '',
        isbn: '' 
    });
    const [isEmpty, setIsEmpty] = useState(false);

    const dispatch = useDispatch()

    const handleChangeFormData = (field) => (e) => {
        setFormData({ ...formData, [field]: e.target.value });
    };

    const handleSubmit = async () => {
        const hasEmptyField = Object.values(formData).some(field => field === '')
        
        if (hasEmptyField) {
            setIsEmpty(true);
            setTimeout(() => setIsEmpty(false), 1000);
            return; 
        }

        dispatch(addBook(formData))
        handleResetFilters()
        
        setOpenDialog(false); 
    };

    return (
        <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            aria-labelledby="alert-dialog-title"
        >
            <DialogTitle id="alert-dialog-title">
                Добавление книги
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
                    <TextField 
                        onChange={handleChangeFormData('coverUrl')} 
                        id="coverUrl" 
                        label="URL обложки" 
                        variant="outlined" 
                        fullWidth
                    />
                    <TextField 
                        onChange={handleChangeFormData('label')} 
                        id="label" 
                        label="Название книги" 
                        variant="outlined" 
                        fullWidth
                    />
                    <TextField 
                        onChange={handleChangeFormData('author')} 
                        id="author" 
                        label="Автор" 
                        variant="outlined" 
                        fullWidth
                    />
                    <TextField 
                        onChange={handleChangeFormData('description')} 
                        multiline
                        id="description" 
                        label="Описание" 
                        variant="outlined" 
                        fullWidth
                    />
                    <TextField 
                        onChange={handleChangeFormData('year')} 
                        id="year" 
                        label="Год" 
                        variant="outlined" 
                        fullWidth
                    />
                    <TextField 
                        onChange={handleChangeFormData('isbn')} 
                        id="isbn" 
                        label="isbn книги" 
                        variant="outlined" 
                        fullWidth
                    />
                </Box>
            </DialogContent>
            
            {isEmpty && (
                <Typography sx={{ textAlign: 'center', color: 'error.main' }}>
                    Пожалуйста, заполните все поля
                </Typography>
            )}
            
            <DialogActions sx={{ justifyContent: 'center' }}>
                <Button 
                    onClick={handleSubmit}
                    variant="contained"
                    color="primary"
                >
                    Добавить книгу
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;