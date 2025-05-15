import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive");

  return (
    <>
     <div className="w-full h-screen duration-200 flex flex-wrap justify-center" style={{backgroundColor: color}}>
        <div className="flex flex-wrap justify-center shadow-lg px-4 py-4 fixed bottom-11 bg-amber-50 rounded-3xl gap-10">
            <button onClick={() => setColor("red")}  className="outline-none  px-5 py-1 rounded-full text-red-50 shadow-lg" style={{backgroundColor: "red"}}>Red</button>
            <button onClick={() => setColor("green")} className="outline-none  px-5 py-1 rounded-full text-red-50 shadow-lg" style={{backgroundColor: "Green"}}>Green</button>
            <button onClick={() => setColor("blue")} className="outline-none  px-5 py-1 rounded-full text-red-50 shadow-lg" style={{backgroundColor: "Blue"}}>Blue</button>
            <button onClick={() => setColor("yellow")} className="outline-none  px-5 py-1 rounded-full text-orange-800 shadow-lg" style={{backgroundColor: "Yellow"}}>Yellow</button>
            <button onClick={() => setColor("purple")} className="outline-none  px-5 py-1 rounded-full text-red-50 shadow-lg" style={{backgroundColor: "Purple"}}>Purple</button>
            <button onClick={() => setColor("olive")} className="outline-none  px-5 py-1 rounded-full text-red-50 shadow-lg" style={{backgroundColor: "Olive"}}>Olive</button>
            <button onClick={() => setColor("orange")} className="outline-none  px-5 py-1 rounded-full text-red-50 shadow-lg" style={{backgroundColor: "Orange"}}>Orange</button>
            <button onClick={() => setColor("black")} className="outline-none  px-5 py-1 rounded-full text-red-50 shadow-lg" style={{backgroundColor: "Black"}}>Black</button>
        </div>
     </div>
    </>
  )
}

export default App
