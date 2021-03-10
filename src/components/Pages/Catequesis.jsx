import React from 'react'
import ContainerEntity from '../Templates/ContainerEntity.jsx';
import { CATEQUESIS_LIST } from '../../apollo/queries/catequesis';

const Catequesis = () => {
  return (
    <ContainerEntity
			title="Catequesis"
			to="/catequesis/"
			query={CATEQUESIS_LIST}
			limit={10}
		/>
  )
}

export default Catequesis
