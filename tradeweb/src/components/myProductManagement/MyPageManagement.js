import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import styled from '@emotion/styled';
import {Box, Tab, Tabs, Button  } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';

import profile from "../../assets/profile.svg";
import plus from "../../assets/plus.svg";
import MyProfile from '../userAccount/MyProfile';
import UserPayment from '../payment/UserPayment';

const MyPageManagement = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const [navigateUrl, setNavigateUrl] = useState("");
    const [reviewList, setReviewList] = useState([]);




    const reviewData = [
        {
            files: profile,
            nickName: "nickname",
            starRate: 4,
            reviewContent: "색이 예쁘고 발이 편해요",
            date: "2024.06.08",
            productId: 2,
        },
        {
            files: profile,
            nickName: "nickname2",
            starRate: 5,
            reviewContent: "색이 예쁘고 발이 편해요",
            date: "2024.06.08",
            productId: 2,
        },
        {
            files: profile,
            nickName: "nickname3",
            starRate: 4,
            reviewContent: "색이 예쁘고 발이 편해요...",
            date: "2024.06.08",
            productId: 2,
        },
        {
            files: profile,
            nickName: "nickname4",
            starRate: 4,
            reviewContent: "색이 예쁘고 발이 편해요...",
            date: "2024.06.08",
            productId: 2,
        },
        {
            files: profile,
            nickName: "nickname5",
            starRate: 4,
            reviewContent: "색이 예쁘고 발이 편해요...",
            date: "2024.06.08",
            productId: 2,
        },
        {
            files: profile,
            nickName: "nickname6",
            starRate: 4,
            reviewContent: "색이 예쁘고 발이 편해요...",
            date: "2024.06.08",
            productId: 2,
        },
        {
            files: profile,
            nickName: "nickname7",
            starRate: 4,
            reviewContent: "색이 예쁘고 발이 편해요...",
            date: "2024.06.08",
            productId: 2,
        },
        {
            files: profile,
            nickName: "nickname8",
            starRate: 4,
            reviewContent: "색이 예쁘고 발이 편해요...",
            date: "2024.06.08",
            productId: 2,
        },
        {
            files: profile,
            nickName: "nickname9",
            starRate: 4,
            reviewContent: "색이 예쁘고 발이 편해요...",
            date: "2024.06.08",
            productId: 2,
        },
        {
            files: profile,
            nickName: "nickname10",
            starRate: 4,
            reviewContent: "색이 예쁘고 발이 편해요...",
            date: "2024.06.08",
            productId: 2,
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

    const productNameOnClick = () => {
        setNavigateUrl("/product/management/detail");
        navigate(navigateUrl);
    }

    const reviewButtonOnClick = () => {
        // setReviewList(reviewData);
        navigate("/detail");
    }

    const closeModal = () => {
        setIsVisible(false);
    }

    const navigateToPage = () => {
        setNavigateUrl("/product/management/detail");
        navigate(navigateUrl);
    };

    return (
        <ContentLayout>
            <Wrapper>
                <Box sx={{display: 'flex', alignItems: 'flex-start', width: 1230}}>
                    <Tabs value={currentTabIndex} onChange={handleTabChange} variant="fullWidth">
                        <Tab style={{width: '140px'}} label='마이 프로필' />
                        <Tab label='결제 내역' />
                        <Tab label='판매 내역' />
                    </Tabs>
                </Box>
                {currentTabIndex === 0 && (
                   <MyProfile/>
                )}
                {currentTabIndex === 1 && (
                    <Box sx={{ p: 3 }}>
                        {
                        <UserPayment/>
                        }
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
                                        <Table>
                                            <tr>
                                                <TableTh>상품번호</TableTh>
                                                <TableTh>상품사진</TableTh>
                                                <TableTh>상품명</TableTh>
                                                <TableTh>카테고리</TableTh>
                                                <TableTh>상품상태</TableTh>
                                                <TableTh>댓글 조회</TableTh>
                                            </tr>
                                            <tr>
                                                <TableTd>1</TableTd>
                                                <TableTd><img src="https://via.placeholder.com/200x200"/></TableTd>
                                                <TableTd><a href="/product/management/detail/26" onClick={productNameOnClick}>아디다스 슬리퍼</a></TableTd>
                                                <TableTd>의류</TableTd>
                                                <TableTd>새 생품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>2</TableTd>
                                                <TableTd><img src="https://via.placeholder.com/200x200"/></TableTd>
                                                <TableTd><a href="/product/management/detail/26" onClick={productNameOnClick}>나이키 신발</a></TableTd>
                                                <TableTd>의류</TableTd>
                                                <TableTd>중고 상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>3</TableTd>
                                                <TableTd><img src="https://via.placeholder.com/200x200"/></TableTd>
                                                <TableTd><a href="/product/management/detail/26" onClick={productNameOnClick}>아디다스 반팔티</a></TableTd>
                                                <TableTd>의류</TableTd>
                                                <TableTd>새상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>4</TableTd>
                                                <TableTd><img src="https://via.placeholder.com/200x200"/></TableTd>
                                                <TableTd><a href="/product/management/detail/26" onClick={productNameOnClick}>갤럭시 탭s7</a></TableTd>
                                                <TableTd>가전</TableTd>
                                                <TableTd>중고 상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>5</TableTd>
                                                <TableTd><img src="https://via.placeholder.com/200x200"/></TableTd>
                                                <TableTd><a href="/product/management/detail/26" onClick={productNameOnClick}>애플워치</a></TableTd>
                                                <TableTd>가전</TableTd>
                                                <TableTd>중고상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>6</TableTd>
                                                <TableTd><img src="https://via.placeholder.com/200x200"/></TableTd>
                                                <TableTd><a href="/product/management/detail/26" onClick={productNameOnClick}>청바지</a></TableTd>
                                                <TableTd>의류</TableTd>
                                                <TableTd>새상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>7</TableTd>
                                                <TableTd><img src="https://via.placeholder.com/200x200"/></TableTd>
                                                <TableTd><a href="/product/management/detail/26" onClick={productNameOnClick}>긴팔 티셔츠</a></TableTd>
                                                <TableTd>의류</TableTd>
                                                <TableTd>새상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>8</TableTd>
                                                <TableTd><img src="https://via.placeholder.com/200x200"/></TableTd>
                                                <TableTd><a href="/product/management/detail/26" onClick={productNameOnClick}>아이패드</a></TableTd>
                                                <TableTd>가전 제품</TableTd>
                                                <TableTd>중고 상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>9</TableTd>
                                                <TableTd><img src="https://via.placeholder.com/200x200"/></TableTd>
                                                <TableTd><a href="/product/management/detail/26" onClick={productNameOnClick}>모니터</a></TableTd>
                                                <TableTd>가전 제품</TableTd>
                                                <TableTd>새상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>10</TableTd>
                                                <TableTd><img src="https://via.placeholder.com/200x200"/></TableTd>
                                                <TableTd><a href="/product/management/detail/26" onClick={productNameOnClick}>반바지</a></TableTd>
                                                <TableTd>의류</TableTd>
                                                <TableTd>중고상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                        </Table>
                                       
                                         
                                        <Pagination class="pagination">
                                            <PageButton>&laquo;</PageButton>
                                            <PageButton>1</PageButton>
                                            <PageButton>2</PageButton>
                                            <PageButton>3</PageButton>
                                            <PageButton>4</PageButton>
                                            <PageButton>5</PageButton>
                                            <PageButton>6</PageButton>
                                            <PageButton>&raquo;</PageButton>
                                        </Pagination>
                                    </Container>
                                    <Container>
                                        <Title>판매완료된 상품 목록</Title>
                                        <Table>
                                            <tr>
                                                <TableTh>상품번호</TableTh>
                                                <TableTh>상품명</TableTh>
                                                <TableTh>카테고리</TableTh>
                                                <TableTh>재고수량</TableTh>
                                                <TableTh>상품상태</TableTh>
                                                <TableTh>댓글 조회</TableTh>
                                            </tr>
                                          
                                            <tr>
                                                <TableTd>2</TableTd>
                                                <TableTd><a href="/product/management/detail" onClick={productNameOnClick}>나이키 신발</a></TableTd>
                                                <TableTd>의류</TableTd>
                                                <TableTd>0 (재고 없음)</TableTd>
                                                <TableTd>중고 상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                           
                                            <tr>
                                                <TableTd>4</TableTd>
                                                <TableTd><a href="/product/management/detail" onClick={productNameOnClick}>갤럭시 탭s7</a></TableTd>
                                                <TableTd>가전</TableTd>
                                                <TableTd>0 (재고 없음)</TableTd>
                                                <TableTd>중고 상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>5</TableTd>
                                                <TableTd><a href="/product/management/detail" onClick={productNameOnClick}>애플워치</a></TableTd>
                                                <TableTd>가전</TableTd>
                                                <TableTd>0 (재고 없음)</TableTd>
                                                <TableTd>중고상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                          
                                           
                                            <tr>
                                                <TableTd>8</TableTd>
                                                <TableTd><a href="/product/management/detail" onClick={productNameOnClick}>아이패드</a></TableTd>
                                                <TableTd>가전 제품</TableTd>
                                                <TableTd>0 (재고 없음)</TableTd>
                                                <TableTd>중고 상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>9</TableTd>
                                                <TableTd><a href="/product/management/detail" onClick={productNameOnClick}>모니터</a></TableTd>
                                                <TableTd>가전 제품</TableTd>
                                                <TableTd>0 (재고 없음)</TableTd>
                                                <TableTd>새상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                            <tr>
                                                <TableTd>10</TableTd>
                                                <TableTd><a href="/product/management/detail" onClick={productNameOnClick}>반바지</a></TableTd>
                                                <TableTd>의류</TableTd>
                                                <TableTd>0 (재고 없음)</TableTd>
                                                <TableTd>중고상품</TableTd>
                                                <TableTd><button onClick={reviewButtonOnClick}>댓글 목록</button></TableTd>
                                            </tr>
                                        </Table>
                                       
                                         
                                        <Pagination class="pagination">
                                            <PageButton>&laquo;</PageButton>
                                            <PageButton>1</PageButton>
                                            <PageButton>2</PageButton>
                                            <PageButton>3</PageButton>
                                            <PageButton>4</PageButton>
                                            <PageButton>5</PageButton>
                                            <PageButton>6</PageButton>
                                            <PageButton>&raquo;</PageButton>
                                        </Pagination>
                                    </Container>
                                    <Title>상품판매 현황</Title>
                                    <div>
                                    <BarChart
                                        xAxis={[
                                            {
                                            id: 'barCategories',
                                            data: ['bar A', 'bar B', 'bar C'],
                                            scaleType: 'band',
                                            },
                                        ]}
                                        series={[
                                            {
                                            data: [2, 5, 3],
                                            },
                                        ]}
                                        width={500}
                                        height={300}
                                    />





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

export default MyPageManagement;

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
    width: 1230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 1px solid red;
`;

const Title  = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
`;

const Pagination = styled.div`
   


`;

const PageButton = styled.button`
    width: 35px;
    height: 35px;
    background-color: black;
    color: white;
    cursor: pointer;

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
    margin-bottom: 40px;
`;

const TableTh = styled.th`
    padding: 6px 15px;
    background: #42444e;
    color: #fff;
    text-align: center;

`;

const TableTd = styled.td`
    padding: 6px 15px;
    text-align: center;
`;