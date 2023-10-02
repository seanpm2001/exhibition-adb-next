import Head from 'next/head'
import {useRouter} from 'next/router'
import React, {useCallback, useMemo} from 'react'
import {v4 as uuidv4} from 'uuid'

import TypedForm from '../../components/content/main/TypedForm'
import {sladb, slent} from '../../components/form/formConfigs'
import {MainLayout} from '../../components/layout/main-layout'
import {useRDFDataSources} from '../../components/state'
import loadedSchema from '../../public/schema/Exhibition.schema.json'

type Props = {
  children: React.ReactChild
  data: any
  classIRI: string
}

export async function getStaticPaths() {
  const paths = Object.keys(loadedSchema.$defs || {}).map((typeName) => ({
    params: { typeName },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const typeName = params.typeName
  const classIRI = sladb[typeName].value
  return {
    props: {
      typeName
    }
  }
}
export default () => {
  const {bulkLoaded} = useRDFDataSources('/ontology/exhibition-info.owl.ttl')
  const router = useRouter()
  const {typeName} = router.query
  //get query parm ?id=...
  const classIRI: string | undefined = typeof typeName === 'string' ? sladb(typeName).value : undefined
  const defaultData = useMemo(() => {
    return {
      '@id': slent[`${typeName}#s-12`].value,
      '@type': classIRI
    }

  }, [classIRI, typeName])

  const handleNew = useCallback(() => {
    const newId = uuidv4()
    router.push(`/create/${typeName}/${encodeURI(newId)}`)
  }, [ classIRI ])

  return (
      <>
        <Head>
          <title>Neue {typeName} anlegen - Ausstellungserfassung</title>
          <meta name="description" content="a knowledge base about exhibitions"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <MainLayout >
          {classIRI && <TypedForm defaultData={defaultData} typeName={typeName as string} classIRI={classIRI as string}/>}
        </MainLayout>
      </>
  )
}
