import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Box, Button } from "@mui/material";
import { useSelector } from "react-redux";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Filters = () => {
    const books = useSelector(state => state.books.value);

    const authors = [...new Set(books.map(book => book.author))];

    return (
        <Box sx={{ display: 'flex', ml: 2, gap: 1}}>
            <Autocomplete
                multiple
                options={authors}
                disableCloseOnSelect
                size="small"
                getOptionLabel={(option) => option}
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
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Выберите автора" size="small" />
                )}
            />
            <Box display="flex" gap={1} alignItems="center">
                <TextField
                    type="number"
                    placeholder="от"
                    size="small"
                    sx={{ width: 80 }}
                />
                <TextField
                    type="number"
                    placeholder="до"
                    size="small"
                    sx={{ width: 80 }}
                />
                <Button>Фильтр по годам</Button>
                <Button>Только избранные</Button>
                <Button>Сбросить фильтры</Button>
            </Box>
        </Box>
    );
};

export default Filters;
