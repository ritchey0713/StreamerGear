import styled from "styled-components"

export const checkoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`

export const checkoutHeaderContainer = styled.div`
 width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgray;
`

export const headerBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  
  &:last-child {
    width: 8%;
  }
`