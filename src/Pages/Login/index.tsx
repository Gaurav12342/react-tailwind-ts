import React, { FC, useState } from 'react'
import deskImage from '../../images/image-desktop.jpg';
import { Typography, TextField, Button } from '@mui/material';

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
        <div className='max-h-full max-w-full'>
            <div className='flex max-w-3xl mx-auto rounded-xl space-x-4 mt-32 bg-slate-300'>
                <div className='w-1/2'>
                    <img src={deskImage} className="w-full h-96" />
                </div>
                <div className='w-1/2 mt-6'>
                    <div className="-ml-5 px-8 py-2 text-5xl">
                        <p className="font-alkalami">Login</p>
                    </div>

                    <div className='space-y-6 flex-col px-8 -ml-5'>
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

                    <div className='mt-6 w-80 flex justify-center'>
                        <Button className="w-64 font-alkalamiSerif bg-primary" variant="contained">Sign In</Button>
                    </div>

                    <div className='mt-6 w-80 flex justify-center'>
                        <Button className="font-alkalamiSerif" href="#text-buttons">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login