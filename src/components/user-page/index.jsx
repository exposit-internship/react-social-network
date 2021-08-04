import './index.scss'

const UserPage = () => {
  return (
    <div className="userPage">
      <section className="userPage__cover_photo">
        <img
          src="https://i.pinimg.com/originals/4f/d3/50/4fd3509513507f97cc7b30edc5cc910f.jpg"
          alt="userPage-cover-foto"
        />
      </section>
      <div className="userPage__main">
        <img
          className="userPage__profile_photo"
          src="https://data.whicdn.com/images/20433362/original.jpg"
          alt="userPage__profile_photo"
        />
        <div className="userPage__entertainment_links">
          <a href="https://www.google.com/">google</a>
          <a href="https://twitter.com/">twitter</a>
          <a href="https://www.youtube.com/">youtube</a>
          <a href="https://www.netflix.com/by-ru/">Netflix</a>
        </div>
      </div>
      <div>change profile photo</div>
      <div>change cover photo</div>
      <div>User name</div>
      <div>description</div>
      <div>user posts without file attach</div>
    </div>
  )
}

export default UserPage
