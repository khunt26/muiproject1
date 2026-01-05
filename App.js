import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import top100Films from './top100Films';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function App() {
  return (
    <div className="App">
      <h1>Hello MUI</h1>
      <Button variant="contained">Hello world</Button>
      <Autocomplete 
        disablePortal
        options={top100Films}
        sx={{width:300}}
        renderInput={(params)=> <TextField {...params} label="Movies"/>}
      />
    </div>
  );
}

export default App;
