import { SkipToSkillsButton } from "./button/SkipToSkillsButton";
import { SkipToProductsButton } from "./button/SkipToProductsButton";
import { ForContactButton } from "./button/ForContactButton";
import styled from "styled-components";
import { Divider, Grid } from "@mui/material";

export const SkipMenuCorner = () => {
    return (
        <>
            <NavWrapper>
                <Grid item xs={4}>
                    <SkipToProductsButton />
                </Grid>
                <Divider orientation="vertical" flexItem></Divider>
                <Grid item xs={4}>
                    <SkipToSkillsButton />
                </Grid>
                <Divider orientation="vertical" flexItem></Divider>
                <Grid item xs={4}>
                    <ForContactButton />
                </Grid>
            </NavWrapper>
        </>
    )
}

const NavWrapper = styled.div`
    width: 100%;
    height: auto;
    margin: 20px;
    float: center;
`;