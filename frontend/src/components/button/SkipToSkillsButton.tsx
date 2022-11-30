import styled from "styled-components";


export const SkipToSkillsButton = () => {
    return (
        <>
            <NavContainer>
                <nav>
                    スキル<br />
                    Skills
                </nav>
            </NavContainer>
        </>
    );
}

const NavContainer = styled.nav`
    width: 100%;
    height: auto;
    text-align: center;
    background-color: #000000;
    color: #ffffff;
    border: 1px solid #000000;
    position: relative;
    display: inline-block;
    font-size: 24px;
    outline: none;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: #ffffff;
        color: #000000;
        border: 1px solid #ffffff;
        font-size: 26px;
    }
`;

