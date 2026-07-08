function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        &copy; {year} FlyRank. Built with React and Vite.
      </p>
    </footer>
  )
}

export default Footer
