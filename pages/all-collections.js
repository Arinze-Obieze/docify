import Collections from '@/components/Cards/Collection'
import Layout from '@/components/layout'
import React from 'react'

function AllCollections() {
  return (
    <Layout herotext={'Browse All Help Articles'}>
      <div>
        {/* a prop should be passed that would show all 
        collections here and would show a mininum 
        number when used in the index page  */}
        <Collections/>
      </div>

    </Layout>
  )
}

export default AllCollections