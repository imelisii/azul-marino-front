import { DatePicker } from '@mui/x-date-pickers/DatePicker';


interface Props {
    fecha: Date | null;
    setFecha: (date: Date | null) => void;
    label: string;
}


const CustomDatePicker = ({ fecha, setFecha, label }: Props) => {
    return (
        <DatePicker
            label={label}
            value={fecha}
            onChange={setFecha}
            format="dd/MM/yyyy"
            slotProps={{ textField: { size: "small", sx: { minWidth: 140 } } }}
        />
    )
}

export default CustomDatePicker
