import { useState } from 'react';
import {
  CssBaseline,
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBar, Drawer } from '../../components/styles';
import Logout from '../Logout';
import ClientSideBar from './ClientSideBar';
import ClientProfile from './ClientProfile';
import ClientHomePage from './ClientHomePage';
import ClientEditPhoto from './ClientEditPhoto';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import * as Hi from 'react-icons/hi';
import { useSelector } from 'react-redux';
import * as Bs from 'react-icons/bs';
import * as Bi from 'react-icons/bi';

import AccountMenu from '../../components/AccountMenu';
import ClientOptions from './ClientOptions';
import ClientAccount from './ClientAccount';
import ClientContact from './ClientContact';
import ClientCurriculum from './ClientCurriculum';
import ClientSchedule from './ClientSchedule';

import About from '../../components/About/About';
import Help from '../../components/Help/Help';
import CompanyDetails from '../../components/Companies/CompanyDetails';
import JobDetails from '../../components/Jobs/JobDetails';
import CompanyJobs from '../company/CompanyJobs';
import JobsResults from '../../components/Jobs/JobsResults';

import CategoryJobs from '../../components/Categories/CategoryJobs';
import JobsIndex from '../../components/Jobs/JobsIndex';
import CompaniesIndex from '../../components/Companies/CompaniesIndex';
import CompaniesResults from '../../components/Companies/CompaniesResults';

const ClientDashboard = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { currentUser } = useSelector((state) => state.user);

  const [ExtendNavbar, setExtendNavbar] = useState(false);
  const toggle = () => setExtendNavbar(!ExtendNavbar);

  return (
    <Container>
      <Nav>
        <Group to='/'>
          <Logo src={logo} />
          <LogoText>mpreguei</LogoText>
        </Group>

        <MenuContainer>
          <Menu>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/jobs'>Vagas</NavLink>
            <NavLink to='/companies'>Empresas</NavLink>
            <NavLink to='/client/schedule'>
              <Hi.HiOutlineClipboardList />
            </NavLink>
            <AccountMenu />
          </Menu>
        </MenuContainer>

        <ButtonRes
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {ExtendNavbar ? <>&#10005;</> : <> &#8801; </>}
        </ButtonRes>
      </Nav>
      {ExtendNavbar && (
        <NavbarExtendedContainer>
          <NavLink onClick={toggle} to='/'>
            Home
          </NavLink>
          <NavLink onClick={toggle} to='/jobs'>
            Vagas
          </NavLink>
          <NavLink onClick={toggle} to='/companies'>
            Empresas
          </NavLink>
          <NavLink onClick={toggle} to='/client/schedule'>
            <Hi.HiOutlineClipboardList />
          </NavLink>
          <AccountMenu />
        </NavbarExtendedContainer>
      )}

      <Routes>
        <Route path='/' element={<ClientHomePage />} />
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/jobs' element={<JobsIndex />} />
        <Route path='/Client/Schedule' element={<ClientSchedule />} />
        <Route exact path='/categories/:id/jobs' element={<CategoryJobs />} />
        <Route path='/companies' element={<CompaniesIndex />} />
        <Route path='/companies/search' element={<CompaniesResults />} />
        <Route path='/companies/company/:id' element={<CompanyDetails />} />
        <Route path='/companies/company/:id/jobs' element={<CompanyJobs />} />
        <Route path='/jobs/search' element={<JobsResults />} />
        <Route path='/jobs/job/:id' element={<JobDetails />} />

        <Route element={<ClientSideBar />}>
          <Route path='/profile' index element={<ClientProfile />} />
          <Route path='/Client/edit-photo' element={<ClientEditPhoto />} />
          <Route path='/Client/Curriculum' element={<ClientCurriculum />} />
          <Route path='/Client/Contact' element={<ClientContact />} />
          <Route path='/Client/Options' element={<ClientOptions />} />
          <Route path='/Client/Account' element={<ClientAccount />} />
        </Route>

        <Route path='/logout' element={<Logout />} />
        <Route path='/about' element={<About />} />
        <Route path='/help' element={<Help />} />
      </Routes>

      <Footer>
        <FooterTop>
          <Menu>
            <FooterLink to='/'>Home</FooterLink>
            <FooterLink to='/jobs'>Ver Vagas</FooterLink>
            <FooterLink to='/companies'>Empresas</FooterLink>
          </Menu>
          <Group to='/'>
            <Logo src={logo} />
            <LogoText>mpreguei</LogoText>
          </Group>
          <Menu>
            <FooterLink to='/help'>Ajuda</FooterLink>
            <FooterLink to='/about'>Quem Somos</FooterLink>
            <FooterLink to='/profile'>Perfil</FooterLink>
          </Menu>
        </FooterTop>

        <FooterMid>
          <Menu>
            <MediaLink
              to='https://www.facebook.com/profile.php?id=100094607901009'
              target='_blank'
            >
              <Bi.BiLogoFacebook />
            </MediaLink>
            <MediaLink
              to='https://www.instagram.com/empreguei_oficial/'
              target='_blank'
            >
              <Bs.BsInstagram />
            </MediaLink>
            <MediaLink
              to='https://www.linkedin.com/company/empreguei.com.br/'
              target='_blank'
            >
              <Bi.BiLogoLinkedin />
            </MediaLink>
          </Menu>
        </FooterMid>
        <FooterBottom>
          © 2023 Empreguei - Todos os direitos reservados.
        </FooterBottom>
      </Footer>
    </Container>
  );
};

