import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import {Box, Tab, Tabs, Button  } from "@mui/material";

import profile from "../../assets/profile.svg";
import plus from "../../assets/plus.svg";

const MyPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [navigateUrl, setNavigateUrl] = useState("");

    const data = [
        {
          files: plus,
          title: "나이키 신발",
          price: 240000,
          description: "나이키 운동화 사이즈 300",
          productId: 1,
        },
        {
          files: plus,
          title: "아디다스 신발",
          price: 340000,
          description: "아디다스 삼선 슬리퍼 사이즈260",
          productId: 2,
        },
        {
          files: plus,
          title: "닥터마틴 로퍼",
          price: 270000,
          description: "닥터마틴 로퍼 사이즈 270",
          productId: 3,
        },
        {
          files: plus,
          title: "흰색 셔츠",
          price: 20000,
          description: "미개봉 흰색 셔츠",
          productId: 4,
        },
      ];


    

    const handleTabChange = (e, tabIndex) => {
        console.log(tabIndex);
        setCurrentTabIndex(tabIndex);
    };

    const productAddPageButtonClick = () => {
        setNavigateUrl("/write");
        navigate(navigateUrl);

    }

    return (
        <ContentLayout>
            <Wrapper>
                <Box sx={{display: 'flex', alignItems: 'flex-start', width: 1230}}>
                    <Tabs value={currentTabIndex} onChange={handleTabChange} variant="fullWidth">
                        <Tab style={{width: '140px'}} label='마이 프로필' />
                        <Tab label='구매 내역' />
                        <Tab label='판매 내역' />
                    </Tabs>
                </Box>
                {currentTabIndex === 0 && (
                    <Box sx={{ p: 3 }}>
                        <Container>
                            <Title>프로필</Title>
                            <ProfileContainer>
                                <img src={profile} alt="profile"/>
                                <div>Nickname</div>
                                <div>
                                    <ChangeImgButton>사진 변경</ChangeImgButton>
                                </div>
                            </ProfileContainer>
                            <InfoWrapper>
                                <div>이메일</div>
                                <InfoText>tkgksw@naver.com</InfoText>
                            </InfoWrapper>
                            <InfoWrapper>
                                <div>주소</div>
                                <InfoText>경기도 인천시 연수구</InfoText>
                            </InfoWrapper>
                            <InfoWrapper>
                                <div>전화번호</div>
                                <InfoText>010-1234-4698</InfoText>
                            </InfoWrapper>
                        </Container>   
                    </Box>
                )}
                {currentTabIndex === 1 && (
                    <Box sx={{ p: 3 }}>
                        <Container>
                             <Title>결제내역</Title>
                             <Table>
                                <tr>
                                    <TableTh>결제일</TableTh>
                                    <TableTh>상품명</TableTh>
                                    <TableTh>결제금액</TableTh>
                                    <TableTh>결제번호</TableTh>
                                    <TableTh>결제상태</TableTh>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.08</TableTd>
                                    <TableTd>아디다스 슬리퍼</TableTd>
                                    <TableTd>43,000원</TableTd>
                                    <TableTd>0000003</TableTd>
                                    <TableTd>결제예정</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.06</TableTd>
                                    <TableTd>나이키 신발</TableTd>
                                    <TableTd>89,000원</TableTd>
                                    <TableTd>0000002</TableTd>
                                    <TableTd>결제완료</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.05</TableTd>
                                    <TableTd>나이키 티셔츠</TableTd>
                                    <TableTd>56,000원</TableTd>
                                    <TableTd>0000001</TableTd>
                                    <TableTd>결제완료</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.04</TableTd>
                                    <TableTd>아디다스 슬리퍼2</TableTd>
                                    <TableTd>43,000원</TableTd>
                                    <TableTd>0000003</TableTd>
                                    <TableTd>결제예정</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.03</TableTd>
                                    <TableTd>나이키 신발2</TableTd>
                                    <TableTd>89,000원</TableTd>
                                    <TableTd>0000002</TableTd>
                                    <TableTd>결제완료</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.02</TableTd>
                                    <TableTd>나이키 티셔츠2</TableTd>
                                    <TableTd>56,000원</TableTd>
                                    <TableTd>0000001</TableTd>
                                    <TableTd>결제완료</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.01</TableTd>
                                    <TableTd>나이키 티셔츠3</TableTd>
                                    <TableTd>56,000원</TableTd>
                                    <TableTd>0000001</TableTd>
                                    <TableTd>결제완료</TableTd>
                                </tr>
                             </Table>
                             <div class="pagination">
                                <a href="#">&laquo;</a>
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">&raquo;</a>
                            </div>

                        </Container>
                        <Container>
                        <Title>내가 작성한 리뷰</Title>
                              <Table>
                                <tr>
                                    <TableTh>리뷰 작성일</TableTh>
                                    <TableTh>상품명</TableTh>
                                    <TableTh>리뷰 내용</TableTh>
                                    <TableTh>별점</TableTh>
                                    <TableTh>결제날짜</TableTh>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.11</TableTd>
                                    <TableTd>아디다스 슬리퍼</TableTd>
                                    <TableTd> 신기 편해요...</TableTd>
                                    <TableTd> 4</TableTd>
                                    <TableTd>2024.06.08</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.10</TableTd>
                                    <TableTd>나이키 신발</TableTd>
                                    <TableTd>색이 예쁘고 발이 편해요...</TableTd>
                                    <TableTd>5</TableTd>
                                    <TableTd>2024.06.06</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.09</TableTd>
                                    <TableTd>아디다스 슬리퍼</TableTd>
                                    <TableTd> 신기 편해요...</TableTd>
                                    <TableTd> 4</TableTd>
                                    <TableTd>2024.06.05</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.08</TableTd>
                                    <TableTd>나이키 신발</TableTd>
                                    <TableTd>색이 예쁘고 발이 편해요...</TableTd>
                                    <TableTd>5</TableTd>
                                    <TableTd>2024.06.04</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.07</TableTd>
                                    <TableTd>아디다스 슬리퍼</TableTd>
                                    <TableTd> 신기 편해요...</TableTd>
                                    <TableTd> 4</TableTd>
                                    <TableTd>2024.06.03</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.06</TableTd>
                                    <TableTd>나이키 신발</TableTd>
                                    <TableTd>색이 예쁘고 발이 편해요...</TableTd>
                                    <TableTd>5</TableTd>
                                    <TableTd>2024.06.02</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.05</TableTd>
                                    <TableTd>아디다스 슬리퍼</TableTd>
                                    <TableTd> 신기 편해요...</TableTd>
                                    <TableTd> 4</TableTd>
                                    <TableTd>2024.06.01</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.04</TableTd>
                                    <TableTd>나이키 신발</TableTd>
                                    <TableTd>색이 예쁘고 발이 편해요...</TableTd>
                                    <TableTd>5</TableTd>
                                    <TableTd>2024.05.08</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.03</TableTd>
                                    <TableTd>아디다스 슬리퍼</TableTd>
                                    <TableTd> 신기 편해요...</TableTd>
                                    <TableTd> 4</TableTd>
                                    <TableTd>2024.05.07</TableTd>
                                </tr>
                                <tr>
                                    <TableTd>2024.06.02</TableTd>
                                    <TableTd>나이키 신발</TableTd>
                                    <TableTd>색이 예쁘고 발이 편해요...</TableTd>
                                    <TableTd>5</TableTd>
                                    <TableTd>2024.05.06</TableTd>
                                </tr>
                             </Table>
                             <div class="pagination">
                                <a href="#">&laquo;</a>
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">&raquo;</a>
                            </div>

                        </Container>
                        <Container>
                            <Title>찜목록</Title>
                            <SearchResultList>
                                {data.map((product) => (
                                    <SearchItem key={product.productId}>
                                        <ItemImageBox>
                                            <ItemImage src={product.files} alt={product.title} />
                                        </ItemImageBox>

                                        <ItemTitle>{product.title}</ItemTitle>
                                        <ItemInfo>{product.description}</ItemInfo>
                                        <ItemPrice>
                                            {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        </ItemPrice>
                                        <Icon>❤️</Icon>
                                    </SearchItem>
                                ))}
                            </SearchResultList>
                        </Container>
                        
                    </Box>
                )}
                {currentTabIndex === 2 && (
                    <Box sx={{ p: 3 }}>
                        <BoxWrapper>
                            <Button style={{width: "100px",}} onClick={productAddPageButtonClick}  sx={{ mr: 2, color: "white", backgroundColor: "black", }} variant="contained" size="small">
                                상품 등록
                            </Button>
                            <ContentWrapper>
                                <div>
                                    <Container>
                                    <Title>등록된 상품 목록</Title>
                                        <SearchResultList>
                                            {data.map((product) => (
                                                <SearchItem key={product.productId}>
                                                    <ItemImageBox>
                                                        <ItemImage src={product.files} alt={product.title} />
                                                    </ItemImageBox>

                                                    <ItemTitle>{product.title}</ItemTitle>
                                                    <ItemInfo>{product.description}</ItemInfo>
                                                    <ItemPrice>
                                                        {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                                    </ItemPrice>
                                                </SearchItem>
                                            ))}
                                        </SearchResultList>
                                        <div class="pagination">
                                            <a href="#">&laquo;</a>
                                            <a href="#">1</a>
                                            <a href="#">2</a>
                                            <a href="#">3</a>
                                            <a href="#">4</a>
                                            <a href="#">5</a>
                                            <a href="#">6</a>
                                            <a href="#">&raquo;</a>
                                        </div>
                                    </Container>
                                    <Title>상품판매 현황</Title>
                                    <div>
                                       차트라이브러리 
                                    </div>
                                    <Title>리뷰 관리</Title>
                                    <div>
                                        댓글 UI
                                    </div>
                                </div>
                               
                            </ContentWrapper>
                        </BoxWrapper>
                    </Box>
                )}
            </Wrapper>
        </ContentLayout>
    );
};

export default MyPage;

const ContentLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Wrapper = styled.div`
    width: 1230px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 1px solid red;
    margin-top: 150px;
`;

const BoxWrapper = styled.div`
    width: 1230px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentWrapper = styled.div`
    width: 1230px;
    display: flex;
    justify-content: space-around;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 1px solid red;
`;

const Title  = styled.div`
    margin: auto;
    font-size: 24px;
    font-weight: bold;
`;

const ProfileContainer = styled.div`
    width: 600px;
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 40px;
    margin-bottom: 30px;
    padding: 0 20px;
    gap: 10px;
    background-color: #F4F4F4;
`;

const ChangeImgButton = styled.button`
    width: 100px;
    height: 37px;
    margin-left: 360px;
    background-color: black;
    color: white;
    border: 1px solid black;
    cursor: pointer;
`;

const InfoWrapper = styled.div`
    width: 644px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15px;
    gap: 10px;
`;

const InfoText  = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    border: 1px solid #D1D4D8;
    color: #b1b5b9;
    overflow-x: auto;

`;

const SearchResultList = styled.div`
    display: grid;
    row-gap: 40px;
    column-gap: 20px;
    grid-template-columns: 150px 150px 150px 150px;
`;

const SearchItem = styled.div`
    width: 120px;
`;

const ItemImageBox = styled.div`
    border-radius: 10px;
    background-color: rgb(244, 244, 244);
`;
const ItemImage = styled.img`
    width: 120px;
`;

const ItemTitle = styled.div`
    width: 120px;
    font-weight: bold;
`;

const ItemInfo = styled.div`
    width: 120px;
    height: 24px;
    font-size: 14px;
    margin-bottom: 20px;
`;

const ItemPrice = styled.div`
    font-weight: bold;
`;
const Icon = styled.div`
    /* 아이콘 스타일 */
    margin-right: 5px;
`;

const Table = styled.table`
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
`;

const TableTh = styled.th`
    padding: 6px 15px;
    background: #42444e;
    color: #fff;
    text-align: left;

`;

const TableTd = styled.td`
    padding: 6px 15px;
`;