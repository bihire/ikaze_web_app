import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './addPrice.scss'
import CurrencyInput  from '../../../../components/CurrencyInput'

export default function AddPrice() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="AddPrice_container">
            <div className="AddPrice_container_box">
                <div className="AddPrice_container_box_fixed">
                    <div className="AddPrice_container_box_fixed_top">
                        <div className="SingleShop_container_bottom_box_left">
                            <div href="#/" class="SingleShop_container_bottom_box_left_btn">Fixed price</div>
                        </div>
                    </div>
                    <div className="AddPrice_container_box_fixed_bottom">
                        <div>
                            <div className="AddPrice_container_box_fixed_bottom_text">
                                Start
                            </div>
                            <div className="AddPrice_container_box_fixed_bottom_container">
                                <CurrencyInput placeholder="rwf 0.00" type="text" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="AddPrice_container_box_not-fixed">
                    <div className="AddPrice_container_box_fixed_top">
                        <div className="SingleShop_container_bottom_box_left">
                            <div href="#/" class="SingleShop_container_bottom_box_left_btn">Price range</div>
                            {/* <div href="#/" class="SingleShop_container_bottom_box_left_btn">Playlists</div>
                            <div href="#/" class="SingleShop_container_bottom_box_left_btn">About</div> */}
                        </div>
                    </div>
                    <div className="AddPrice_container_box_fixed_bottom">
                        <div>
                            <div className="AddPrice_container_box_fixed_bottom_text">
                                Start
                            </div>
                            <div className="AddPrice_container_box_fixed_bottom_container">
                                <CurrencyInput placeholder="rwf 0.00" type="text" />
                            </div>
                        </div>
                        <div className="AddPrice_container_box_fixed_divider">
                            <hr class="solid" />
                        </div>
                        <div>
                            <div className="AddPrice_container_box_fixed_bottom_text">
                                Up to
                            </div>
                            <div className="AddPrice_container_box_fixed_bottom_container">
                                <CurrencyInput placeholder="rwf 0.00" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="AddPrice_container_box_negotiate">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="negotiable" />
                        <FormControlLabel value="male" control={<Radio />} label="non-negotiable" />
                        {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}
