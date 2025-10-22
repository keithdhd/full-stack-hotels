import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: ${props => (props.$isBooked ? 'red' : 'green')};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`

const HotelCard = styled.li`
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: auto;
  margin-bottom: 10px;
`


const Title = styled.h2`
   color: inherit; 
   margin: 0 0 8px;
`

const Description = styled.p`
  color: inherit;
  opacity: 0.8;
  line-height: 1.5; 
  margin-bottom: 16px;
`

const Price = styled.h3`
  color: inherit;
`

function Hotel({ hotelDetails, onBooking, isBooked }) {

  const handleClick = () => {
    onBooking(hotelDetails.id)
  }

  return (
    <HotelCard>
      <Title>{hotelDetails.name}</Title>
      <Description>{hotelDetails.description}</Description>
      <Price>{hotelDetails.price}€</Price>
      <StyledButton
        onClick={handleClick}
        $isBooked={isBooked}
      >
        {isBooked ? 'Cancel' : 'Add to trip'}
      </StyledButton>
    </HotelCard>
  )
}

export { Hotel }

// onChange
// onSubmit
// onMouseOver
// onKeyDown
// onFocus
