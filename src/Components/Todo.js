

const TodoComponents = ({data, changeText})=>{
    console.log('My Todo COmponerte Render 1')
    const handerChangeData = ()=>{
        changeText()
    }
    return (
        <>
            <hr />
            <p>{data}</p>
            <button onClick={handerChangeData} className="text-lg bg-red-600 p-1">Click to update text</button>
        </>
    )
}
export default TodoComponents;