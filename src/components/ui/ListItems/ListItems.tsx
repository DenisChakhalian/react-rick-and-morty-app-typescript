import { Box } from "@mui/material";
import { Filter, FilterResult, Pagination } from "../../ui";

function ListItems() {
  return (
    <Box sx={{
    }}>
      <Filter />
      <FilterResult />
      <Pagination />
    </Box>
  );
}

export default ListItems;
