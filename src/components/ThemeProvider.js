// useState: To Save the scroll event to state.
import React, { useState } from 'react';

// Context variable goes here
const { Provider, Consumer } = React.createContext()


const ThemeProvider = (props) => {

    // Save Scroll Position
    const [scrollPosition, setScrollPosition] = useState(0)

    // Get Scroll Y Position
    document.addEventListener('scroll', () => {
        console.log(window.scrollY)
        setScrollPosition(window.scrollY)
    })

    return (
        <Provider value={{
            scrollPosition,
        }}>

            {props.children}
        </Provider>
    );
};

// Higher order component goes here.
// Consumer for this Provider
export const withTheme = C => props => (

    // Everything passed to this Function (withTheme), will be a child to it.
    <Consumer>

        {value => <C {...value} {...props} />}

    </Consumer>

)

export default ThemeProvider;