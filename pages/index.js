import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
  text-align: center;
`

export default () => (
  <>
    <Head>
      <title>Fresh As</title>
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
    <Title>
      <img
        width="285"
        alt="fresh as"
        src="https://user-images.githubusercontent.com/1913316/52131506-cf532b80-2634-11e9-93ef-3decc8b54bb1.png"
      />
    </Title>
  </>
)
