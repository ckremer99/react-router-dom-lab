import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
    name: '',
    boxSize: "Small",
}

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addMailbox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }

    const handleChange = ({target}) => {
        setFormData({ ...formData, [target.name]: target.value });  
    }

    return (
        <>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Boxholder Name: </label>
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor='boxSize'>Box Size:</label>
                <select 
                    id='boxSize' 
                    name='boxSize' 
                    value={formData.boxSize} 
                    onChange={handleChange}>
                        <option value="Small">Small</option>
                        <option value="Large">Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MailboxForm