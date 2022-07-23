import React, { useState } from 'react'
import './header.scss'
import logo from '../../assets/images/logo.png'
import icon from '../../assets/images/icon.png'
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import icon4 from '../../assets/images/icon4.png'
import icon5 from '../../assets/images/icon5.png'
import icon6 from '../../assets/images/icon6.png'
import rec from '../../assets/images/rec.png'
import rec1 from '../../assets/images/rec1.png'
import rec2 from '../../assets/images/rec2.png'
import rec3 from '../../assets/images/rec3.png'
import rec4 from '../../assets/images/rec4.png'
import cursur from '../../assets/images/cursur.png'
import hand from '../../assets/images/hand.png'
import slide from '../../assets/images/slide.png'
import text from '../../assets/images/text.png'
import gallary from '../../assets/images/gallary.png'
import shapes from '../../assets/images/shapes.png'
import search from '../../assets/images/search.png'
import gear from '../../assets/images/gear.png'
import profile from '../../assets/images/profile.png';
import team from '../../assets/images/team.svg';
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaEraser} from 'react-icons/fa'

export const Header = () => {
    const [cls, setcls] = useState();
    const [menu, setmenu] = useState(false);

    const navigate = useNavigate();

    function handleClass(e) {
        var id = e.target.id;
        id == cls ? setcls('0') : setcls(id);
    }

    return (
        <>
            <div className='header'>
                <div>
                    <img src={logo} className='logo' />
                    <div className={cls == "1" ? 'rectangle slide' : ""} onClick={(e) => handleClass(e)}>
                        <img src={icon} id='1' className='appicon' />
                        <div className='sub'>
                            <img src={rec} className='subapp' />
                            <img src={rec1} className='subapp' />
                            <img src={rec2} className='subapp' />
                            <img src={rec3} className='subapp' />
                            <img src={rec4} className='subapp' />
                        </div>
                    </div>
                    <div className={cls == "2" ? 'rectangle slide' : ""} onClick={(e) => handleClass(e)}>
                        <img src={icon1} id='2' className='appicon' />
                        <div className='sub'>
                            <img src={rec} className='subapp' />
                            <img src={rec1} className='subapp' />
                            <img src={rec2} className='subapp' />
                            <img src={rec3} className='subapp' />
                        </div>
                    </div>
                    <div className={cls == "3" ? 'rectangle slide' : ""} onClick={(e) => handleClass(e)}>
                        <img src={icon2} id='3' className='appicon' />
                        <div className='sub'>
                            <img src={rec} className='subapp' />
                            <img src={rec1} className='subapp' />
                            <img src={rec2} className='subapp' />
                            <img src={rec3} className='subapp' />
                        </div>
                    </div>

                    <div className={cls == "4" ? 'rectangle slide' : ""} onClick={(e) => handleClass(e)}>
                        <img src={icon3} id='4' className='appicon' />
                        <div className='sub'>
                            <img src={rec} className='subapp' />
                            <img src={rec1} className='subapp' />
                            <img src={rec2} className='subapp' />
                            <img src={rec3} className='subapp' />
                            <img src={rec4} className='subapp' />
                        </div>
                    </div>
                    <div className={cls == "5" ? 'rectangle slide' : ""} onClick={(e) => handleClass(e)}>
                        <img src={icon4} id='5' className='appicon' />
                        <div className='sub'>
                            <img src={rec} className='subapp' />
                            <img src={rec1} className='subapp' />
                            <img src={rec2} className='subapp' />
                            <img src={rec3} className='subapp' />
                            <img src={rec4} className='subapp' />
                        </div>
                    </div>
                    <div className={cls == "6" ? 'rectangle slide' : ""} onClick={(e) => handleClass(e)}>
                        <img src={icon5} id='6' className='appicon' />
                        <div className='sub'>
                            <img src={rec} className='subapp' />
                            <img src={rec1} className='subapp' />
                            <img src={rec2} className='subapp' />
                            <img src={rec3} className='subapp' />
                            <img src={rec4} className='subapp' />
                        </div>
                    </div>
                    <div className={cls == "7" ? 'rectangle slide' : ""} onClick={(e) => handleClass(e)}>
                        <img src={icon6} id='7' className='appicon' />
                        <div className='sub'>
                            <img src={rec} className='subapp' />
                            <img src={rec1} className='subapp' />
                            <img src={rec2} className='subapp' />
                            <img src={rec3} className='subapp' />
                            <img src={rec4} className='subapp' />
                        </div>
                    </div>

                </div>
                <div>
                    <img src={team} className='subapp' />
                    <img src={gear} className='subapp' />
                    <img src={profile} className='subapp' />

                </div>
                <div className='mobile'>
                    <div className='mobilemenu'>
                        <GiHamburgerMenu onClick={() => setmenu(i => !i)} />
                        <div className={menu ? "slider show" : "slider hide"}>
                            <p>Profile</p>
                            <p>Setting</p>
                            <p>Edit</p>
                        </div>
                    </div>
                    <div>
                        <img src={team} className='subapp' />
                        <img src={gear} className='subapp' />
                        <img src={profile} className='subapp' />

                    </div>
                </div>
            </div>
            <div className='vertical'>
                <div>
                    <img src={cursur} className='subapp' />
                    <img src={hand} className='subapp' />
                    <img src={slide} className='subapp' />
                    <img src={text} className='subapp' />
                    <img src={gallary} className='subapp' />
                    <img src={search} className='subapp' />
                    <FaEraser color='white'/>
                </div>
            </div>
        </>
    )
}
