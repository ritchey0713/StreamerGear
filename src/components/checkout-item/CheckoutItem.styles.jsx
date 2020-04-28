import styled, { css } from "styled-components"

const itemDetails = css`
  width: 23%;
  padding-left: 30px;
`

const quantityDetails = css`
  display: flex;
`

const isQuantity = props => {
  if(props.quantityComp){
    return quantityDetails
  }
}

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgray;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`

export const ImageContainer = styled.div`
  width: 20%;
  padding-right: 20px;
    img {
      width: 100%; 
      height: 100%;
    }
`

export const DetailsContainer = styled.span`
  ${itemDetails}
  ${isQuantity}
`

export const ArrowContainer = styled.div`
  cursor: pointer;
`

export const ValueContainer = styled.span`
  margin: 0 10px;
`

export const RemoveButtonContainer = styled.div`
  padding-left: 50px;
  cursor: pointer;
`