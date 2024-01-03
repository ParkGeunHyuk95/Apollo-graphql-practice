import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_LOCATIONS_ID, GET_LOCATIONS_NAME, GET_LOCATION_BY_ID } from '../../graphql';

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

export { useGetLocationsId, useGetLocationsName, useGetLocationById };
