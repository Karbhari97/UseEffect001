import React from 'react'
import './Search.css'

export const Search = ({searchvalue,setSearchvalue,setInputvalue}) => {
  return (
    <>
      <h1>Food Recipe App</h1>
    <div className='search'>
        <input type="text"  value={searchvalue} onChange={(e)=>{
            setSearchvalue(e.currentTarget.value)
        }} />
        <button onClick={(e)=>{
         setInputvalue(searchvalue)
         setSearchvalue("")
        }}> Search</button>
    </div>
    </>
  )
}
