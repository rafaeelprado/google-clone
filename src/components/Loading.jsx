import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from 'react-loader-spinner';

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Audio color="#00BFF" height={550} width={80} />
        </div>
  )
}
