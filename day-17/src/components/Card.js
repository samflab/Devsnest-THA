function Card ({food, calories}){
    return <div className="container">
        <div>
            <h2>{food}</h2>
            <h3>You have consumed {calories} cals today</h3>
        </div>

    </div>
}
export default Card