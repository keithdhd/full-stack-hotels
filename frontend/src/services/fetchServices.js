export const fetchHotels = async (url) => {

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch hotels');
    }
    const data = await response.json();
    return data;
}

export const postHotel = async (url, payload) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });
    if (!response.ok) {
        throw new Error('Failed to add hotel');
    }
    const returnedData = await response.json();
    return returnedData;
}

