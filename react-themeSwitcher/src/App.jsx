import './App.css'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'
import { ThemeContextProvider } from './context/theme'
import { useEffect, useState } from 'react';

function App() {

  const [themeMode, setThemeMode] = useState("light");
  // Creating methods with the same name as we have in context so it automatically adds the functionality to it.
  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }


  // theme changing classes in html/ injecting classes in html 

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")

    document.querySelector("html").classList.add(themeMode);
  }, [themeMode])


  return (
    <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
              
          <div className="w-full max-w-sm mx-auto">
           <Card />      
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
