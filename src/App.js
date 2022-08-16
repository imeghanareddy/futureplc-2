import React, {useState} from 'react';


import {useEffect} from 'react';

function App(){

  const [modelinfo, setInfo] =  useState (" ");
  
  const getdata = async ()=>{

    const response = await fetch(`http://search-api.fie.future.net.uk/widget.php?id=review&site=TRD&model_name=iPad_Air`);
    const data = await response.json();

    console.log(data.widget.data);

    console.log(data.widget.data.offers);
    setInfo(data.widget.data.offers);
};

useEffect(()=>{
    getdata();
},[]);


  return (



    <div>
    {

    modelinfo.map((e)=>(


      <table>

      <th>
         Merchant Logo
      </th>
      <th>Merchant Name</th>
      <th>Product Name</th>
      <th>Product Price</th>
      <th>Product Link</th>

      <tr>

      <td>

      <img src= {e.merchant.logo_url} alt = ""></img>

      
      </td>
      <td>{e.merchant.name}</td>
      <td>{e.model_matched}</td>
      <td>{e.offer.price}</td>

      <td><a href = {e.offer.link}> Product Link</a></td>

      
      </tr>


      
      </table>
    ))

    }
    </div>
  )
 
  }
export default App;

