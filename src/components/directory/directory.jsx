import React, { Component } from "react"
import MenuItem from "../menuItem"

class Directory extends Component {
  constructor(){
    super()
    this.state = {
      sections: [
        {
          title: "Hats",
          ImageUrl: "https://images.unsplash.com/flagged/photo-1576533071143-28014b3839cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 1
        },
        {
          title: "Sneakers",
          ImageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 4
        },
        {
          title: "Jackets",
          ImageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 5
        }, 
        {
          title: "Mens",
          ImageUrl: "https://images.unsplash.com/photo-1581397867105-8c988bd747e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 2
        },
        {
          title: "Womans",
          ImageUrl: "https://images.unsplash.com/photo-1573658070990-e4c084b95cc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 3
        },
      ]
    }
  }
  
  render(){
    return(
      <div className="directory-menu">
        {
          this.state.sections.map(({ title, ImageUrl, id }) => (
            <MenuItem key={ id } title={ title }/>
          ))
        }
      </div>
    )
  }
}

export default Directory