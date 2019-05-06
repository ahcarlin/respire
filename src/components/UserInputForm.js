import { useState } from 'react';
import React, { useGlobal } from 'reactn';
import { Button, TextField, FormControlLabel, Switch, InputAdornment, Radio, RadioGroup } from '@material-ui/core';

const UserInputForm = () => {

    const [useMetric, toggleMetric] = useState(true);
    const convert = useGlobal('convert');
    const [ weight, setWeight ] = useGlobal("weight");
    const [ gender, setGender ] = useState("male");
    const [ age, setAge ] = useState(30);
    let [unit, switchLabel] = useMetric ? [{height: "cm", weight: "kg"}, "Metric"] 
        : [{height:"in", weight: "lbs"}, "Imperial"]

    return (
        <form className="userInputForm">
            <FormControlLabel control={
                <Switch 
                    checked={useMetric}
                    onChange={() => {
                        toggleMetric(useMetric => !useMetric);
                        convert();
                        console.log(weight)
                    }}
                    color="primary"
                />        
            }
            label={switchLabel}
            labelPlacement="start"
            />
            <br />
            <RadioGroup value={gender} onChange={(e) => setGender(e.target.value)}>
                <FormControlLabel control={<Radio/>} value="male" label="Male" />
                <FormControlLabel control={<Radio/>} value="female" label="Female" />
            </RadioGroup>
            <br />
            <TextField
                margin="normal"
                label='Weight'
                defaultValue={weight}
                onChange={(e) => setWeight(e.target.value)}
                InputProps={{
                    endAdornment: <InputAdornment position="end">{unit.weight}</InputAdornment>
                }}
            />
            <br />
            <TextField 
                margin="normal"
                label="Height"
                InputProps={{
                    endAdornment: <InputAdornment position="end">{unit.height}</InputAdornment>
                }}
            />
            <br />
            <TextField 
                margin="normal"
                label="Age"
                defaultValue={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <TextField 
                margin="normal"
                label='Body Fat (optional)'
                InputProps={{
                    endAdornment: <InputAdornment position="end">%</InputAdornment>
                }}
            />
            <br />
            <Button variant="contained">Calculate</Button>
        </form>
    )
}

export default UserInputForm;