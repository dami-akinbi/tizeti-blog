import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const ProfileDetails = () => {
    const { id } = useParams();
    const { data: profile, error, isPending } = useFetch('http://localhost:8000/profiles/' + id);
    const history = useHistory();

    const handleClick = (e) => {
        fetch('http://localhost:8000/profiles/' + profile.id, { method: 'DELETE' })
        .then(() => {
            history.push('/');
        })
    }

    return (
        <div className="profile-details">
            {/* <h2>Profile Details - { id }</h2> */}
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { profile && (
                <article>
                    <h2>{ profile.name }</h2>
                    <p>{ profile.gender === 'male' ? 'His' : 'Her' } job title is <b>{ profile.title }</b> with an email of <b>{ profile.email }</b></p>
                    <br />
                    <button onClick={handleClick}>Delete Profile</button>
                </article>
            ) }
        </div>
    );
}

export default ProfileDetails;
