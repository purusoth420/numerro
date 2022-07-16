import React,{useState} from 'react'
import './header.scss'
import logo from '../../assets/images/logo.png'
import icon  from '../../assets/images/icon.png'
import icon1  from '../../assets/images/icon1.png'
import icon2  from '../../assets/images/icon2.png'
import icon3  from '../../assets/images/icon3.png'
import icon4  from '../../assets/images/icon4.png'
import icon5  from '../../assets/images/icon5.png'
import icon6  from '../../assets/images/icon6.png'

export const Header = () => {
    const [cls, setcls] = useState();

    function handleClass(e){
        var id = e.target.id;
        // var cl = 'rectangle'
        setcls(id)
    }

    return (
        <div className='header'>
            <div>
                <img src={logo} className='logo' />
                <div className={`${cls == "1" ? 'rectangle' :""} slide`}  onClick={(e)=> setcls(e.target.id)}>
                    <img src={icon} id='1' />
                    <div></div>
                </div>
                <div className={`${cls == "2" ? 'rectangle' :""} slide`}  onClick={(e)=> setcls(e.target.id)}>
                    <img src={icon1} id='2' />
                </div>
                <div className={`${cls == "3" ? 'rectangle' :""} slide`}  onClick={(e)=> setcls(e.target.id)}>
                    <img src={icon2} id='3' />
                </div>
                <div className={`${cls == "4" ? 'rectangle' :""} slide`}  onClick={(e)=> setcls(e.target.id)}>
                    <img src={icon3} id='4' />
                </div>
                <div className={`${cls == "5" ? 'rectangle' :""} slide`}  onClick={(e)=> setcls(e.target.id)}>
                    <img src={icon4} id='5'/>
                </div>
                <div className={`${cls == "6" ? 'rectangle' :""} slide`}  onClick={(e)=> setcls(e.target.id)}>
                    <img src={icon5} id='6'  />
                </div>
            </div>
            <div></div>
        </div>
    )
}
