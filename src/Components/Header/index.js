import {Link} from 'react-router-dom';
const HeaderComponents = ()=>{
    return (
        <>
            <div>
                <Link className="text-sm bg-slate-200 m-1 p-2" to="/">Home</Link>
                <Link className="text-sm bg-slate-200 m-1 p-2" to="/about">ABout</Link>
                <Link className="text-sm bg-slate-200 m-1 p-2" to="/contact">Contact</Link>
            </div>
        </>
    )
}

export default HeaderComponents