import { useState, useEffect } from 'react';
import ProfileList from './ProfileList';

const Home = () => {
    const [profiles, setProfiles] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/profiles')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProfiles(data);
            });
    }, []);

    return (
        <div className="home">
            { profiles && <ProfileList profiles={profiles} title="All Staff" /> }
            {/* <ProfileList profiles={profiles.filter(profile => profile.title === "FSE")} title="Field Service Personnel" /> */}
        </div>
    );
}
 
export default Home;