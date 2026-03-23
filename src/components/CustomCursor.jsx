import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef(null);
  const pos    = useRef({ cx: window.innerWidth / 2, cy: window.innerHeight / 2 });
  const target = useRef({ tx: window.innerWidth / 2, ty: window.innerHeight / 2 });
  const raf    = useRef(null);

  useEffect(() => {
    const onMove = (e) => { target.current = { tx: e.clientX, ty: e.clientY }; };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      pos.current.cx += (target.current.tx - pos.current.cx) * 0.14;
      pos.current.cy += (target.current.ty - pos.current.cy) * 0.14;
      if (curRef.current) {
        curRef.current.style.left = pos.current.cx + "px";
        curRef.current.style.top  = pos.current.cy + "px";
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const onOver = (e) => {
      const el = e.target.closest("a, button, [role='button']");
      const txt = e.target.closest("p, h2, h3");
      if (el)  document.body.classList.add("c-hover");
      if (txt) document.body.classList.add("c-text");
    };
    const onOut = (e) => {
      const el = e.target.closest("a, button, [role='button']");
      const txt = e.target.closest("p, h2, h3");
      if (el)  document.body.classList.remove("c-hover");
      if (txt) document.body.classList.remove("c-text");
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
    };
  }, []);

  return <div id="custom-cursor" ref={curRef} aria-hidden="true" />;
}