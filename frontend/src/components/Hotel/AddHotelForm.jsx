import { styled } from "styled-components";

const Form = styled.form`
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
        label {
            display: flex;
            flex-direction: column;
            font-weight: bold;
        }
        input, textarea {
            padding: 5px;
            font-size: 1rem;
        }
        button {
            width: 150px;
            padding: 10px;
            font-size: 1rem;
            background-color: #4CAF50;
            flex-direction: row-reverse;
            color: white;
            border: none;
            border-radius: 5px;
            align-self: flex-end;
            cursor: pointer;
            &:hover {
                background-color: #45a049;
            }
        }   
    `

function AddHotelForm({ addHotel }) {

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const price = Number(formData.get('price'));
        const description = formData.get('description');
        const newHotel = { name, description, price };

        addHotel(newHotel)
    }

    return (
        <Form onSubmit={handleSubmit} id="hotel-form" >
            <label>
                Hotel Name:
                <input type="text" name="name" id="name-input" />
            </label>

            <label>
                Price:
                <input type="number" name="price" id="price-input" />
            </label>

            <label>
                Description:
                <textarea name="description" id="description-input" ></textarea>
            </label>

            <button>Submit Hotel</button>

        </Form>
    )

}

export { AddHotelForm }