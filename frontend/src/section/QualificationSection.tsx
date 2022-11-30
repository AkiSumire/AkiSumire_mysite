import styled from "styled-components";

export const QualificationSection = () => {
    return (
        <>
            <Qualification>
                <Title>
                    資格<br />
                    Qualification
                </Title>
                <QTable>
                    <table>
                        <tr>
                            <th>取得年月日</th>
                            <th>資格名</th>
                        </tr>
                        <tr>
                            <td>令和3（2021）年6月29日</td>
                            <td>Microsoft Azure AI Fundamentals（AI-900）</td>
                        </tr>
                        <tr>
                            <td>令和4（2022）年1月31日</td>
                            <td>滋慶教育科学研究所認定コミュニケーション スキルアップ検定</td>
                        </tr>
                        <tr>
                            <td>令和4（2022）年3月31日</td>
                            <td>日本ホスピタリティ推進協会 アソシエイト ホスピタリティ・コーディネーター</td>
                        </tr>
                        <tr>
                            <td>令和4（2022）年9月15日</td>
                            <td>Azure Cloud Fundamentals（AZ-900）</td>
                        </tr>
                    </table>
                </QTable>
            </Qualification>
        </>
    );
}


const Qualification = styled.div`

`;

const Title = styled.div`
    text-align: center;
    font-size: 48px;
    padding: 20px 0;
`;

const QTable = styled.div`

`;




                   
                        
                        
                        
                        