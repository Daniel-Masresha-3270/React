import profilePic from './assets/profile.jpg'
function Card () {
return (
    <div className = 'card'>
        <img className='card-img' src= {profilePic} alt= "profile picture"></img>
        <h2 className = 'card-title' >Mezmur Tinat Tube</h2>
        <p className = 'card-detail' >We Train here Ethiopian orthodox church Sundayschools and Youth songs</p>

    </div>
);
}

export default Card