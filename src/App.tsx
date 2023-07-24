import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import userFirstPage from "./Components/userFirstPage"
import SecondPage from './Components/UserSecondPage'
import ThirdPage from './Components/userThirdPage'
import './App.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom';



const App = () => {
  // const [count, setCount] = useState(0)
  

  return (
      
   
      <BrowserRouter>
      <Switch>
        
          <Route path="/home" component={userFirstPage} />
          <Route path="/secondPage" component={SecondPage} />
          <Route path="/thirdPage" component={ThirdPage} />
      </Switch>
  </BrowserRouter>
    
  )
}

export default App
