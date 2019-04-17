import React, { useState } from 'react';
import Slider from '@material-ui/lab/Slider';

const MySlider = () => {
    let [ value, setValue ] = useState(23)

    return (
        <div className="mySliderContainer">
            <Slider
                className="mySlider" 
                value={value}
                min={0}
                max={100}
                step={0.5}
                onChange={(e,v) => {setValue(v)}}
            />
        </div>
    )
}

export default MySlider;