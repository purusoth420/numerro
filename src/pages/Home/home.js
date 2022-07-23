import React, { useEffect, useState } from 'react';
import './home.scss';
import { SketchPicker } from 'react-color';
import axios from 'axios';
// import {FontPicker} from 'font-picker';
import { homepage } from '../../config/api'
import pixabay from '../../assets/images/pixabay.png'
import pexel from '../../assets/images/pexels.png'
import {FaSearch} from 'react-icons/fa'

export const Home = () => {
  const key = "28701053-77bb3ba75e209ee18ae00ab97"
  const [images, setImages] = useState([])
  const [pexelimg, setpexelimg] = useState([])
  const [pexels, setpexels] = useState('')
  const [search, setsearch] = useState('')
  const [show, setShow] = useState(0)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    // handleImages();

  }, [])



  async function handleImages(e) {
    var value = e.target.value
    setsearch(value);
    try {
      await axios.get(homepage.pixabay + homepage.pixabaykey + "&q=" + value).then(
        (res) => {
          if (res.status == 200) {
            setImages(res.data)
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  async function handlePexels(e) {
    var value = e.target.value
    setpexels(value);
    try {
      await axios.get(homepage.pexels + value, {
        headers: {
          Authorization: homepage.pexelskey
        }
      }).then(
        (res) => {
          if (res.status == 200) {
            setpexelimg(res.data)
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
          <h5 onClick={() => setMenu(i => !i)}>File</h5>
          <h5>Edit</h5>
          <h5>Window</h5>
          <h5>About</h5>
        </div>
        <div className={menu ? 'hiddenmenu slide' : "hiddenmenu "} >
          <h5>Create new file</h5>
          <h5>Open</h5>
          <h5>Open recent files</h5>
          <h5>Close</h5>
          <h5>Close All</h5>
        </div>
        {/* <div className='untitled'>
          <h3>Untitled - 1</h3>
        </div> */}
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
        {
          show == 0 ?

            < >
              <div>
                <div  className='search'>
                  <select class="" value={show} onChange={(e) => setShow(e.target.value)}>
                    <option value={0}>Pixabay</option>
                    <option value={1}>Pexels</option>
                  </select>
                  <input value={search} className='' placeholder='Search..' onChange={(e) => handleImages(e)}></input>
                </div>
                {/* <div>
                </div> */}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='images'>
                  {
                    images == "" ? <img src={pixabay} ></img> :
                      images.hits.map((i) => {
                        return <div key={i.id} className="pixabay" >
                          <img src={i.previewURL} />
                        </div>
                      })
                  }
                </div>
              </div>
            </ >
            :

            < >
              <div >
                <div  className='search'>
                  <select class="" value={show} onChange={(e) => setShow(e.target.value)}>
                    <option value={0}>Pixabay</option>
                    <option value={1}>Pexels</option>
                  </select>
                  <input value={search} className='' placeholder='Search..' onChange={(e) => handleImages(e)}></input>
                </div>
                {/* <div>
                  <input value={pexels} className='form-control input-sm' onChange={(e) => handlePexels(e)}></input>
                </div> */}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='images'>
                  {
                    pexelimg == "" ? <img src={pexel} ></img> :
                      pexelimg.photos.map((i) => {
                        return <div key={i.id} className="pixabay" >
                          <img src={i.src.tiny} />
                        </div>
                      })
                  }
                </div>
              </div>
            </ >
        }
      </div>
    </div>
  )
}
export default Home
