import React, { useContext } from 'react';
import BookingForm from './MultiBooking';
import Logo from 'assets/images/pppn-logo.png';
import {FiChevronLeft, FiMenu} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Layout, Row, Col, Menu, Dropdown} from 'antd';
import {UserContext} from 'context/User';
import MenuItem from 'antd/lib/menu/MenuItem';
const {Header, Content} = Layout;

function Index(){
    
    const {user} = useContext(UserContext);
    const menu = (
        <Menu>
          <Menu.Item key="0">
          <a href="https://pppn.co.uk/dashboard/">
                <span >{user ? "My account" : "Sign In"}</span>
            </a> 
          </Menu.Item>
          <Menu.Divider />
          {user && 
            <Menu.Item key="2">
              <a onClick={()=> {localStorage.removeItem('tokenpppn');sessionStorage.removeItem('tokenpppn'); window.location.reload()}}>
                <span >Sign Out</span>
                </a>
            </Menu.Item>
          }
          <MenuItem>
         <Link to="/"> <div className="back">
                    Home page</div></Link>
          </MenuItem>
        </Menu>
      );
    return(
        <Layout>
            <Header className="hedaer-booking-page">
                <Link to="/"> <div className="back">
                   <FiChevronLeft/>Back to home</div></Link>
                <div className="logo">                                
                    <img alt="" src={Logo}/>
                </div>
                <div className="menuBtn">
                <Dropdown overlay={menu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <FiMenu/>
                    </a>
                </Dropdown>
                </div>
                <div className="login">
                    <div>
                            <a href="https://pppn.co.uk/dashboard/">
                                <span >{user ? "My account" : "Sign In"}</span>
                            </a> 
                    </div>&nbsp;&nbsp;&nbsp;
                    <div>
                    {user &&<a onClick={()=> {localStorage.removeItem('tokenpppn');sessionStorage.removeItem('tokenpppn'); window.location.reload()}}>
                            <span >Sign Out</span>
                        </a>}
                    </div>
                </div>
               
            </Header>
            <Content className="booking-page">                
            <div className="box-top-one"></div>
            <div className="box-top-two"></div>
            <div className="box-bottom-one"></div>
            <div className="box-bottom-two"></div>
               
                <BookingForm/>
            </Content>
        </Layout>
        
    )
}

export default Index;