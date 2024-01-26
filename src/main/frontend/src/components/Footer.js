import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';

const Footer = () => {

    return (
        <footer>
            <div bg="dark" data-bs-theme="dark" className='bg-body-tertiary text-center text-lg-left'>
                <div className='text-light text-center p-3'>
                    &copy; {new Date().getFullYear()} The Recipe Catalogue by{' '}
                    <a className='text-light' href='#'>R. Gomes</a>
                </div>
            </div>

            {/*
            <div  className="fixed-bottom">
                <Container fluid >
                    <div className="footer-copyright text-center py-3">© 2024 Copyright: The Recipe Catalogue by <a href="#">R. Gomes</a>.
                    </div>
                </Container>
            </div>

            */}

        </footer>
    )
}

export default Footer;