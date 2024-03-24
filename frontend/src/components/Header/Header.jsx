import React,{useRef,useEffect , useContext} from 'react' ;
import { Container, Row,Button} from 'reactstrap';
import {NavLink,Link , useNavigate , useLocation} from 'react-router-dom';

import logo from '../../assets/images/logo.webp';
import './header.css'

import { AuthContext } from '../../context/AuthContext';


const nav__links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/gallery',
        display:'Gallery'
    },
    {
        path:'/tours',
        display:'Tours'
    },
]



const Header = () => {
const location = useLocation();
const isActive = location.pathname === '/dashboard' || location.pathname === '/admin-dashboard' ;
const isLoginPage=location.pathname==='/login';
const headerRef = useRef(null)
const menuRef = useRef(null)
const navigate = useNavigate();
const {user,dispatch} = useContext(AuthContext)
const destination = user && user.role === 'admin' ? '/admin-dashboard' : '/dashboard';


   
const logout = () =>{
    dispatch({type:'LOGOUT'})
    navigate('/');
}

const stickyHeaderfunc = ()=>{
    window.addEventListener('scroll',()=>{
        if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
            headerRef.current.classList.add('sticky__header')
        }else{
            headerRef.current.classList.remove('sticky__header')
        }
    })
}

useEffect(()=>{
    stickyHeaderfunc()
    return window.removeEventListener('scroll',stickyHeaderfunc)
})

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')
    

    return <header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className='nav__wrapper d-flex align-items-center justify-content-between'>
                    {/*===== logo ===== */}
                    <div className='logo'>
                        <img src={logo} alt=""/>  

                        
                    </div>
                    {/*===== logo end ===== */}

                    {/*===== Menu Start ===== */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu} >
                        <ul className="menu d-flex align-items-center gap-5" style={{ marginLeft:'-25rem' }}>
                              {nav__links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink to={item.path} className={navClass=>navClass.isActive ? 'active__link' : ''} >{item.display}</NavLink>
                                    </li>
                                ))}  
                                
                        </ul>
                    </div>

                    {/*===== Menu end ===== */}

                    <div className="nav__right d-flex align-items-center gap-4 ">
                        <div className="nav__btns d-flex align-items-center gap-4 ">

                            {
                                user? <>
                                    <h3 className='text'>{user.data.username}</h3><Link to={destination} className={isActive?'link-active' : 'link'}><i className="ri-dashboard-line" style={{ fontSize: '2.3rem' }}></i></Link>
                                    <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                                </> : <>
                                <Button className={isLoginPage ? 'active-color' : 'normal-color'}>
                                <Link to='/login'>Login</Link></Button>

                              <Button className="btn primary__btn">
                                <Link to='/register'>Register</Link></Button>
                                </>
                            }

                              
                        </div>
                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                            
                        </span>
                    </div>
                </div>
            </Row>
        </Container>
    </header> 

};

export default Header;