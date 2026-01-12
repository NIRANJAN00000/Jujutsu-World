import React, { useState, useEffect } from "react";
import "./style.css";
import homeImg from "./img/homediv1.png";

function Hpage() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    fetch("https://jujutsu-world.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error("Error fetching characters:", err));
  }, []);

  return (
    <>
      <main className="hero-section" id="Home">
        <div className="hero-container">
          <div className="hero-image">
            <img src={homeImg} alt="Jujutsu Kaisen Hero" />
          </div>

          <div className="hero-content">
            <h1>
              Welcome to the <br /> <span>Jujutsu World</span>
            </h1>
            <p>
              Unleash the power of cursed energy and master the art of sorcery.
              Join the ranks of legendary sorcerers and protect humanity from
              the shadows.
            </p>

            <div className="button-group">
              <button
                className="cta-button"
                onClick={() =>
                  document
                    .getElementById("list")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Characters
              </button>
              <button
                className="secondary-button"
                onClick={() =>
                  window.open(
                    "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen?utm_medium=web&utm_source=share"
                  )
                }
              >
                Watch Anime
              </button>
            </div>
          </div>
        </div>
      </main>

      <section className="video-section">
        <div className="video">
          <iframe
            src="https://drive.google.com/file/d/1xOtNHpIAT95Hl3uhcxfbOqgSqzmGzILB/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            title="Jujutsu Kaisen Video"
          ></iframe>
        </div>
      </section>

      <section
        className={`character-section page-theme-${(currentPage - 1) % 5}`}
        id="list"
      >
        <div className="section-title">
          <h2>
            Character <span> Faculty</span> ({characters.length})
          </h2>
          <div className="underline"></div>
        </div>

        <div className="character-grid">
          {characters
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((char) => (
              <div className="character-card" key={char.id}>
                <div className="card-image-container">
                  <img
                    src={char.imageUrl || char.image}
                    alt={char.name}
                    className="character-img"
                  />
                </div>
                <div className="card-info">
                  <h3>{char.name}</h3>
                  <p>{char.description}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="page-info">
            Page {currentPage} of {Math.ceil(characters.length / itemsPerPage)}
          </span>

          <button
            className="pagination-btn"
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, Math.ceil(characters.length / itemsPerPage))
              )
            }
            disabled={
              currentPage === Math.ceil(characters.length / itemsPerPage)
            }
          >
            Next
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Jujutsu Kaisen Universe. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Hpage;
