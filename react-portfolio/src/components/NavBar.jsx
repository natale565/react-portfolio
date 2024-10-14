function NavBar({ currentPage, handlePageChange }) {
    return(
    <>
    <header className="d-flex justify-content-between align-items-center mb-4 p-3">
    <h1 className="m-0">Christopher Natale Portfolio<i className="bi bi-person-square"></i></h1>
    <nav>
        <ul className="d-flex list-unstyled m-0">
            <li className="ms-3"><a href="#about-me"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
            >About Me</a></li>

            <li className="ms-3"><a href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >Projects</a></li>

            <li className="ms-3"><a href="#contact-me"
            onClick={() => handlePageChange('ContactMe')}
            className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
            >Contact Me</a></li>
            
            <li className="ms-3"
            onClick={() => handlePageChange('Resume')}
            ><a href="../../assets/resume/Christopher-Natale.pdf"
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >Resume</a></li>
        </ul>
    </nav>
</header>
</>
    );
}

export default NavBar