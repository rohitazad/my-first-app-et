
const  MyFirstComponents = ({data, clicupdate2})=>{
    console.log('my components 2')
    return (
        <>
            <h2>Hello REact Js My Fist Components {data}</h2>
            <button className="bg-red-200 text-lg" onClick={clicupdate2}>Click toupdate 2</button>
        </>
    )
}


export default MyFirstComponents;