import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import {
   GsapFrom,
   GsapTo,
   GsapFromTo,
   GsapTimeline,
   GsapStagger,
   GsapScrollTrigger,
   GsapText,
   Landing,
} from "./pages"

const App = () => {
   return (
      <div className="w-full min-h-screen bg-black">
         <Router>
            <Routes>
               <Route path="/gsapto" element={<GsapTo />} />
               <Route path="/gsapfrom" element={<GsapFrom />} />
               <Route path="/gsapfromto" element={<GsapFromTo />} />
               <Route path="/gsaptimeline" element={<GsapTimeline />} />
               <Route path="/gsapstagger" element={<GsapStagger />} />
               <Route path="/gsapscrolltrigger" element={<GsapScrollTrigger />} />
               <Route path="/gsaptext" element={<GsapText />} />
               <Route path="/" element={<Landing />} />
            </Routes>
         </Router>
      </div>
   )
}

export default App
