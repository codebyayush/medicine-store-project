import React from 'react'

const itemContext = React.createContext({
        medArr: [],
        cartList: [],
        amount: 0,
        totalAmount: 0,
        addMed: (name, price, desc) => {},
        addOne: (item) => {},
        removeOne: (id) => {},
        removeItem: (item) => {}, 
        addItem: (item) => {},
})

export default itemContext;