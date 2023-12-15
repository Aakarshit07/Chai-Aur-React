import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'
// Step 3.
function App() {

  return (
    <UserContextProvider>
      <h1>React With Chai / Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    
  )
}

export default App
