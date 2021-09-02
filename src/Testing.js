import React from 'react'
import styled from 'styled-components'

//rafc react arrow function component
const Testing = () => {
    return (
        <Wrapper>
            <h3>Hello</h3>
        </Wrapper>
    )
}

// Styled component don't add functionality
// but only the styling
const Wrapper = styled.section`
    h3 {
        color: red;
    }
`
export default Testing;