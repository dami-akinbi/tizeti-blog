import ProfileList from './ProfileList';
import useFetch from './useFetch';

const Home = () => {
    const { data: profiles, isPending, error } = useFetch('http://localhost:8000/profiles');

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { profiles && <ProfileList profiles={profiles} title="All Staff" /> }
            {/* <ProfileList profiles={profiles.filter(profile => profile.title === "FSE")} title="Field Service Personnel" /> */}
        </div>
    );
}
 
export default Home;