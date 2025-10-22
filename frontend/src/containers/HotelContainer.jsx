import { Hotel } from '../components/Hotel/Hotel'
import { BookedHotels } from '../components/Hotel/BookedHotels'
import { AddHotelForm } from '../components/Hotel/AddHotelForm'
import { useEffect, useState } from 'react'
import { fetchHotels, postHotel } from '../services/fetchServices'

const HotelContainer = () => {

    const [hotels, setHotels] = useState([])
    const [bookedHotelIds, setBookedHotelIds] = useState([])

    const HOTELS_API_URL = 'http://127.0.0.1:8000/api/hotels/'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchHotels(HOTELS_API_URL);
                setHotels(data);
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        };

        fetchData();
    }, []);


    const addHotel = (hotel) => {
        hotel.id = hotels.length + 1;
        setHotels((prevHotels) => {
            return [...prevHotels, hotel];
        })
        postHotel(HOTELS_API_URL, hotel)
    }

    const handleBookingToggle = (hotelId) => {
        // if it's in the array, remove it, else add it
        setBookedHotelIds((prevIds) =>
            prevIds.includes(hotelId)
                ? prevIds.filter((id) => id !== hotelId)
                : [...prevIds, hotelId]
        );
    }

    const hotelsComponents = hotels.map((hotelDetails, index) => {
        return <Hotel
            hotelDetails={hotelDetails}
            key={index}
            onBooking={handleBookingToggle}
            isBooked={bookedHotelIds.includes(hotelDetails.id)}
        />
    })

    return (
        <>
            <AddHotelForm addHotel={addHotel} />
            <BookedHotels hotels={hotels.filter((hotel) => bookedHotelIds.includes(hotel.id))} />
            <ul id="hotels-list">
            {hotelsComponents}
            </ul>
        </>
    )

}


export { HotelContainer }