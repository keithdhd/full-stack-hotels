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
        <Form onSubmit={handleSubmit} >
            <label>
                Hotel Name:
                <input type="text" name="name" />
            </label>

            <label>
                Price:
                <input type="number" name="price" step=".01" />
            </label>

            <label>
                Description:
                <textarea name="description"></textarea>
            </label>

            <button>Submit Hotel</button>

        </Form>
    )

}

export { AddHotelForm }