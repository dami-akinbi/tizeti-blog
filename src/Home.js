import { useState } from 'react';

const Home = () => {
    const [profiles, setProfiles] = useState([
        {title: 'CEO', name: 'Kendall Ananyi', gender: 'male', email: 'kendall@tizeti.com', id: 1},
        {title: 'COO', name: 'Ifeanyi Okonkwo', gender: 'male', email: 'ifeanyi.okonkwo@tizeti.com', id: 2},
        {title: 'CFO', name: 'Patricia Aiyedun', gender: 'female', email: 'patricia.aiyedun@tizeti.com', id: 3},
        {title: 'HR', name: 'Idowu Aruwajoye', gender: 'female', email: 'idowu.aruwajoye@tizeti.com', id: 4},
        {title: 'FS Manager', name: 'Ijem Okolugbo', gender: 'male', email: 'ijem.okolugbo@tizeti.com', id: 5},
        {title: 'FS Supervisor', name: 'Muhammad Salaudeen', gender: 'male', email: 'muhammad.salaudeen@tizeti.com', id: 6},
        {title: 'Team Lead', name: 'Gideon Osuji', gender: 'male', email: 'gideon.osuji@tizeti.com', id: 7},
        {title: 'FSE', name: 'Damilola Akinbi', gender: 'male', email: 'oluwadamilola.akinbi@tizeti.com', id: 8},
        {title: 'NOC', name: 'Emmanuel Olowogboye', gender: 'male', email: 'emmanuel.olowogboye@tizeti.com', id: 9}
    ]);

    return (
        <div className="home">
            { profiles.map((profile) => (
                <div className="profile-preview" key={profile.email}>
                    <h2>{ profile.name }</h2>
                    <p>{ profile.title }, Tizeti Networks Limited</p>
                </div>
            )) }
        </div>
    );
}
 
export default Home;