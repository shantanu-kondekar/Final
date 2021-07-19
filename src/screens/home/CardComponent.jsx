import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const style = () =>({
  root: {
    width: '32px',
    height: '32px',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
})
  
CardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default function CardComponent() {

  
  const [name, setName] = React.useState('');
  //const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">      
      
      <FormControl>
        <InputLabel htmlFor="component-error">Movie Name</InputLabel>
        <Input
          id="component-error"
          value={name}
          onChange={handleChange}
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="component-error">Genres</InputLabel>
        <Input
          type="text"
          onChange={handleChange}          
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel htmlFor="component-error">Artists</InputLabel>
        <Input
          type=""
          onChange={handleChange}          
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel shrink htmlFor="component-error">Release Date Start</InputLabel>
        <Input
          type="Date"
          value={Text}
          onChange={handleChange}          
        />
      </FormControl>
      <br />
      <FormControl>
        <InputLabel shrink htmlFor="component-error">Release Date End</InputLabel>
        <Input
          type="Date"
          value={Text}
          onChange={handleChange}  
        />
      </FormControl>
      <br />
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      
    </form>
  );
}
