import React from 'react';
import Spinner from '../components/Atoms/Spinner.jsx'
import { useQuery } from '@apollo/client';

export default ({ children, query, classes, ...props }) => {
	const { loading, error, data } = useQuery( query, { ...props } );

  if (loading) return <Spinner classes={classes} />;
  if (error) return `Error! ${error.message}`;

  return children(data);
}
