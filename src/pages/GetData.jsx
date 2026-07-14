import React, { useEffect ,useState } from 'react'
import { Circles } from 'react-loader-spinner'


function GetData() {
    const[data,setData]=useState([])
    const[loader,setLoader]=useState(true)
    const getData=async()=>{
        const fetchData=await fetch("https://reqres.in/api/users?page=2&delay=4",{
            method:'GET',
            headers:{
       "x-api-key": "reqres_d5f07ee8487547da86ffab50962bc7d7",
      "content-type":"application/json"
            }
        })
        const res= await fetchData.json()
        setData(res.data)
        setLoader(false)
    }
    useEffect(()=>{
        getData()
    },[]);
  return (
    <div>
         {loader? <Circles
height="80"
width="80"
color="#4fa94d"
ariaLabel="circles-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>:data.map(val=>{
            return ( <>
            <h2>{val.id}</h2>
            <h2>{val.email}</h2>
                
            </>
            )
        })}


        </div>
  )
}

export default GetData