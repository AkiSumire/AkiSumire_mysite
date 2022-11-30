import styled from "styled-components";


export const Header = () => {
    return (
        <>
            <Wrapper>
                <Title>ONO SOTARO's PORTFOLIO</Title>
            </Wrapper>
        </>
    );
}

const Title = styled.h1` 
    font-size: 26px;
    font-family: sans-serif;
    text-align: left;
    color: #ffffff;
    margin: none;
    
`;

const Wrapper = styled.div`
    padding: 20px 5px 5px 20px;
    background-color: #000000;
    
`;

