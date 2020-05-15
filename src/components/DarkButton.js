import React, { useState, useEffect } from 'react'

import ToggleButton from 'react-toggle-button'


const DarkButton = () => {
    const [darkMode, setDarkMode] = useState(getInitialTheme())
    
     if (darkMode) {
        document.body.classList.replace('dark-vertion', 'white-vertion')
     } else {
        document.body.classList.replace('white-vertion', 'dark-vertion')
     }
     
     function getInitialTheme() {
        const theme = JSON.parse(localStorage.getItem('dark'))
        return theme || false
     }

     useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(darkMode))
     }, [darkMode])


    return (
        <ToggleButton
        inactiveLabel={'🌞'}
        activeLabel={'🌒'}
        colors={{
          activeThumb: {
            base: '#100e17',
          },
          inactiveThumb: {
            base: 'white',
          },
          active: {
            base: 'rgb(207,221,245)'
          }
        }}
        value={ (darkMode) || false }
        onToggle={(darkMode) => {
          setDarkMode(prevMode => !prevMode)
        }}
         />

    )
}


export default DarkButton
