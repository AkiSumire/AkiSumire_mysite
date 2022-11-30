import styled from "styled-components";

export const TopSection = () => {
    return (
        <>
            <Wrapper>
                <Slogan>
                    I'M<br />
                    WEB &<br />
                    MOBILEAPP<br />
                    DEVELOPER<br />
                </Slogan>
            </Wrapper>
            <SkipMenuWrapper>
                <SkipMenuCorner />
            </SkipMenuWrapper>
        </>
    );
}

const Slogan = styled.h1`
    text-align: right;
    font-size: 90px;
    color: #ffffff;
`;

const SkipMenuCorner = styled.div`
    margin: none;
`;

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 5px;
    background-color: #000000;
`;

const SkipMenuWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 20px 5px;
    background-color: #000000;
`;