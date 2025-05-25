import EditIcon from '@mui/icons-material/Edit';
import PaymentsIcon from '@mui/icons-material/Payments';
import DeleteIcon from '@mui/icons-material/Delete';

import { IconButton } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Socio } from '../../shared/interfaces/socios/socios.interface';
import { UseSociosQuery } from './UseSociosQuery';
import { useSociosStore } from '../../store/socios-store';



const UseSociosDataGrid = () => {

  const paymentHandler = useSociosStore(state => state.paymentHandler)
  const editHandler = useSociosStore(state => state.editHandler)
  const { sociosQuery } = UseSociosQuery()

  const columns: GridColDef<Socio>[] = [
    {
      field: 'nombre',
      headerName: 'Nombre',
      editable: true,
      flex: 1,
    },
    {
      field: 'apellido',
      headerName: 'Apellido',
      editable: true,
      flex: 1,
    },
    {
      field: 'dni',
      headerName: 'DNI',
      editable: true,
      flex: 1,
    },
    {
      field: 'fecha_nacimiento',
      headerName: 'Fecha de nacimiento',
      type: 'string',
      flex: 1,

    },
    {
      field: 'celular',
      headerName: 'Celular',
      type: 'string',
      flex: 1,
    },
    {
      field: 'acciones',
      headerName: 'Acciones',
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: (params) => (
        <div className="flex gap-2">
          <IconButton aria-label="edit" onClick={() => editHandler(params.row)}>
            <EditIcon color="warning" />
          </IconButton>
          <IconButton onClick={() => paymentHandler(params.row)} aria-label="payments">
            <PaymentsIcon color="success" />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon color="error" />
          </IconButton>
        </div>
      ),
    },
  ];



  return {
    sociosQuery,
    columns
  }
}

export default UseSociosDataGrid
