import React from 'react';
import Typography from '@material-ui/core/Typography';
import MySlider from './MySlider'

const SliderBox = () => {
    return (
        <div className="sliderBox">
            <Typography align='left'>Fat Balance</Typography>
            <MySlider defaultValue={23}/>
        </div>
    )
}

export default SliderBox;