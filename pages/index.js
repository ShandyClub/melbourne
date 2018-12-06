import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: red;
    font-size: 50px;
`

export default () => (
    <>
        <Head>
            <title>My page title</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
            />
        </Head>
        <Head>
            <meta
                name="viewport"
                content="initial-scale=1.2, width=device-width"
                key="viewport"
            />
        </Head>
        <Title>Shandy Club ~ Melbourne</Title>
    </>
)
