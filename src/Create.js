import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('male');
    const [email, setEmail] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const profile = { title, name, gender, email };

        setIsPending(true);
        
        fetch('http://localhost:8000/profiles', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profile)
        })
        .then(() => {
            console.log('new profile created');
            setIsPending(false);
            history.push('/');
        })
    }
    
    return (
        <div className="create">
            <h2>Add a New Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Name:</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Gender:</label>
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <label>Email:</label>
                <input 
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                    { !isPending && <button>Add Profile</button> }
                    { isPending && <button disabled>Adding...</button> }
            </form>
        </div>
    );
}

export default Create;