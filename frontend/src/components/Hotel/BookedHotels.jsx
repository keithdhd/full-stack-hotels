function BookedHotels({ hotels }) {
  const getTotalPrice = () => {
    return hotels.reduce((acc, hotel) => {
      return acc + Number(hotel.price);
    }, 0);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Hotel Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.name}</td>
              <td>{hotel.description}</td>
              <td>€{hotel.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total price: €{getTotalPrice()}</p>
    </>
  );
}

export { BookedHotels };
