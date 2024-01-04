import { useMutation } from '@apollo/client';
import { ADD_LOCATION } from '../../graphql';

const useAddLocation = (type, name, description) => {
    return useMutation(ADD_LOCATION, {
        variables: {
            type,
            name,
            description,
        },
    });
};

export { useAddLocation };
