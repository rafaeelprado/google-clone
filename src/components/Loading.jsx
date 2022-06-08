import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <TailSpin color="#00BFF" height={550} width={80} />
        </div>
  )
}
