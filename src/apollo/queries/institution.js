import { gql } from '@apollo/client';

export const INSTITUTION_LIST = gql`
	query getInstitutionList($filter: String, $limit: Int) {
		getInstitutionList(filter: $filter, limit: $limit) {
			id
			name
			image
			location
			alias
		}
	}
`;

export const GET_INSTITUTION = gql`
	query getInstitutionByid($id: ID!) {
		getInstitutionByid(id: $id) {
			id
			name
			location
			alias
			image
			demo
			email
			qr
		}
	}
`;

export const NEW_INSTITUTION = gql`
	mutation newInstitution($input: InstitutionInput) {
		newInstitution(input: $input) {
			id
			name
			location
			alias
			image
			demo
			email
			qr
		}
	}
`;

export const UPDATE_INSTITUTION = gql`
	mutation updateInstitution($input: InstitutionInput) {
		updateInstitution(input: $input) {
			id
			name
			location
			alias
			image
			demo
			email
			qr
		}
	}
`;
