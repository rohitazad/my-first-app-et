import React from 'react';
import { useParams } from 'react-router-dom';


const MyProductDetails = ()=>{
    const params = useParams()
    console.log('params',params)
    return (
        <>
            hello Product Details
        </>
    )
}

export default MyProductDetails;