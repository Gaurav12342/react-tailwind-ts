import React, { FC, useState } from 'react'
import deskImage from '../../images/image-desktop.jpg';
import { TextField, Button } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Login: FC = () => {
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange =
        (prop: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    return (
        <div className='max-h-full max-w-md md:max-w-full'>
            <div className='flex flex-col max-w-3xl mx-auto space-x-4 mt-32 rounded-xl overflow-hidden bg-slate-300 md:flex md:flex-row'>
                <div className='w-full md:w-1/2'>
                    <img src={deskImage} className="w-full h-52 md:h-96" />
                </div>
                <div className='w-full mt-4 md:mt-10 md:w-1/2 '>
                    <div className="-ml-5 px-8 py-2 text-5xl">
                        <p className="font-alkalami">Sign In</p>
                    </div>

                    <div className='space-y-6 flex-col ml-5 mr-16 md:mx-8 md:ml-3'>
                        <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>

                    <div className='-ml-9 mr-4 mt-6 flex justify-center md:-ml-1'>
                        <button className="w-64 py-2 rounded-md font-robotSlabSerif bg-sky-600 text-white" >Sign In</button>
                    </div>

                    <div className='-ml-9 mr-4 my-4 flex justify-center md:-ml-1'>
                        <a className="font-robotSlabSerif text-sky-600" href="#">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login