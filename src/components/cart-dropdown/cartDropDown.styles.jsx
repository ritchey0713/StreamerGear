import styled from "styled-components"

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 280px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 120px;
  right: 20px;
  z-index: 5;
`

export const CartItemsContainer = styled.div`
  padding: 20px 0px;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 25px auto;
`