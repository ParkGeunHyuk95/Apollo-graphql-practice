import { gql } from '@apollo/client';

const GET_LOCATIONS_ID = gql`
    query GetLocationsId {
        locations {
            id
            type
        }
    }
`;

const GET_LOCATIONS_NAME = gql`
    query GetLocationsNAME {
        locations {
            id
            type
            name
        }
    }
`;

const GET_LOCATIONS_DESC = gql`
    query GetLocationsDESC {
        locations {
            id
            type
            description
        }
    }
`;

const GET_LOCATION_BY_ID = gql`
    query GetLocationById($id: ID!) {
        location(id: $id) {
            id
            type
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

const UPDATE_LOCATION = gql`
    mutation UpdateLocation($id: ID!, $type: String!, $name: String!, $description: String!) {
        updateLocation(id: $id, type: $type, name: $name, description: $description) {
            id
            type
            name
            description
        }
    }
`;

const DELETE_LOCATION = gql`
    mutation DeleteLocation($id: ID!) {
        deleteLocation(id: $id) {
            id
            type
            name
            description
        }
    }
`;
export {
    GET_LOCATIONS_ID,
    GET_LOCATIONS_NAME,
    GET_LOCATIONS_DESC,
    GET_LOCATION_BY_ID,
    ADD_LOCATION,
    UPDATE_LOCATION,
    DELETE_LOCATION,
};
