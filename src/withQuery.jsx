import PropTypes from 'prop-types'
import React from 'react'

import useQuery from './useQuery'


const withQuery = config => WrappedComponent => {
  const _withQuery = props => {
    const { location } = props
    return (
      <WrappedComponent
        {...props}
        query={useQuery({...config, location})}
      />
    )
  }

  _withQuery.WrappedComponent = WrappedComponent

  return _withQuery
}

export default withQuery