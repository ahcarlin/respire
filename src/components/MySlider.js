import React, { useState } from 'react';
import Slider from '@material-ui/lab/Slider';

const MySlider = (props) => {
    let [ value, setValue ] = useState(props.defaultValue)

    return (
        <>
            <Slider
                className="mySlider"
                value={value}
                min={0}
                max={100}
                step={0.5}
                onChange={(e,v) => {setValue(v)}}
            />
        </>
    )
}

export default MySlider;