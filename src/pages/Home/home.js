import React from 'react';
import './home.scss';
import { SketchPicker } from 'react-color';

export const Home = () => {
  return (
    <div className='home'>
      <div className='center'>
        <div className='canvas'>

        </div>
      </div>
      <div className='rightbar'>
        <SketchPicker className='colorpicker' />
      </div>
    </div>
  )
}
export default Home
