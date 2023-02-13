import React, { FunctionComponent } from 'react'

import Link from '../content/Link'

interface OwnProps {}

type Props = OwnProps;

const PerformanceFooter: FunctionComponent<Props> = (props) =>
    (
        <footer className="page-footer">
          <div className="container">
            {/* Footer navigation */}
            <nav>
              <ul className="footer-navigation">
                <li>
                  <Link href="https://www.slub-dresden.de/" title="Sächsische Landesbibliothek – Staats- und Universitätsbibliothek Dresden">SLUB Dresden</Link>
                </li>
                <li>
                  <Link href="https://www.arthistoricum.net/" title="arthistoricum">arthistoricum</Link>
                </li>
                <li>
                  <Link href="https://www.arthistoricum.net/impressum" title="Impressum">Impressum</Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
)

export default PerformanceFooter
