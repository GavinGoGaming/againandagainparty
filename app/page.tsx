"use client";
import Image from "next/image";
import { useState } from "react";

const videos = [
  {
    "title": "again&again - miss you || Official Music Video",
    "videoId": "bwlmCRAbR-k"
  },
  {
    "title": "moreno fm (full album) || lyric video",
    "videoId": "nZTjOEJThmc"
  },
  {
    "title": "again&again - paper cut || Official Music Video",
    "videoId": "YckxBj0OijM"
  },
  {
    "title": "again&again - flare || Official Music Video",
    "videoId": "CrxDF85h12k"
  },
  {
    "title": "again&again - new location || Official Music Video",
    "videoId": "Q2J8769HOyg"
  },
  {
    "title": "again&again - daydreams || Official Music Video",
    "videoId": "VIsey8je8Yw"
  },
  {
    "title": "again&again - dive || Official Music Video",
    "videoId": "0_LRTrSHpDs"
  }
];

export default function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  return (
    <>
      <nav>
        <h1 className="nav-top">
          <img src="/a&alogo.png" alt="again&again.party"></img>
        </h1>
        <div className="nav-bottom">
          <a href="#about" className="hasSeperator">about</a>
          <a href="#music" className="hasSeperator">music</a>
          <a href="#minecraft">minecraft</a>
        </div>
        <div className="nav-bottom">
          <a target="_blank" href="https://discord.com/invite/vdUuxgP"><i className="fab fa-discord"></i></a>
          <a target="_blank" href="https://www.instagram.com/againampagain"><i className="fab fa-instagram"></i></a>
          <a target="_blank" href="https://x.com/againampagain"><i className="fab fa-x-twitter"></i></a>
          <a target="_blank" href="https://www.tiktok.com/@againampagain"><i className="fab fa-tiktok"></i></a>
          <a target="_blank" href="https://music.apple.com/us/artist/again-again/1396465613"><i className="fab fa-itunes-note"></i></a>
          <a target="_blank" href="https://againagain.bandcamp.com/"><i className="fab fa-bandcamp"></i></a>
          <a target="_blank" href="https://soundcloud.com/againampagain/tracks"><i className="fab fa-soundcloud"></i></a>
          <a target="_blank" href="https://open.spotify.com/artist/3CIq9N0VQGWfBpCAMzMZZN"><i className="fab fa-spotify"></i></a>
          <a target="_blank" href="https://www.youtube.com/@againampagain" className="hasSeperator"><i className="fab fa-youtube"></i></a>
          <a target="_blank" href="mailto:againandagain.mg@gmail.com"><i className="fas fa-envelope"></i></a>
          <a target="_blank" href="https://againandagain.international/"><i className="fas fa-store"></i></a>
        </div>
      </nav>
      <main>
        <section id="music" style={{
          marginTop: "10px",
        }} className="music-section">
          <button onClick={() => {
            setCurrentVideoIndex((currentVideoIndex - 1 + videos.length) % videos.length);
          }}> <i className="fas fa-caret-left"></i> </button>
          <iframe src={`https://www.youtube.com/embed/${videos[currentVideoIndex].videoId}?autoplay=0&mute=0&playsinline=1&modestbranding=1`} allow="encrypted-media"></iframe>
          <button onClick={() => {
            setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
          }}> <i className="fas fa-caret-right"></i> </button>
        </section>
        <section id="about">
          <img src="/channels4_profile.jpg" alt="again&again.party" className="about-logo"></img>
          <div className="about-info">
            <h2>again&again</h2>
            <h3>an international collaboration</h3>
            <p>
              An international collaboration between Atwood (TX, USA), Garrett (LA, USA), Ryce (LA, USA), planet girl (UK), juicebox caviar (TX, USA) and bluknight (ITA) known for emotionally charged bedroom-made songwriting and catchy hooks that balance personal depth with broad appeal.
            </p>
          </div>
        </section>
        <section id="minecraft" className="minecraft-section">
          <div className="minecraft-info">
            <h2>minecraft</h2>
            <p>minecraft server by the discord community!</p>
            <p>java edition 26.2, <a target="_blank" href="https://files.catbox.moe/utvhd5.mrpack">optional modpack</a></p>

            <code>againandagain.party</code>
          </div>

          <img src="/minecraft.png" alt="Minecraft" />
        </section>
      </main>
      <footer style={{
        marginTop: "50px",
        paddingBottom: "50px",
        textAlign: "center",
        fontSize: "0.8rem",
        fontFamily: "var(--font-space-mono), monospace",
      }}>
        <p>site created by <a href="https://github.com/gavingogaming" target="_blank">gavin fox</a></p>
      </footer>
    </>
  );
}
