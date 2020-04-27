import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'logged in' : 'logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Context</li>
            </ul>
        </nav>
    );
}

export default Navbar;

/*

CLASS COMPONENT EXAMPLE

export default class Navbar extends Component {

    This is one way of getting the context data, but works only on class components.
    static contextType = ThemeContext;
    const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark

    render() {
        // The consumer is another way to get the context data
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark
                    return (
                        <nav style={{ background: theme.ui, color: theme.syntax }}>
                            <h1>Context App</h1>
                            <div onClick={toggleAuth}>
                                {isAuthenticated ? 'logged in' : 'logged out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Context</li>
                            </ul>
                        </nav>
                    )
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}
The ThemeContext.Consumer consumes the indicated context. It is expects a function where the context is passed as a parameter
    and the component jsx is returned.
    Benefits:
    This approach works on functional components too.css
    We can consume multiple contexts in one component
 */
