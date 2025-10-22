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

const HotelCard = styled.div`
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  margin: auto;
  margin-bottom: 10px;
`

const Title = styled.h2`
   color: #333; 
`

const Description = styled.p`
  color: #666;
  line-height: 1.5; 
`

function Hotel({ hotelDetails, onBooking, isBooked }) {

  const handleClick = () => {
    onBooking(hotelDetails.id)
  }

  return (
    <HotelCard>
      <Title>{hotelDetails.name}</Title>
      <Description>{hotelDetails.description}</Description>
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