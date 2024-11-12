import React, { useState } from 'react'
import Allitem from './allitem'

const Main = () => {

    
    const [items,setitems] = useState([
        {
        "item":"Socks",
        "numberof": 12,
        "price": "0.3"
       },

       {
        "item":"Gloves",
        "numberof": 3,
        "price": "0.275"
       }
    ])

    const [allitems,setallitems] = useState(true)
    const [singleitem,setsingleitem] = useState(true)
    const [form,setform] = useState(false)

    const additem = (e)=>{

        e.preventDefault()
        
        const item = document.getElementById('item').value
        const amount = document.getElementById('amount').value
        const price = document.getElementById('price').value

        if (item && amount && price){
            
            const new_item = { "item":item, "numberof":amount, "price":price }
            
            items.push(new_item)
            console.log(items)
            setform(false)
            setallitems(true)

        }


        return

    }

    const displayform = ()=>{
        setform(true)
        setallitems(false)
        setsingleitem(false)

        return

    }

    const removeitem = ()=>{
        setallitems(false)
        setsingleitem(true)

        return

    }

    const deleteitem = ()=>{
        items.pop()
        setallitems(true)
        setsingleitem(false)

        return

    }



  return (
        <>

            

            { allitems && <div className='all-items'>
                            <button onClick={displayform} className='add-item'>Add new item</button>
                            <button onClick = {removeitem} className='add-item'>Remove Item</button>
                            {items.map((item,key)=>(
                                <Allitem props = {item} key={key}></Allitem>
                            ))}
                         </div>
            }

            {singleitem && !allitems && <div className='all-items'>
                                <div className='card'>
                                    <p className='item-name'><span>{items[items.length-1].item}</span></p>
                                    <p>Amount : <span className='span'>{items[items.length-1].numberof}</span></p>
                                    <p>Price : <span className='span'>${items[items.length-1].price}</span></p>
                                    <button onClick={deleteitem} className='delete-btn'>Delete item</button>
                                </div>
                            </div>
            }

            {form && <div className='form-div'>
                            <form className='form'>
                                <label for="item">Item name</label>
                                <input type='text' name='item' id='item' placeholder='Enter item name' required/>
                                <label for="amount">Amount</label>
                                <input type='number' name='amount' id='amount' placeholder='Enter amount in number' required/>
                                <label for="price">Price</label>
                                <input type='number' name='price' id='price' placeholder='Enter price of the item' required/>

                                <button  onClick={additem}>Add item</button>
                            </form>
                        </div>
            }
        </>
  )
}

export default Main
