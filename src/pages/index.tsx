import GlobalLayout from '@layouts/index'
import Introduction from '@sections/Introductions'
import * as React from 'react'

const IndexPage = (props: any) => {
  return (
    <GlobalLayout {...props}>
      <Introduction name='Andreas Voit' />
    </GlobalLayout>
  )
}

export default IndexPage
