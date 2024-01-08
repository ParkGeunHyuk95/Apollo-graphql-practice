import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { ADD_LOCATION, DELETE_LOCATION, GET_LOCATIONS_ID, GET_LOCATIONS_NAME, GET_LOCATION_BY_ID } from '../../graphql';

const useGetLocationsId = () => {
    return useQuery(GET_LOCATIONS_ID);
};
const useGetLocationsName = () => {
    return useLazyQuery(GET_LOCATIONS_NAME);
};
const useGetLocationById = (id) => {
    return useLazyQuery(GET_LOCATION_BY_ID, {
        variables: { id },
    });
};

//mutation
const useAddLocation = (type, name, description) => {
    return useMutation(ADD_LOCATION, {
        variables: {
            type,
            name,
            description,
        },
    });
};

const useDeleteLocation = (id) => {
    return useMutation(DELETE_LOCATION, {
        variables: {
            id,
        },
    });
};

export { useGetLocationsId, useGetLocationsName, useGetLocationById, useAddLocation, useDeleteLocation };
