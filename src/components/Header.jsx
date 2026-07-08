function Header() {
  return (
    <header className="header">
      <a className="logo" href="#top">
        Fly<span>Rank</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a className="nav-cta" href="#get-started">
          Get Started
        </a>
      </nav>
    </header>
  )
}

export default Header
