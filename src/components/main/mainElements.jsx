import styled from 'styled-components'

export const Div = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-evenly;
color: ${props => {
    console.log(props.DarkMode)
    return props.DarkMode ? "white" : "black"
    }};
text-align: -webkit-center;

`