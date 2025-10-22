import { styled } from "styled-components";

const PriceTable = styled.table`
    margin: 0 auto;
`

const Cell = styled.td`
    text-align: left;
`

const PriceHeader = styled.th`
    text-align: left;
`


function BookedHotels({ hotels }) {
  const getTotalPrice = () => {
    return hotels.reduce((acc, hotel) => {
      return acc + Number(hotel.price);
    }, 0);
  };

  return (
    <>
      <PriceTable>
        <thead>
          <tr>
            <PriceHeader>Hotel</PriceHeader>
            <PriceHeader>Price</PriceHeader>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <Cell>{hotel.name}</Cell>
              <Cell>{hotel.price}€</Cell>
            </tr>
          ))}
          <tr>
            <td>Total Price:</td>
            <td>{getTotalPrice()}€</td>
          </tr>
        </tbody>
      </PriceTable>
    </>
  );
}

export { BookedHotels };
