import { useEffect } from 'react';
import './Section.css';

const Section = ({  children, }) => {

    return (
        <section className={`section-container`}>
            {children}
        </section>
    );

}

export default Section;