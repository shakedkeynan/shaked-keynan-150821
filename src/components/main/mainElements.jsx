import styled from 'styled-components'

export const Div = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-evenly;
color: ${props => {
    return props.DarkMode ? "white" : "black"
    }};
text-align: -webkit-center;

`