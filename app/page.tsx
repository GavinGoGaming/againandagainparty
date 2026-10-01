import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <h1 className="nav-top">
          <img src="/a&alogo.png" alt="again&again.party"></img>
        </h1>
        <div className="nav-bottom">
          <a href="#about" className="hasSeperator">about</a>
          <a href="#music" className="hasSeperator">music</a>
          <a href="#minecraft" className="hasSeperator">minecraft</a>
          <a target="_blank" href="https://discord.com/invite/vdUuxgP"><i className="fab fa-discord"></i></a>
          <a target="_blank" href="https://www.instagram.com/againampagain"><i className="fab fa-instagram"></i></a>
          <a target="_blank" href="https://x.com/againampagain"><i className="fab fa-x-twitter"></i></a>
          <a target="_blank" href="https://www.tiktok.com/@againampagain"><i className="fab fa-tiktok"></i></a>
          <a target="_blank" href="https://www.youtube.com/@againampagain" className="hasSeperator"><i className="fab fa-youtube"></i></a>
          <a target="_blank" href="mailto:againandagain.mg@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
      </nav>
      <main>
        <section>
          <h2>again&again</h2>
          <h3>an international collaboration</h3>
          <p>
            again&again is a collaborative project between artists from around the world. copy paste from all-day.music. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum dicta, iste impedit officiis modi laboriosam error qui molestias dignissimos totam omnis non itaque inventore neque, at numquam, assumenda quo. Incidunt.
          </p>
        </section>
        <section>
          <h2>music</h2>
          {/* music player */}
        </section>
        <section id="minecraft" className="minecraft-section">
          <div className="minecraft-info">
            <h2>minecraft</h2>
            <p>come play with us on our minecraft server.</p>
            <p>java edition · 26.2</p>

            <code>againandagain.party</code>
          </div>

          <img src="/minecraft.png" alt="Minecraft" />
        </section>
      </main>
    </>
  );
}
