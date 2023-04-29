import { Normalize } from 'styled-normalize'
import { Global } from './Global'
import { Screen } from '@/pages/screen/Screen'
import { userLogin } from '@/services/login';
import { useEffect } from 'react';


function App() {

  const getToken = async () => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      const newToken = await userLogin();
      localStorage.setItem('jwt', newToken);
    };
  };

  useEffect(() => {
    getToken();
  }, []);
  
  return (
    <div className="App">
      <Normalize />
      <Global />
      <Screen />
    </div>
  )
}

export default App
