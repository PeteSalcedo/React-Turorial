import React from 'react'
import './App.css'
import TextBox from './component/TextBox.js'
import Header from './component/header.js'

import MemeArea from './component/imagefield'

const App = () => {
    return(
        <div>
        <Header />,
        <TextBox />
        <MemeArea />
        </div>
    )
}

export default App;