import '../Styles/Header.css';

function Header() {
  return (
    <div className="header">
      <header className="header-container">
        <div className="title">
          <h1>CV Builder</h1>
        </div>
        <div className="copyright">
          <a className="content" href="https://github.com/vonpell">
            <span className="text">Created by:</span>
            <img
              className="github"
              src="https://img.icons8.com/ios/50/000000/github--v1.png"
              alt="github"
            />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
