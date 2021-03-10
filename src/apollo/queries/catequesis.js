import { gql } from '@apollo/client';

export const CATEQUESIS_LIST = gql`
	query getAllCatequesis {
		getAllCatequesis {
			id
			name
			year
			day
			hourStart
			hourEnd
		}
	}
`;

export const GET_CATEQUESIS = gql`
	query getCatequesis($id: ID!) {
		getCatequesis(id: $id) {
			id
			name
			year
			hourStart
			hourEnd
			tolerance
			day
			image
		}
	}
`;

export const NEW_CATEQUESIS = gql`
	mutation newCatequesis($input: CatequesisInput) {
		newCatequesis(input: $input) {
			id
			name
			year
			hourStart
			hourEnd
			tolerance
			day
			image
		}
	}
`;

export const UPDATE_CATEQUESIS = gql`
	mutation updateCatequesis($input: CatequesisInput) {
		updateCatequesis(input: $input) {
			id
			name
			year
			hourStart
			hourEnd
			tolerance
			day
			image
		}
	}
`;
