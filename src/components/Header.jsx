import React from 'react';
import NavBar from './NavBar';

function Header(props) {
    // eslint-disable-next-line react/prop-types
    const { currentPage, handlePageChange } = props;
    
    return (
        <>
        <section>
            <header className='flex-row justify-space-between px-1'>
               <div>
                <h1>Christopher Natale&apos;s Portfolio</h1>
                </div>
                <div>
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} >
                </NavBar>
                </div>
            </header>
        </section>

        <section className='headerBack' >
          <h2 className='headerWel'>Welcome</h2>
          <p className='PWel'>
           Welcome to Christopher Natale&apos;s portfolio! Explore a selection of projects developed throughout his software engineering career. Feel free to reach out with any questions or opportunities—he&apos;d love to connect!
          </p>
        </section>
        
        </>
      
    );
}

export default Header;