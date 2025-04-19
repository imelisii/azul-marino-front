import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SearchSocios() {
  return (
    <Stack direction="row" alignItems="center" className="w-full" spacing={2} >
      <TextField
        label="Buscar"
        variant="outlined"
        size="small"
      />
      <Button
        variant="contained"
        color="primary"
      >
        Buscar
      </Button>
      <div className="flex-1 flex justify-end">
        <Button variant="contained" color="success">
          Agregar Socio
        </Button>
      </div>
    </Stack>
  );
}
