import React, { useState, useEffect } from 'react';

import { useAddLocation, useDeleteLocation, useGetLocationsId, useGetLocationsName } from '../hooks/location';
import '../css/Mutation.css';
const MutationTest = () => {
    const [addLocation, { loading: addLocationLoading, error: addLocationError, data: addLocationData }] =
        useAddLocation();
    const [deleteLocation, { loading: deleteLocationLoading, error: deleteLocationError, data: deleteLocationData }] =
        useDeleteLocation();

    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const {
        loading: getLocationsIdLoading,
        error: getLocationsIdError,
        data: getLocationsIdData,
    } = useGetLocationsId();
    const [
        getLocationsName,
        {
            loading: getLocationsNameLoading,
            error: getLocationsNameError,
            data: getLocationsNameData,
            refetch: refetchLocationsName,
        },
    ] = useGetLocationsName();

    const fetchLocationsName = async () => {
        await refetchLocationsName();
    };

    useEffect(() => {
        getLocationsName();
    }, []);

    useEffect(() => {
        if (!addLocationData) {
            return;
        }
        fetchLocationsName().then(() => {
            console.log('Locations Name fetched');
        });
    }, [addLocationData]);

    useEffect(() => {
        if (!deleteLocationData) {
            return;
        }
        fetchLocationsName().then(() => {
            console.log('Locations Name fetched');
        });
    }, [deleteLocationData]);

    if (getLocationsIdLoading || getLocationsNameLoading) return <p>Loading...</p>;
    if (getLocationsIdError || getLocationsNameError)
        return <p>Error: {getLocationsIdError.message || getLocationsNameError.message}</p>;

    const locationsId = getLocationsIdData?.locations;
    const locationsName = getLocationsNameData?.locations;

    return (
        <div className='mutation-container'>
            <p className='mutation-heading'>Location List</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addLocation({ variables: { type, name, description } });
                }}
            >
                <input
                    className='mutation-input'
                    value={type}
                    onChange={(e) => {
                        setType(e.target.value);
                    }}
                    placeholder='Type'
                />
                <input
                    className='mutation-input'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    placeholder='Name'
                />
                <input
                    className='mutation-input'
                    value={description}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    placeholder='Description'
                />
                <button className='mutation-button' type='submit'>
                    Add Location
                </button>
            </form>

            <ul className='mutation-list'>
                <li>
                    <p className='list-heading'>Locations Id</p>
                    <ul>
                        {locationsId?.map((location) => (
                            <li key={location.id}>
                                {location.id} - {location.type}
                                <button
                                    onClick={() => {
                                        deleteLocation({
                                            variables: {
                                                id: location.id,
                                            },
                                        });
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <p className='list-heading'>Locations Name:</p>
                    <ul>
                        {locationsName?.map((location) => (
                            <li key={location.id}>
                                {location.name} - {location.type}
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default MutationTest;
