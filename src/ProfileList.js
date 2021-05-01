import { Link } from "react-router-dom";

const ProfileList = ({ profiles, title }) => {

    return (
        <div className="profile-list">
            <h2>{ title }</h2>
            { profiles.map((profile) => (
                <div className="profile-preview" key={profile.email}>
                    <Link to={`/profiles/${profile.id}`}>
                        <h2>{ profile.name }</h2>
                        <p>{ profile.title }, Tizeti Networks Limited</p>
                    </Link>
                </div>
            )) }
        </div>
    );
}
 
export default ProfileList;