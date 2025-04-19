
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import UseSociosDataGrid from '../hooks/UseSociosDataGrid';





export default function DataGridSocios() {
  const { columns, sociosQuery } = UseSociosDataGrid()

  sociosQuery.isLoading && <div>Loading...</div>;
  sociosQuery.isError && <div>Error: {sociosQuery.error.message}</div>;



  return (
    <Box sx={{ height: "85vh", width: '100%' }}>
      <DataGrid
        rows={sociosQuery.data ?? []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
