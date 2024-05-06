import { useTheme, useThemeUpdate } from "./ThemeContext"



const ContextComponent = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme? '#333' : '#CCC',
        color: darkTheme? '#CCC' : '#333',
        padding: '2rem',
        marging: 'rem'
    }
    return(
        <>
            <div style={themeStyles}>Theme</div>
            <button onClick={toggleTheme}>Toggle theme</button>
        </>
    )
}


export default ContextComponent