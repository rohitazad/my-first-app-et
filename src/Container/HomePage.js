import React, {useEffect, useState} from 'react';
import MyText from '../Components/HomePage/Text';
import SingleProductCom from '../Components/HomePage/SingleProduct';

const HomePageContainer = ()=>{
    const [value, setValue] =useState(0);
    const [product, setProduct] =useState([])

    const CallAPIProducts = ()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => setProduct(res.products));
    }

    useEffect(()=>{
        console.log('My LifeCyle Running .... 1');
        CallAPIProducts()
    }, [])

    useEffect(()=>{
        console.log('My LifeCyle Running .... 2 updated');

        return ()=>{
            console.log('My LifeCyle Running .... 3 completd');
        }
    }, [value])


    const handleClick = ()=>{
        let myValue = value + 1
        setValue(myValue);
        console.log('yes you click to button')
    }

    return (
        <>
        
            <h1 className='text-lg text-cyan-700'>Home Page {value}</h1>
            <button onClick={handleClick}>Click</button>
            <MyText />
            {
               product && product.length > 0 ? product.map((item)=>{
                return <SingleProductCom data={item} key={item.id} />
               }) : 'Please wait Data is loading '
            }
            
        </>
    )
}


export default HomePageContainer;