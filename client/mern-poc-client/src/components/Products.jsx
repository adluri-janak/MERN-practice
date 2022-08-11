import React from 'react'
import axios from "axios"
import styles from "./Products.module.css"
import {Link} from "react-router-dom"

const Products = () => {
    const [productData,setProductData] = React.useState([])

    React.useEffect(()=>{
        axios.get("http://localhost:3000/product")
        .then((res)=>{
            //console.log(res.data.data[0])
            setProductData(res.data.data)
        })
    },[])

    function handleClick(id){
        //console.log("id",id)
    }
    
    return (
        <div>
            <div className={styles.product_parent}>
                {productData.map((item)=>(
                    <div key={item._id} className={styles.product_card} onClick={(()=>handleClick(item._id))}>
                        <Link to={`/product/${item._id}`}>
                            <img src={item.product_image_url} alt={item.product_name}/>
                            <p>{item.product_name}</p>                        
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products