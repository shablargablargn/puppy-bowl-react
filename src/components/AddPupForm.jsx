import {useState} from 'react'
import axios from 'axios'

const AddPupForm = () => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [id, setID] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
        const {data} = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2307-FTB-ET-WEB-FT/players', {name, breed, id})
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        value={name}
                        type='text'
                        name='title'
                        placeholder='Enter name here'
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                    <input
                        value={breed}
                        type='text'
                        name='breed'
                        placeholder='Enter breed here'
                        onChange={(e) => setBreed(e.target.value)}
                    />

                    <input
                        value={id}
                        type='number'
                        name='id'
                        placeholder='Enter ID here'
                        onChange={(e) => setID(e.target.value)}
                    />

                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddPupForm