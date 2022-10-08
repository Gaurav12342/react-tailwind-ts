import React, { FC } from 'react'
import deskImage from '../../images/image-desktop.jpg';
const Login: FC = () => {
    return (
        <div className='max-h-full max-w-full'>
            {/* Main div */}
            <div className='flex max-w-3xl mx-auto rounded-xl space-x-4 mt-32'>
                <div className='w-1/2'>
                    <img src={deskImage} className="w-full h-96" />
                </div>
                <div className='w-1/2'>
                    <h3>Pendhakrar</h3>
                </div>
            </div>
        </div>
    )
}

export default Login