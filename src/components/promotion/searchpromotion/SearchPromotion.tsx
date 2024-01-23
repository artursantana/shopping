
import React, { useEffect, useState } from 'react'
import Card from '@/components/promotion/card/Card'

type Comment = {
  id: number;
  comment: string;
};

type Props = {
  id: number
  title: string
  price: number
  imageUrl: string
  url: string;
  comments: Comment[]
  load: boolean
  setLoad: React.Dispatch<React.SetStateAction<boolean>>
  
}





const SearchPromotion = () => {

  const [promo, setPromo] = useState<Props[]>([])
  const [load, setLoad] = useState(false)

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


  setTimeout(() => {
    setLoad(true);
  },1000);

 },[])


 
  return (
    <div>
      {
        !load && (
          <h2>loading...</h2>
        )
      }

     { load && (
        <div>
                <div>{promo.map((item)=>(
          <Card key={item.id} promotion={item}/>
                ))}</div>
        </div>
      )}


    </div>
  )
}

export default SearchPromotion

