import Rating from './Rating';
import {Link} from 'react-router-dom';
const SingleProductCom = ({data})=>{
    let title = data.title;
    let price = data.price;
    return (
        <>
            <div className="text-lg bg-slate-400 mt-4">
                Product Title : - {title}<br />
                Product Price :- ${price} <br />
                <Rating rating={data.rating}/>
                <Link className='bg-green-200 text-lg' to={`/product/${data.id}`}>
                    click to full details
                </Link>
            </div>

        </>
    )
}
export default SingleProductCom;