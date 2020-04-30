import styled from 'styled-components'

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? '300px' : '240px')};
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  .title {
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
  }
  .subtitle {
    font-weight: lighter;
    font-size: 16px;
  }
`

export const MenuImageContainer = styled.div`
  width 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => (`url(${imageUrl})`)};

  &:hover {
    cursor: pointer;

    transform: scale(1.4);
    transition: transform 6s cubic-bezier(0.35, 0.5, 0.5, 1.0);

    & .content {
      opacity: .7;
    }

  }
`

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: .65;
  position: absolute;
`

export const TitleContainer = styled.h2`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`