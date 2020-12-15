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
