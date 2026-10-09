import { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'

const CATEGORIAS = ['Capitán', 'Berserker', 'Explorador', 'Asediador']

export default function GuerrerosForm({ onCreateGuerrero }) {
  const [nombre, setNombre] = useState('')
  const [tipo, setTipo] = useState('Orco')
  const [nivel, setNivel] = useState(50)
  const [categoria, setCategoria] = useState('Capitán')
  const [amenaza, setAmenaza] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()

    const nuevoGuerrero = {
      id: crypto.randomUUID(),
      nombre,
      tipo,
      nivel,
      categoria,
      amenaza,
    };

    onCreateGuerrero(nuevoGuerrero)
    setNombre('')
    setTipo('Orco')
    setNivel(50)
    setCategoria('Capitán')
    setAmenaza(1)
  };

  return (
    <Card variant="outlined">
      <CardHeader title="Ingresar Guerrero" />
      <CardContent>
        <form id="guerrero-form" onSubmit={handleSubmit} className="d-flex flex-column gap-3">
          <TextField label="Nombre del Guerrero" value={nombre} onChange={(e) => setNombre(e.target.value)} fullWidth/>
          <FormControl>
            <FormLabel>Tipo de Guerrero</FormLabel>
            <RadioGroup row value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
              <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
            </RadioGroup>
          </FormControl>

          <div>
            <Typography gutterBottom>Nivel de Combate: {nivel}</Typography>
            <Slider value={nivel} min={1} max={100} step={1} valueLabelDisplay="auto" onChange={(e) => setNivel(e.target.value)} />
          </div>

          <FormControl fullWidth>
            <InputLabel id="categoria-label">Categoría / Rango</InputLabel>
            <Select labelId="categoria-label" value={categoria} label="Categoría / Rango" onChange={(e) => setCategoria(e.target.value)} >
              {CATEGORIAS.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div>
            <Typography component="legend">Nivel de Amenaza / Furia</Typography>
            <Rating value={amenaza} min={1} max={5} onChange={(e) => setAmenaza(e.target.value)} />
          </div>
        </form>
      </CardContent>
      <CardActions className="p-3">
        <Button type="submit" form="guerrero-form" variant="contained" color="primary" fullWidth >
          Registrar Guerrero
        </Button>
      </CardActions>
    </Card>
  )
}