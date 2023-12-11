/* eslint-disable no-constant-condition */
import { Box } from "@mui/material";
import { ItemContent, ListItems } from "../../ui";

function Content() {
  return (
    <Box  
      sx={{
        padding: '30px 110px 15px',
        minHeight: '903px',
        backgroundColor: '#272B33',
      }}>
      { false ? (
        <ItemContent />
      )
        : (
          <ListItems />
        )
      }
    </Box>
  );
}

export default Content;
