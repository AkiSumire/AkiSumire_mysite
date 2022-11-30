import { Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import styled from "styled-components";
import imgUrl from "../assets/img/mypic.jpg";

export const ProfileSection = () => {
    return (
        <>
            <Profile>
                <Title>
                    プロフィール<br />
                    Profile
                </Title>
            
                <Grid container>
                    <Grid item xs={6}>
                        <img src={imgUrl} 
                        alt="imgUrl"
                        style={{
                            width: '100%',
                            height: 'auto',
                            padding: '20px'
                            }}
                        />
                    </Grid>
                
                    <Grid item xs={6}>
                        <List
                            sx={{
                                width: '100%',
                                padding: '20px',
                                bgcolor: 'Background.paper',
                            }}
                        >
                            <ListItem>
                                <ListItemText primary="小野　壮太郎" secondary="Ono Sotaro" />
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem>
                                <ListItemText primary="在籍校 School attended" secondary="東京デザインテクノロジーセンター専門学校　プログラマー専攻 Tokyo Design Technology Center Vocational School Programmer Major" />
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem>
                                <ListItemText primary="誕生日 Birthday" secondary="平成12年8月1日 1 Aug 2000" />
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem>
                                <ListItemText primary="趣味 Hobbies" secondary="鉄道旅行、風景写真 Train travel, Photos" />
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem>
                                <ListItemText primary="学習領域 Learning area" secondary="WEBフロント・バックエンド、クラウドサービス（Azure）、モバイルアプリ（Flutter） WEB Frontend, Backend, Cloud Service(Azure), Mobile Application Develop(Flutter)" />
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem>
                                <ListItemText primary="好きな食べ物" secondary="ねぎとろ、サーモンのたたき、醤油・豚骨ラーメン" />
                            </ListItem>
                            <Divider variant="middle" />
                            <ListItem>
                                <ListItemText primary="好きなアーティスト" secondary="ONE OK ROCK 、Linkin Park" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Profile>
        </>
    );
}



const Title = styled.h1`
    text-align: center;
    font-size: 48px;
    padding: 20px 0;
`;

const Profile = styled.div`
    width: 100%;
    height: auto;
    background-color: #d3d3d3;
    padding: 30px 0;
    
`;

