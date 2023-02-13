import React, {FunctionComponent} from 'react'

import Link from '../content/Link'

interface OwnProps {
}

type Props = OwnProps;

const PerformanceHeader: FunctionComponent<Props> = (props) =>
    (
        <header className="page-header">
            <div className="container">
                {/* Main navigation */}
                <nav className="main-navigation">
                    <ul className="primary-navigation">
                        <li className="submenu ">
                            <Link href="/" title="Recherche">Recherche</Link>
                            <ul>
                                <li>
                                    <Link href="#" title="Datengrundlage und Suche">Datengrundlage und Suche</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="#" title="Sammlungen">Sammlungen</Link>
                        </li>
                        <li>
                            <Link href="#" title="Frequently asked questions">FAQ</Link>
                        </li>
                        <li>
                            <Link href="#" title="Über uns">Über uns</Link>
                        </li>
                        <li className="submenu ">
                            <Link href="https://performance.musiconn.de/api" title="API">API</Link>
                            <ul>
                                <li>
                                    <Link href="#" title="autocomplete">autocomplete</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {/* Navigation toggle for mobile navigation */}
                <button className="navigation-toggle" type="button">
                    <span className="sr-only">Menü öffnen</span>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                </button>
            </div>
            {/* Login toggle to activate overlay login modal */}
            <div className="login-toggle">
                <button className="login-toggle-button" type="button">
                    <span className="sr-only">Login anzeigen</span>
                </button>
            </div>
        </header>
    )

export default PerformanceHeader
