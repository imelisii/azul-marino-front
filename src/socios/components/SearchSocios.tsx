import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useSociosStore } from '../../store/socios-store';

export default function SearchSocios() {
   const newHandler  = useSociosStore(state => state.newHandler)
 
  return (
    <Stack direction="row" alignItems="center" className="w-full" spacing={2} >
      <div className="flex-1 flex justify-end">
        <Button  onClick={newHandler}  variant="contained" color="success">
          Agregar Socio
        </Button>
      </div>
    </Stack>
  );
}
