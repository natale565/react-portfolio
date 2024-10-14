import { useState } from 'react';
import NavBar from './NavBar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/ContactMe';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe'){
            return <AboutMe />;
        }
        if (currentPage === 'Projects'){
            return <Projects />;
        }
        if (currentPage === 'Contact'){
            return <Contact />;
        }
        return <Resume />;

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
