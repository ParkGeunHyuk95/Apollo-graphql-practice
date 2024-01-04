import { gql } from '@apollo/client';

const GET_LOCATIONS_ID = gql`
    query GetLocationsId {
        locations {
            id
        }
    }
`;

const GET_LOCATIONS_NAME = gql`
    query GetLocationsNAME {
        locations {
            name
        }
    }
`;

const GET_LOCATIONS_DESC = gql`
    query GetLocationsDESC {
        locations {
            description
        }
    }
`;

const GET_LOCATION_BY_ID = gql`
    query GetLocationById($id: ID!) {
        location(id: $id) {
            id
            name
            description
        }
    }
`;

const ADD_LOCATION = gql`
    mutation AddLocation($type: String!, $name: String!, $description: String!) {
        addLocation(type: $type, name: $name, description: $description) {
            id
            type
            name
            description
        }
    }
`;

export { GET_LOCATIONS_ID, GET_LOCATIONS_NAME, GET_LOCATIONS_DESC, GET_LOCATION_BY_ID, ADD_LOCATION };
