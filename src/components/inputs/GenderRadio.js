import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
const GenderRadio = ({ handleChange }) => {
  return (
    <FormControl sx={{ mb: 2 }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        row
        onChange={handleChange}
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="female"
          control={<Radio color="secondary" />}
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={<Radio color="secondary" />}
          label="Male"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default GenderRadio;
