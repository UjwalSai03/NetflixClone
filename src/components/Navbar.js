import {React , useState} from 'react';
import "./Navbar.css"
import Search from '@mui/icons-material/Search';
import Notifications from '@mui/icons-material/NotificationsActive';
import ArrowDrop from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    const[isScrolled,setIsScrolled] = useState(false);
   window.onscroll =() =>{
    setIsScrolled(window.pageYOffset ===0 ? false :true);
    return () => (window.onscroll =null);

   }
         
  return (
    <div className={isScrolled ? 'navbar scrolled' : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" className="image" />
            <span>HomePage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>MyList</span>
        </div>
        <div className="right">
            <Search className='icon'/>
            <span>KIDS</span>
            <Notifications />
            <img src="https://scontent.fvtz6-1.fna.fbcdn.net/v/t31.18172-8/27993788_1224857547645117_3756336309255989456_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=KVi4r5DLA98AX-VGTRS&_nc_ht=scontent.fvtz6-1.fna&oh=00_AfBmrK2H-aVB2DIuoas_voP3mC8Mm7w-TbJvLjGXicW_gg&oe=652EAD9B" alt="" className="prof" />
            <div className="profile">
                <ArrowDrop className='icon'/>
                <div className="options">
                    <span className='setandopt'>Settings</span>
                    <span className='setandopt'>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
