import { useState } from "react"


function App() {
  const [color, setColor] = useState('lavender')
  return (
    <>
      <div className="w-full h-screen duration-200 "
      style={{backgroundColor: color}} >
        <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
            <div className="felx flex-wrap justify-center space-x-2  shadow-lg bg-white px-3 py-2 rounded-xl">
                <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
                style={{backgroundColor: "#ff0000"}} 
                onClick={() => setColor("#ff0000")} >Red</button>

                <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
                style={{backgroundColor: "#008000"}} 
                onClick={() => setColor("#008000")}
                >Green</button>

                <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
                style={{backgroundColor: "#ffe653"}} 
                onClick={() => setColor("#ffe653")}
                >Yellow</button>

                <button className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
                style={{backgroundColor: "#ff8000"}} 
                onClick={() => setColor("#ff8000")}
                >Orange</button>

                <button className="outline-none px-4 py-1 rounded-md text-blue-500 shadow-lg"
                style={{backgroundColor: "#bde5fb"}} 
                onClick={() => setColor("#bde5fb")}
                >Blue</button>

                <button className="outline-black px-4 py-1 rounded-md text-purple-600 shadow-lg"
                style={{backgroundColor: "lavender"}} 
                onClick={() => setColor("lavender")}
                >Reset Color</button>
            </div>
        </div> 
      </div>
    </>
  )
}

export default App
