import React, { useEffect, useState } from 'react';
import './home.scss';
import { SketchPicker } from 'react-color';
import axios from 'axios';
// import {FontPicker} from 'font-picker';

export const Home = () => {
  const key = "28701053-77bb3ba75e209ee18ae00ab97"
  const [images, setImages] = useState([])
  const [search, setsearch] = useState('')

  useEffect(() => {
    // handleImages();

  }, [])



  async function handleImages(e) {
    var value = e.target.value
    setsearch(value);
    try {
      await axios.get(`https://pixabay.com/api/?key=` + key +"&q=" + value).then(
        (res) => {
          if (res.status == 200) {
            setImages(res.data)
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='home'>
      <div className='center'>

        <div className='menu'>
          {/* <div> */}
          <h3>Untitled - 1</h3>
          {/* </div> */}
        </div>
        <div className="canvasscreen">

          <div className='canvas'>
          </div>
        </div>
      </div>
      <div className='rightbar'>
        <div>
          <h1 style={{ textAlign: 'center' }}>Font Styles</h1>

        </div>
        <div>
          <SketchPicker className='colorpicker' />
        </div>
        <div>
          <input value={search} onChange={(e)=> handleImages(e)}></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='images'>
            {
              images == "" ? <p>Loading...</p> :
                images.hits.map((i) => {
                  return <div key={i.id} className="pixabay" >
                    <img src={i.previewURL} width='75px' height='75px' />
                  </div>
                })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
