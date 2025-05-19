
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import UseSociosDataGrid from '../hooks/UseSociosDataGrid';
import { localeText,  } from '../../shared/grid-context/GridContext';





export default function DataGridSocios() {

  const { columns, sociosQuery } = UseSociosDataGrid()


  if( sociosQuery.isError) return <div>Error al cargar los socios</div>
  if (sociosQuery.isLoading) return <div>Cargando...Socios</div>





  


  return (
    <Box sx={{ height: "85vh", width: '100%' }}>
      <DataGrid
        rows={sociosQuery.data ?? []}
        columns={columns}
        disableRowSelectionOnClick
        localeText={localeText}
        
      />
    </Box>
  );
}
