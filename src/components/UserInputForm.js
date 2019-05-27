import { useState } from 'react';
import React, { useGlobal } from 'reactn';
import { Button, TextField, FormControlLabel, Switch, IconButton, InputAdornment, Tooltip, Radio, RadioGroup } from '@material-ui/core';
import HelpOutline from '@material-ui/icons/HelpOutline';

const UserInputForm = () => {

    const [metric, setMetric] = useGlobal("metric");
    const [ weight, setWeight ] = useGlobal("weight");
    const [ bodyfat, setBodyfat ] = useGlobal("bodyfat");
    const [ gender, setGender ] = useState("male");
    let [unit, switchLabel] = metric ? ["kg", "Metric"] 
        : ["lbs", "Imperial"]

    return (
        <form className="userInputForm">
            <FormControlLabel control={
                <Switch 
                    checked={metric}
                    onChange={() => {
                        setMetric(!metric);
                        if (metric) {
                            setWeight(weight * 2.204)
                        } else {
                            setWeight(weight / 2.204)
                        }
                        console.log(metric)
                    }}
                    color="primary"
                />        
            }
            label={switchLabel}
            labelPlacement="start"
            />
            <br />
            <RadioGroup class="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <FormControlLabel control={<Radio/>} value="male" label="Male" />
                <FormControlLabel control={<Radio/>} value="female" label="Female" />
            </RadioGroup>
            <br />
            <TextField
                required
                margin="normal"
                label='Weight'
                defaultValue={weight}
                onChange={(e) => setWeight(e.target.value)}
                InputProps={{
                    endAdornment: <InputAdornment position="end">{unit}</InputAdornment>
                }}
            />
            <br />
            <TextField 
                margin="normal"
                label='Body Fat'
                defaultValue={bodyfat}
                onChange={(e) => setBodyfat(e.target.value)}
                InputProps={{
                    endAdornment: <InputAdornment position="end">%</InputAdornment>
                }}
            />
            <br />
            {/* TODO: make modal calculator
            <IconButton color="secondary"><HelpOutline/></IconButton>
            
            */}
            <Button variant="contained">Calculate</Button>
        </form>
    )
}

export default UserInputForm;