import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { filterByFavourites, filterByAuthors, filterByYears, resetFilters } from '../store/BooksSlice';
import { useState } from 'react';
import Modal from '../components/Modal';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Filters = () => {
    const allBooks = useSelector(state => state.books.all)
    const showFavouritesOnly = useSelector(state => state.books.showFavouritesOnly);
    const dispatch = useDispatch()
    const [valueFrom, setValueFrom] = useState()
    const [valueTo, setValueTo] = useState()
    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const authors = [...new Set(allBooks.map(book => book.author))]

    const handleChange = (authors) => {
        setSelectedAuthors(authors)
        if (authors.length === 0) { 
            dispatch(resetFilters())
        } else {
            dispatch(filterByAuthors(authors))
        }
    }

    const handleResetFilters = () => {
        dispatch(resetFilters());
        setSelectedAuthors([]);
        setValueFrom('')
        setValueTo('')
    };  


    const handleFilterByFavourites = () => {
        dispatch(filterByFavourites())
        setSelectedAuthors([]);
        setValueFrom('')
        setValueTo('')
    };

    const handleChangeFrom = (e) => {
        setValueFrom(e.target.value)
    }

    const handleChangeTo = (e) => {
        setValueTo(e.target.value)
    }

    const handleClickFilterByYears = () => {
        const years = {valueFrom: valueFrom, valueTo: valueTo}
        setSelectedAuthors([]);
        dispatch(filterByYears(years))
    }

    console.log('nen')


    return (
        <Box sx={{ display: 'flex', ml: 2, gap: 1}}>
            <Autocomplete
                multiple
                options={authors}
                disableCloseOnSelect
                size="small"
                value={selectedAuthors}
                getOptionLabel={(option) => option}
                onChange={(event, value) => handleChange(value)} 
                renderOption={(props, option, { selected }) => {
                    const { key, ...optionProps } = props;
                    return (
                        <li key={key} {...optionProps}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option}
                        </li>
                    );
                }}
                sx={{ width: 300}}
               
                renderInput={(params) => (
                    <TextField {...params} color='primary' label="Выберите автора" size="small"/>
                )}
            />
            <Box display="flex" gap={1} alignItems="center">
                <TextField
                    type="number"
                    placeholder="от"
                    size="small"
                    value={valueFrom}
                    sx={{ width: 150 }}
                    onChange={handleChangeFrom}
                />
                <TextField
                    type="number"
                    placeholder="до"
                    value={valueTo}
                    size="small"
                    sx={{ width: 150 }}
                    onChange={handleChangeTo}
                />
                <Button  onClick={() => handleClickFilterByYears()}>Фильтр по годам</Button>
            </Box>
            <Box sx={{ ml: 'auto'}}>
                {showFavouritesOnly 
                    ? <Button onClick={handleFilterByFavourites}>Все</Button>
                    : <Button onClick={handleFilterByFavourites}>Только избранные</Button>
                }
                <Button onClick={() => handleResetFilters()}>Сбросить фильтры</Button>
                <Button onClick={() => setOpenModal(true)}>Добавить книгу</Button>
            </Box>
            {openModal && <Modal openDialog={openModal} setOpenDialog={setOpenModal} handleResetFilters={handleResetFilters} />}
        </Box>
    );
};

export default Filters;