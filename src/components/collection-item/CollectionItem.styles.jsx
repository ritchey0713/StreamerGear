import styled from 'styled-components'

export const CollectionItemContainer = styled.div`
width: 22vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;
margin-bottom: 30px;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 7px;
  background-image: ${({ imageUrl }) => (`url(${imageUrl})`)};
`

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`
export const InfoCollection = styled.span`
  margin: 7px;
`