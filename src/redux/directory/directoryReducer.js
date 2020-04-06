const INITIAL_STATE = {
    sections: [
    {
      title: "Hats",
      imageUrl: "https://images.unsplash.com/flagged/photo-1576533071143-28014b3839cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "Sneakers",
      imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 4,
      linkUrl: "shop/sneakers"
    },
    {
      title: "Jackets",
      imageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 5,
      linkUrl: "shop/jackets"
    }, 
    {
      title: "Mens",
      imageUrl: "https://images.unsplash.com/photo-1581397867105-8c988bd747e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      size: 'large',
      id: 2, 
      linkUrl: "shop/mens"
    },
    {
      title: "Womens",
      imageUrl: "https://images.unsplash.com/photo-1573658070990-e4c084b95cc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      size: 'large',
      id: 3,
      linkUrl: "shop/womens"
    },
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default: 
    return state
  }
}

export default directoryReducer