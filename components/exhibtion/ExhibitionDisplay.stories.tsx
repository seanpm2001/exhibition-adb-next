import React from 'react'

import ExhibitionDisplay, {Exhibition} from './ExhibitionDisplay'

export default {
    title: 'display/ExhibitionDisplay',
    component: ExhibitionDisplay,
}

const exhibitiondata: Exhibition = {
    'getExhibition': {
        'id': '1',
        'title': 'Demoausstellung 1',
        'subtitle': 'Demo',
        'originalTitle': 'Demoausstellung from Hell',
        'description': 'Das ist ein vollständiger Datensatz zum Test',
        'fromDate': 20230220,
        'fromType': null,
        'fromDateDisplay': '20.02.2023',
        'toDate': 20230221,
        'toType': null,
        'toDateDisplay': '21.02.2023',
        'places': [
            {
                'id': '1',
                'title': 'Gallerie 1',
                'location': {
                    'id': '1',
                    'title': 'Dresden'
                }
            }
        ],
        'locations': [
            {
                'id': '1',
                'title': 'Dresden',
                'parent': {
                    'id': '3',
                    'title': 'Sachsen'
                }
            }
        ],
        'exhibitionCategory': {
            'name': 'Beispielausstellungen'
        },
        'exhibitionSeries': {
            'id': '1',
            'title': 'Demosausstellungen ADB'
        },
        'otherDates': [],
        'published': true,
        'weblink': 'https://demolink.de',
        'source': {
            'id': '1',
            'title': 'Manuelle Eingabe'
        },
        'involvedPersons': [
            {
                'person': {
                    'id': '2',
                    'name': 'Bär, Thomas'
                },
                'role': {
                    'id': '1',
                    'title': 'Aussteller'
                },
                'id': '1'
            },
            {
                'person': {
                    'id': '1',
                    'name': 'Thomas Baer'
                },
                'role': {
                    'id': '2',
                    'title': 'Kurator'
                },
                'id': '2'
            },
            {
                'person': {
                    'id': '3',
                    'name': 'Probst, Astrid'
                },
                'role': {
                    'id': '3',
                    'title': 'Administrator'
                },
                'id': '3'
            }
        ],
        'involvedCorporations': [
            {
                'corporation': {
                    'id': '1',
                    'name': 'SLUB'
                },
                'role': {
                    'id': '4',
                    'title': 'Schirmherr'
                },
                'id': '1'
            }
        ],
        'exhibitionType': {
            'id': '1',
            'title': 'Einzelausstellung'
        },
        'exhibitionObjects': [
            {
                'id': '1',
                'title': 'Grandioses Bild'
            }
        ]
    }
}


export const ExhibitionDisplayStory = () => {
    return (
        <ExhibitionDisplay
            exhibition={exhibitiondata.getExhibition}
        />
    )
}
