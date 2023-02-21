import {Grid} from '@mui/material'
import React from 'react'

export type Exhibition = {
    getExhibition: {
        exhibitionType: { id: string; title: string }; toType: string | null; fromDateDisplay?: string | null; toDate: number; description: string; otherDates: any[]; published: boolean; source: { id: string; title: string }; title: string; fromDate: number; exhibitionCategory: { name: string }; places: { location: { id: string; title: string }; id: string; title: string }[]; fromType: null; involvedCorporations: { role: { id: string; title: string }; corporation: { name: string; id: string }; id: string }[]; originalTitle: string; toDateDisplay: string; subtitle: string; weblink: string; locations: { parent: { id: string; title: string }; id: string; title: string }[]; exhibitionSeries: { id: string; title: string }; id: string; exhibitionObjects: { id: string; title: string }[]; involvedPersons: ({ role: { id: string; title: string }; person: { name: string; id: string }; id: string } | { role: { id: string; title: string }; person: { name: string; id: string }; id: string } | { role: { id: string; title: string }; person: { name: string; id: string }; id: string })[]
    }
}

export default (props: { exhibition: any }) => {
    return (
        <Grid container spacing={2}>
            <Grid item>
                <h1>{props.exhibition?.title || 'Kein Titel'}</h1>
                <h2>{props.exhibition?.subtitle || 'Kein Subtitle'}</h2>
                <h2>{props.exhibition?.originalTitle}</h2>
                <p>{props.exhibition?.description}</p>
            </Grid>
        </Grid>
    )
}
