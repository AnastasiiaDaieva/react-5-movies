import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/search">Movies</Link>
      </nav>
    </header>
  );
}
