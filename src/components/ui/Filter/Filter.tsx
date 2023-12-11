import { 
  Box, 
  Button, 
  Checkbox, 
  ListItemText, 
  MenuItem, 
  Select, 
  SelectChangeEvent, 
} from "@mui/material";
import { useState } from "react";

const buttonStyles = {
  backgroundColor: '#F5F5F5',
  color: '#202329',
  paddingInline: '46px',
  paddingBlock: '16.5px',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  ':hover': {
    bgcolor: '#202329',
    color: '#F5F5F5',
  },
};

const options = [
  'Character',
  'Location',
  'Episodes',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Filter() {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedOption>) => {
    const {
      target: { value },
    } = event;

    setSelectedOption(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box sx={{
      display: 'flex',

    }}>
      {isOpenFilter ? (
        <>
          <Button
            variant="contained"
            color="secondary"
            sx={buttonStyles}
            onClick={() => setIsOpenFilter(false)}
          > 
            Remove Filter
          </Button>

          <Select
            multiple
            value={['Select Item']}
            onChange={handleChange}
            renderValue={(selected) => {
              if (!selected?.length) {
                return ;
              }
  
              return selected.join(', ');
            }}
            MenuProps={MenuProps}
            sx={{
              ...buttonStyles,
              paddingBlock: '0',
              ':hover': {
                bgcolor: '#F5F5F5',
                color: '#202329',
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={selectedOption.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>

          <Button
            variant="contained"
            color="secondary"
            sx={buttonStyles}
          > 
            Find
          </Button>
        </>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          sx={buttonStyles}
          onClick={() => setIsOpenFilter(true)}
        > 
          Filter
        </Button>
      )}
      
    </Box>
  );
}

export default Filter;
