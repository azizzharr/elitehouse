import React, {Component} from 'react';
import Header from "../../header";
import Carousel from './../carousel/carousel'
import Whitet from "../white/white";

class App extends Component {
    render() {
        return (
            <div>

<Header/>
<Carousel/>
<Whitet/>

            </div>
        );
    }
}

export default App;