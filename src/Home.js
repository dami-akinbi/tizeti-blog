import { useState, useEffect } from 'react';
import ProfileList from './ProfileList';

const Home = () => {
    const [profiles, setProfiles] = useState([
        {title: 'CEO', name: 'Kendall Ananyi', gender: 'male', email: 'kendall@tizeti.com', id: 1},
        {title: 'COO', name: 'Ifeanyi Okonkwo', gender: 'male', email: 'ifeanyi.okonkwo@tizeti.com', id: 2},
        {title: 'CFO', name: 'Patricia Aiyedun', gender: 'female', email: 'patricia.aiyedun@tizeti.com', id: 3},
        {title: 'HR', name: 'Idowu Aruwajoye', gender: 'female', email: 'idowu.aruwajoye@tizeti.com', id: 4},
        {title: 'FS Manager', name: 'Ijem Okolugbo', gender: 'male', email: 'ijem.okolugbo@tizeti.com', id: 5},
        {title: 'FS Supervisor', name: 'Muhammad Salaudeen', gender: 'male', email: 'muhammad.salaudeen@tizeti.com', id: 6},
        {title: 'Team Lead', name: 'Gideon Osuji', gender: 'male', email: 'gideon.osuji@tizeti.com', id: 7},
        {title: 'FSE', name: 'Oluwadamilola Akinbi', gender: 'male', email: 'oluwadamilola.akinbi@tizeti.com', id: 8},
        {title: 'FSE', name: 'Tochukwu Ibechem', gender: 'male', email: 'tochukwu.ibechem@tizeti.com', id: 9},
        {title: 'NOC', name: 'Emmanuel Olowogboye', gender: 'male', email: 'emmanuel.olowogboye@tizeti.com', id: 10},
        {title: 'NOC', name: 'Roqeebat Ozugha', gender: 'female', email: 'roqeebat.ozugha@tizeti.com', id: 11},
        {title: 'Sales', name: 'John Smith', gender: 'male', email: 'john.smith@tizeti.com', id: 12}
    ]);

    const handleDelete = (email) => {
        const newProfiles = profiles.filter(profile => profile.email !== email);
        setProfiles(newProfiles);
    }

    return (
        <div className="home">
            <ProfileList profiles={profiles} title="All Staff" handleDelete={handleDelete} />
            {/* <ProfileList profiles={profiles.filter(profile => profile.title === "FSE")} title="Field Service Personnel" /> */}
        </div>
    );
}
 
export default Home;