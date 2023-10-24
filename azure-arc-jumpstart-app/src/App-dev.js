import React, { useState } from 'react';
import './App.css';

function App() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);
    const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const toggleMenuDrawer = () => {
        setIsMenuDrawerOpen(!isMenuDrawerOpen);
    };

    const sideMenuLeft = isSideMenuOpen ? 0 : -300;
    const mainContentWidth = isSideMenuOpen ? 'calc(100% - 300px)' : '100%';

    const menuDrawerTop = isMenuDrawerOpen ? 0 : -300;

    return (
        <>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5vh',
                    backgroundColor: '#aaa',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0 20px',
                    zIndex: 3
                }}
            >
                <div>Logo</div>
                <button onClick={toggleMenuDrawer}>
                    Toggle Menu Drawer
                </button>
            </div>
            <div
                style={{
                    position: 'fixed',
                    top: isMenuDrawerOpen ? 0 : -300,
                    left: 0,
                    right: 0,
                    height: 300,
                    backgroundColor: '#bbb',
                    opacity: isMenuDrawerOpen ? 1 : 0,
                    zIndex: 2,
                    transition: 'all 0.5s'
                }}
            >

            </div>
            <div
                style={{
                    position: 'fixed',
                    top: 100,
                    left: sideMenuLeft,
                    backgroundColor: 'darkgray',
                    width: 300,
                    height: '50vh',
                    zIndex: 1,
                    transition: 'all 0.5s',
                }}
            >
                <button
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        right: isSideMenuOpen ? 0 : -65,
                        zIndex: 1,
                        transition: 'right 0.5s',
                    }}
                    onClick={toggleSideMenu}
                >
                    <svg
                        style={{
                            transform: isSideMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'all 0.5s',
                        }}
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="25" cy="25" r="24" stroke="#C4C4C4" strokeWidth="2" />
                        <path
                            d="M20.5 15L31.5 25L20.5 35"
                            stroke="#C4C4C4"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: '100px',
                    zIndex: -1
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        position: 'relative'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: isSideMenuOpen ? 300 : 0,
                            right: 0,
                            overflow: 'auto',
                            // don't show scrollbars
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',

                            transition: 'all 0.5s'
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'lightgray',
                                margin: '0 20px',
                                height: '100vh',
                            }}
                        >
                            Main Content
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;