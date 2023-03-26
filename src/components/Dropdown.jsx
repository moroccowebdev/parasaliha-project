import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { usePopper } from 'react-popper';

const Dropdown = ({link1, link2, route1, route2, button}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'bottom',
        modifiers: [
            {
            name: 'offset',
            options: {
                offset: [0, 10],
            },
            },
        ],
        });
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    const handleOutsideClick = (event) => {
        if (popperElement && !popperElement.contains(event.target)) {
            setIsOpen(false);
        }
    };
    
    const handleEscapeKey = (event) => {
        if (event.keyCode === 27) {
            setIsOpen(false);
        }
    };
    
    const handleReferenceClick = () => {
        setIsOpen(!isOpen);
    };
    
    const handleReferenceKeyDown = (event) => {
        if (event.keyCode === 32 || event.keyCode === 13) {
            event.preventDefault();
            setIsOpen(!isOpen);
        }
    };
    
    return (
        <>
            <button
                className="dropdown-toggle"
                ref={setReferenceElement}
                onClick={handleReferenceClick}
                onKeyDown={handleReferenceKeyDown}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {button}
            </button>
            { isOpen &&(
                <div
                    className="dropdown-menu"
                    ref={setPopperElement}
                    style={styles.popper}
                    {...attributes.popper}
                    role="menu"
                    aria-hidden={!isOpen}
                    onKeyDown={handleEscapeKey}
                    onMouseDown={handleOutsideClick}
                    onBlur={handleOutsideClick}
                >
                    <Link to={route1} className='dropdown-item'>{link1}</Link>
                    <br />
                    <Link to={route2} className='dropdown-item'>{link2}</Link>
                </div>
            )}
        </>
    )
}

export default Dropdown
