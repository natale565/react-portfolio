// eslint-disable-next-line react/prop-types
function NavBar({ currentPage, handlePageChange }) {
    return(
    <>
    
    <nav className="nav-links">
        <ul>
            <li><a href="#about-me"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            >About Me</a></li>

            <li><a href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >Projects</a></li>

            <li><a href="#contact-me"
            onClick={() => handlePageChange('ContactMe')}
            className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
            >Contact Me</a></li>

             <li><a href="#Resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >Resume</a></li>
        </ul>
    </nav>
</>
    );
}

export default NavBar