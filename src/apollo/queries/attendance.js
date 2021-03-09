import { gql } from '@apollo/client';

export const ATTENDANCE_LIST = gql`
	query getAllAttendance {
		getAllAttendance {
			id
			date
			confirmante
			type
		}
	}

`;
