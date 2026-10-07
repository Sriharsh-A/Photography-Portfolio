import { useEffect, useRef, useState } from "react";
import "./Reels.css";

const reels = [
  {
    id: 1,
    title: "Portrait Motion",
    category: "PORTRAIT / MOTION",
    src: "/reels/Tulasi.mp4",
  },
  {
    id: 2,
    title: "RedbullX",
    category: "LIFESTYLE / MOTION",
    src: "/reels/Redbull x FormulaX.mp4",
  },
  {
    id: 3,
    title: "Product Showcase",
    category: "PRODUCT / MOTION",
    src: "/reels/Redbull112.mp4",
  },
  {
    id: 4,
    title: "Redbull x Communitie",
    category: "CONTENT / MOTION",
    src: "/reels/Redbull x Communitie.mp4",
  },
  {
    id: 5,
    title: "FASHION REEL",
    category: "FASHION / MOTION",
    src: "/reels/imge.mp4",
  },
  {
    id: 6,
    title: "KUMKUM POOJA",
    category: "TRADITION / MOTION",
    src: "/reels/kumkum.mp4",
  },
];

function ReelCard({ reel, isActive, onOpen }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isActive) {
      video.muted = true;
      video.loop = true;
      video.currentTime = 0;

      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <article
      className={`reel-card ${isActive ? "is-active" : ""}`}
      onClick={() => onOpen(reel)}
    >
      <div className="reel-video-wrapper">
        <video
          ref={videoRef}
          src={reel.src}
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="reel-play">
          <span>▶</span>
        </div>

        <div className="reel-overlay">
          <span>{reel.category}</span>
        </div>
      </div>

      <div className="reel-info">
        <h3>{reel.title}</h3>
        <span>↗</span>
      </div>
    </article>
  );
}

export default function Reels() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedReel, setSelectedReel] = useState(null);

  const total = reels.length;

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? total - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === total - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (!selectedReel) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedReel(null);
      }

      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedReel]);

  const getPosition = (index) => {
    let difference = index - activeIndex;

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }

    return difference;
  };

  return (
    <>
      <section className="reels-section">
        <div className="section-heading">
          <span>MOTION</span>

          <span className="count">
            {String(reels.length).padStart(2, "0")} REELS
          </span>
        </div>

        <div className="reels-carousel">
          <button
            className="reel-nav reel-nav-prev"
            onClick={previous}
            aria-label="Previous reel"
          >
            ←
          </button>

          <div className="reels-stage">
            {reels.map((reel, index) => {
              const position = getPosition(index);

              return (
                <div
                  key={reel.id}
                  className={`reel-slide reel-position-${position}`}
                  onClick={() => {
                    if (position !== 0) {
                      setActiveIndex(index);
                    }
                  }}
                >
                  <ReelCard
                    reel={reel}
                    isActive={position === 0}
                    onOpen={setSelectedReel}
                  />
                </div>
              );
            })}
          </div>

          <button
            className="reel-nav reel-nav-next"
            onClick={next}
            aria-label="Next reel"
          >
            →
          </button>
        </div>
      </section>

      {selectedReel && (
        <div
          className="reel-modal"
          onClick={() => setSelectedReel(null)}
        >
          <button
            className="reel-modal-close"
            onClick={() => setSelectedReel(null)}
            aria-label="Close reel"
          >
            ×
          </button>

          <div
            className="reel-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              src={selectedReel.src}
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}