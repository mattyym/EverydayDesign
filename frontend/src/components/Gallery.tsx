"use client";
import { useState } from "react";

export default function Gallery({ images }: { images: string[] }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <>
      <div className="gallery" id="gallery">
        {images.map((src, i) => (
          <a href={src} key={src} onClick={(e) => { e.preventDefault(); setIdx(i); setOpen(true); }}>
            <img src={src} alt="" loading="lazy" />
          </a>
        ))}
      </div>

      {open && (
        <div className="lightbox" id="lightbox" onClick={() => setOpen(false)}>
          <button className="lightbox-close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
          <img id="lightbox-img" alt="" src={images[idx]} />
        </div>
      )}
    </>
  );
}
