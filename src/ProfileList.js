const ProfileList = ({ profiles, title }) => {

    return (
        <div className="profile-list">
            <h2>{ title }</h2>
            { profiles.map((profile) => (
                <div className="profile-preview" key={profile.email}>
                    <h2>{ profile.name }</h2>
                    <p>{ profile.title }, Tizeti Networks Limited</p>
                </div>
            )) }
        </div>
    );
}
 
export default ProfileList;