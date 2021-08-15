import styled from 'styled-components'

export const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
color:${props => props.DarkMode ? 'white' : 'black'}

`
export const DivElement = styled.div`
text-align: center;
border: 1px solid;
width:15%;


`