export default ClientDashboard;

const styles = {
  boxStyled: {
    backgroundColor: (theme) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  toolBarStyled: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    px: [1],
  },
  drawerStyled: {
    display: 'flex',
  },
  hideDrawer: {
    display: 'flex',
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
};

const Container = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 175.5%;
  }
`;

const Nav = styled.nav`
  display: flex;
  box-shadow: 0px 8px 5px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.8);
  background-color: var(--white);
  align-items: center;
  padding: 20px 0px 0px 20px;
  justify-content: space-between;
  height: 10vh;
  @media (max-width: 768px) {
    transition: 0.5s ease-in-out;
  }
`;

const Logo = styled.img`
  height: 80px;
  padding: 0;
`;

const Menu = styled.div`
  display: flex;
`;

const MenuContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarExtendedContainer = styled.div`
  transition: 0.5s ease-in-out;
  display: none;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  color: var(--black);
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 20px;
  list-style-type: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0px 20px;
  position: relative;
  transition: 0.5s ease-in-out;
  line-height: 2;
  &:before {
    content: '';
    width: 0;
    height: 3px;
    border-radius: 2px;
    background-color: black;
    position: absolute;
    bottom: 9px;
    left: 50%;
    transition: width 0.4s, left 0.4s;
  }
  &:hover {
    transition: 0.5s ease-in-out;
  }
  &:hover:before {
    transition: 0.5s ease-in-out;
    width: 100%;
    left: 0;
  }
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Group = styled(Link)`
  display: flex;
  align-items: end;
  text-decoration: none;
  color: black;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoText = styled.p`
  font-size: 50px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavPic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const ButtonRes = styled.div`
  transition: 0.5s ease-in-out;
  margin-right: 1rem;
  display: none;
  font-size: 40px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

//footer

const Footer = styled.footer``;

const FooterTop = styled.div`
  display: flex;
  backdrop-filter: blur(0.8);
  position: relative;
  max-height: 100%;
  background-color: var(--white);
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding: 20px;
  justify-content: space-between;
  border-bottom: 3px solid #727174;
  margin: 50px;
  @media (max-width: 768px) {
    width: auto;
    margin: 0;
    margin-bottom: 50px;
    margin-top: 50px;
  }
`;

const FooterLink = styled(Link)`
  color: var(--black);
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 20px;
  list-style-type: none;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0px 20px;
  position: relative;
  transition: 0.5s ease-in-out;
  line-height: 2;
  &:before {
    content: '';
    width: 0;
    height: 3px;
    border-radius: 2px;
    background-color: black;
    position: absolute;
    bottom: 4px;
    left: 50%;
    transition: width 0.4s, left 0.4s;
  }
  &:hover {
    transition: 0.5s ease-in-out;
  }
  &:hover:before {
    transition: 0.5s ease-in-out;
    width: 100%;
    left: 0;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 0px 10px;
  }
`;
const MediaLink = styled(Link)`
  background-color: black;
  color: white;
  font-size: 30px;
  padding: 20px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0px 20px;
  text-decoration: none;
  text-decoration-line: none;
  list-style: none;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }
`;

const FooterMid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 17px;
  margin: 50px 0px;
  @media (max-width: 768px) {
    width: auto;
    align-items: center;
    justify-content: center;
  }
`;
