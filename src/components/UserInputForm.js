import React, { useState } from 'react';
import { TextField, FormControlLabel, Switch, InputAdornment } from '@material-ui/core';

const UserInputForm = () => {

    const [useMetric, toggleMetric] = useState(true)
    let [unit, switchLabel] = useMetric ? [{height: "cm", weight: "kg"}, "Metric"] 
        : [{height:"in", weight: "lbs"}, "Imperial"]

    return (
        <form className="userInputForm">
            <FormControlLabel control={
                <Switch 
                    checked={useMetric}
                    onChange={() => toggleMetric(useMetric => !useMetric)}
                    color="primary"
                />        
            }
            label={switchLabel}
            labelPlacement="start"
            />
            <br />
            <TextField
                margin="normal"
                label='Weight'
                InputProps={{
                    endAdornment: <InputAdornment position="end">{unit.weight}</InputAdornment>
                }}
            />
            <br />
            <TextField 
                margin="normal"
                label='Body Fat'
            />
        </form>
    )
}

export default UserInputForm;