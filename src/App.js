import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './copanents/Main';
import UserMore from './copanents/UserMore';
import Followers from './pages/Followers';
import Following from './pages/Following';
import Overview from './pages/Overview';
import Repositories from './pages/Repositories';
import RepositoriesMe from './pages/RepositoriesMe';
import Stars from './pages/Stars';
import styled , { ThemeProvider } from "styled-components";
import { lightTheme , darkTheme , GlobalStyles } from './hooks/themes';
import { useState } from 'react';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
  border-bottom: ${(props) => props.theme.fontBorder};
  `;
function App() {
  const [theme, setTheme] = useState('light');


  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
        <GlobalStyles />
        <StyledApp>

          <Routes>

            <Route path="/" element={<Main themeToggler={themeToggler} />}>
              <Route path="/overview" element={<Overview />} />
              <Route path="/repositories" element={<RepositoriesMe />} />
              <Route path="/stars" element={<Stars />} />
              <Route path='/followers' element={<Followers/>}/>
              <Route path='/following' element={<Following/>}/>
            </Route>


            <Route path='/users/:login' element={<UserMore themeToggler={themeToggler}/>}> 
              <Route path="overview" element={<Overview />} />
              <Route path="repositories" element={<Repositories />} />
              <Route path="stars" element={<Stars />} />
              <Route path='followers' element={<Followers/>}/>
              <Route path='following' element={<Following/>}/>
            </Route>
          

          </Routes>

        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;


