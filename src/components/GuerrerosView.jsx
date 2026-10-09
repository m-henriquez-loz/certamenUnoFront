import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'

export default function GuerrerosView({ lista, onDeleteGuerrero }) {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Nombre del Guerrero</strong></TableCell>
            <TableCell><strong>Tipo de Guerrero</strong></TableCell>
            <TableCell><strong>Categoría / Rango</strong></TableCell>
            <TableCell><strong>Nivel</strong></TableCell>
            <TableCell><strong>Clasificación</strong></TableCell>
            <TableCell align="center"><strong>Acción</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map((guerrero) => (
            <TableRow key={guerrero.id}>
              <TableCell>{guerrero.nombre}</TableCell>
              <TableCell>{guerrero.tipo}</TableCell>
              <TableCell>{guerrero.categoria}</TableCell>
              <TableCell>{guerrero.nivel}</TableCell>
              <TableCell>
                <Chip label={guerrero.tipo} color={guerrero.tipo === 'Orco' ? 'error' : 'secondary'}/>
              </TableCell>
              <TableCell align="center">
                <Button variant="outlined" color="error" size="small" onClick={() => onDeleteGuerrero(guerrero)}> 
                    Asesinado por la aparición
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}