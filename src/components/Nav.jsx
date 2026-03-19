import { useState, useEffect } from 'react'

const links = [
    {
        label: 'Projects',
        href: '#projects'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Skills',
        href: '#skills'
    },
    {
        label: 'Contact',
        href: '#contact'
    }
]

export default function Nav() {
    const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => { setOpen(false); document.body.style.overflow = '' }
  const toggle = () => {
    const next = !open
    setOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      {/* ── Mobile nav overlay ── */}
      <nav
        className={`fixed inset-0 bg-white z-[99] flex flex-col justify-center items-center gap-8 transition-transform duration-[400ms] ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}
            className="font-display text-[2.5rem] font-black tracking-tighter">
            {l.label}
          </a>
        ))}
        <a href={meta.resumeFile} download onClick={close}
          className="mt-4 font-mono text-[0.7rem] tracking-wider uppercase px-6 py-3 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors">
          Download Resume
        </a>
      </nav>

      {/* ── Sticky header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] border-b border-gray-200 bg-white/94 backdrop-blur-md transition-shadow ${scrolled ? 'shadow-sm' : ''}`}
        role="banner"
      >
        <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,4vw,2.5rem)] flex items-center justify-between h-[62px]">

          {/* Logo */}
          <a href="#" className="font-display text-base font-black tracking-tighter uppercase"
            aria-label={`${meta.name} — home`}>
            {meta.name}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none" role="list">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="nav-link font-mono text-[0.72rem] tracking-wide uppercase text-gray-700 hover:text-black transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <a href={`mailto:${meta.email}`}
              className="hidden md:inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-wide uppercase px-5 py-2 border border-black hover:bg-black hover:text-white transition-colors">
              Say Hello →
            </a>
            <a href={meta.resumeFile} download
              className="hidden md:inline-flex items-center font-mono text-[0.7rem] tracking-wide uppercase px-5 py-2 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors">
              Resume ↓
            </a>

            {/* Hamburger */}
            <button onClick={toggle} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-nav"
              className="flex md:hidden flex-col gap-[5px] bg-transparent border-none p-1 cursor-none">
              <span className={`block w-[22px] h-[1.5px] bg-black transition-all ${open ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-[22px] h-[1.5px] bg-black transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-[22px] h-[1.5px] bg-black transition-all ${open ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>

        </div>
      </header>
    </>
  )
}