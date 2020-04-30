import React from "react"
import { withRouter } from 'react-router-dom' 
import { MenuItemContainer, MenuImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from "./MenuItem.styles"

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return(
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <MenuImageContainer imageUrl={imageUrl} />
      <ContentContainer>
        <TitleContainer>
          { title.toUpperCase() }
        </TitleContainer>
        <SubtitleContainer>Shop Now</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem)