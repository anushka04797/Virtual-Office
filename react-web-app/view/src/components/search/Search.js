import React, { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { API } from '../../Config'

const Search = () => {
    
    const [items,setItems]=useState([])
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }

    const handleOnFocus = (event) => {
        console.log('Focused',event.target.value)
        API.get('search?key='+event.target.value).then(res=>{
            console.log(res.data.data)
            let temp=[]
            for(let index=0;index<res.data.data.length;index++){
                temp.push({id:res.data.data[index].id, name:res.data.data[index]})
            }
            setItems(temp)
        })
    }
    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.id}</span>
                {/* <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span> */}
            </>
        )
    }
    return (
        <>
            <div style={{ width: 400, textAlign:"center" }}>
                <ReactSearchAutocomplete
                    items={items}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                />
            </div>
        </>
    )
}

export default Search