function BookedHotels({ hotels }) {

    const getTotalPrice = () => {
        return hotels.reduce((acc, hotel) => {
            return acc + Number(hotel.price);
        }, 0)
    }

    return (
        <>
            <p>Total price: {getTotalPrice()}</p>
            {hotels.map(hotel => <p key={hotel.id}>{hotel.name}</p>)}
        </>
    )

}


export { BookedHotels }