import React, { useEffect, useState } from 'react'
import './assets/css/veriables.css';
import './assets/css/app.css';
import './assets/css/buy.css';
import './assets/css/responsive.css';
import './assets/css/navbar.css';
import 'antd/dist/antd.css';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Home from './Pages/Home';
import Buy from './Pages/Buy';
import CreateCollectibleSingle from './Pages/CreateCollectibleSingle';
import CreateCollectibleMulti from './Pages/CreateCollectibleMulti';
import Profile from './Pages/Profile';
import Faq from './Pages/Faq';
import CreateCollectibleEdit from './Pages/CreateCollectibleEdit';
import CreateCollectible from './Pages/CreateCollectible';
import CollectibleMultiInfo from './Pages/CollectibleMultiInfo';
import CollectibleMultiSecond from './Pages/CollectibleMultiSecond';
import CreateCollectibleMultiplePopup from './Components/Popup/CreateCollectibleMultiplePopup';
import FinishedCollectiblePopup from './Components/Popup/FinishedCollectiblePopup';
import PlaceABidPopup from './Components/Popup/PlaceABidPopup';
import PlaceABidFollowPopup from './Components/Popup/PlaceABidFollowPopup';
import 'swiper/swiper-bundle.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { GlobalSettingsContext } from "./Contexts/GlobalSettingsContext.js";

const App = () => {

  let [mobile, setMobile] = useState(false)
  let [responsive, setResponsive] = useState("lg")

    useEffect(() => {
        let getSize = () => {
            let size = { width: window.innerWidth, height: window.innerHeight }
            setMobile(size.width < 768 ? true : false)
            if (size.width > 1600)
              setResponsive("xxl")
            if (size.width > 1200)
              setResponsive("xl")
            else if (size.width > 992)
              setResponsive("lg")
            else if (size.width > 768)
              setResponsive("md")
            else if (size.width > 320)
              setResponsive("sm")
            else
              setResponsive("xs")
          }
    }, [])

    return (
       <>
    <GlobalSettingsContext.Provider value={{ responsive, mobile }}>
        <article>
            <main> 
                <Router>
                <Navbar />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/Buy" component={Buy} exact />
                        <Route path="/CollectibleMultiInfo" component={CollectibleMultiInfo} exact />
                        <Route path="/CollectibleMultiSecond" component={CollectibleMultiSecond} exact />
                        <Route path="/CreateCollectible" component={CreateCollectible} exact />
                        <Route path="/CreateCollectibleEdit" component={CreateCollectibleEdit} exact />
                        <Route path="/CreateCollectibleMulti" component={CreateCollectibleMulti} exact />
                        <Route path="/CreateCollectibleSingle" component={CreateCollectibleSingle} exact />
                        <Route path="/Faq" component={Faq} exact />
                        <Route path="/Profile" component={Profile} exact />
                    </Switch>
                    <Footer /> 
                </Router>
            </main>
        </article>
        </GlobalSettingsContext.Provider>
       </>
    )  
}

export default App
