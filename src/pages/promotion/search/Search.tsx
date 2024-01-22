
import React, { useEffect, useState } from 'react'

type Props = {
  id: string
  title: string
}




const Search = () => {

  const [promo, setPromo] = useState<Props[]>([])

 useEffect(()=> {

  fetch('http://localhost:5000/promotions?_embed=comments').then((res)=>{
    if(!res){
      throw new Error("Network response was not ok");
    }
    return res.json()
  }).then((data)=>{
    setPromo(data)
    console.log(data)
  }).catch((error)=> {
    console.log('Error fetching data:', error)
  })

 },[])



  return (
    <div>
      <p>feth</p>
      <div>{promo.map((item)=>(
        <p key={item.id}>{item.title}</p>
      ))}</div>
    </div>
  )
}

export default Search

