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
import useDarkMode from './hooks/useDarkMode';



function App() {
  const [isDarkMode, setDarkMode] = useDarkMode()




  

  return (
    <>
      <div>
        <Routes>

          <Route path="/" element={<Main/>}>
            <Route path="/overview" element={<Overview />} />
            <Route path="/repositories" element={<RepositoriesMe />} />
            <Route path="/stars" element={<Stars />} />
            <Route path='/followers' element={<Followers/>}/>
            <Route path='/following' element={<Following/>}/>
          </Route>


          <Route path='/users/:login' element={<UserMore />}> 
            <Route path="overview" element={<Overview />} />
            <Route path="repositories" element={<Repositories />} />
            <Route path="stars" element={<Stars />} />
            <Route path='followers' element={<Followers/>}/>
            <Route path='following' element={<Following/>}/>
          </Route>


        </Routes>

      </div>
    </>
  );
}

export default App;


