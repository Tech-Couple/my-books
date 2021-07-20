import {ThemeProvider, createGlobalStyle} from 'styled-components';

const Theme = {
    colors: {
        pink: "#FF6978",
        darkBlue: "#00173D",
        lightBlue: "#4ABDF1",
        darkGray: "#36383A",
        lightGray: "#3F4043",
        white: "#FDFCFC;",
        lightYellow: "#FFF6E5",
        green: "#EEF5DB",
    }
}

const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
`

interface Props {
    Component: any,
}

const myBooksStyle: React.FC<Props> =({Component, ...props}) => {
    return (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
            <Component {...props}></Component>
    </ThemeProvider>
    )
}

export default myBooksStyle