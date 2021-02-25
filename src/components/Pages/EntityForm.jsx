import React, { Fragment } from 'react'
import { useMutation } from '@apollo/client';
import { apiDropbox } from 'helpers';

const EntityForm = ({ children, to, data, history, querys, values}) => {

	const [ NEW_ENTITY ] = useMutation(querys.new, {
		onCompleted: (data) => {
			uploadImage(data[Object.keys(data)[0]])
			history.push(to);
		},
		refetchQueries: [ querys.refreshList ]
	});

	const [ UPDATE_ENTITY, { loading: mutationLoading, error: mutationError } ] = useMutation(querys.update, {
		onCompleted: (data) => {
			uploadImage(data[Object.keys(data)[0]])
			history.push(to);
		},
		refetchQueries: [
			querys.refreshList,
			querys.refreshGet
		]
	});

	const uploadImage = (data) => {
		if (data.image && data.image === 'true') {
			apiDropbox.uploadFile(document.getElementById('foto'), data.id)
		}
  }

	const handleSubmit = (e) => {
		e.preventDefault();
		let valuesInput = values

    if (values?.image === '' && !document.getElementById('foto').src.startsWith('https://')) {
			valuesInput = {...valuesInput, image: 'true'}
    }

		if (data.name === '') {
			NEW_ENTITY({
				variables: { input: valuesInput }
			});
		} else {
			UPDATE_ENTITY({
				variables: { input: valuesInput }
			});
		}
	};

	return (
		<Fragment>
			<form onSubmit={handleSubmit} className="form-body">
				{children}
			</form>
			{mutationLoading && <p>Loading...</p>}
			{mutationError && <p>Error :( Please try again</p>}
		</Fragment>
	)
}

export default EntityForm
