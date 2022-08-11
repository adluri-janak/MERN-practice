import React from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import styles from "./IndividualProduct.module.css"


const IndividualProduct = () => {
    const [productData,setProductData] = React.useState([])

    const params  = useParams()

    React.useEffect(()=>{
        axios.get(`http://localhost:3000/product/${params.id}`)
        .then((res)=>{
            //console.log(res.data.data[0])
            setProductData(res.data.data)
        })
    },[params.id])
    
    return (
        <div className={styles.indivCard_parent}>
            <div className={styles.indivCard_left}>
                <img src={productData.product_image_url} alt={productData.product_name}/>
            </div>
            <div className={styles.indivCard_right}>
                <h2>{productData.product_name}</h2>
            </div>
        </div>
    )
}

export default IndividualProduct