import React, {FunctionComponent} from 'react'

import Link from './Link'

interface OwnProps {
}

type Props = OwnProps;

const ContentHeader: FunctionComponent<Props> = (props) =>
    (
        <div className="content-header">
            <div className="container">
                <nav className="breadcrumb">
                    <ol>
                        <li>
                            <Link href="/">Startseite</Link>
                        </li>
                        <li>
                            <Link href="/exhibition" title="Veranstaltung">Ausstellung</Link>
                        </li>
                    </ol>
                </nav>
                <h1>Ausstellung</h1>
            </div>
        </div>
    )

export default ContentHeader
