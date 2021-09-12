import GlobalLayout from '@layouts/index'
import Introduction from '@sections/Introductions'
import * as React from 'react'

const IndexPage2 = (props: any) => {
  return (
    <GlobalLayout {...props}>
      <Introduction name='Andreas S. Voit' />
    </GlobalLayout>
  )
}

export default IndexPage2
