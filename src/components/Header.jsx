
import NavBar from './NavBar';

function Header(props) {
    // eslint-disable-next-line react/prop-types
    const { currentPage, handlePageChange } = props;
    
    return (
      <>
        <section>
          <header className="flex-row justify-space-between px-1">
            <div>
              <h1>Christopher Natale</h1>
            </div>
            <div>
              <NavBar
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              ></NavBar>
            </div>
          </header>
        </section>

        <section className="headerBack">
          <h2 className="headerWel">Welcome!</h2>
          <p className="PWel">
            Welcome to my portfolio! Here, you can explore a collection of
            projects that highlight my journey and expertise in software
            engineering. If you have any questions or opportunities, feel free
            to reach out—I’d love to connect.
          </p>
        </section>
      </>
    );
}

export default Header;