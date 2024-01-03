import React, { useEffect } from 'react';
import { useGetLocationById, useGetLocationsId, useGetLocationsName } from '../hooks/location';
import { useNavigate } from 'react-router-dom';

const TestVariable = () => {
    const { loading: locationIdLoading, error: locationIdError, data: locationIdData } = useGetLocationsId(); //즉시 Execute
    const [getLocationsName, { loading: locationNameLoading, error: locationNameErr, data: locationNameData }] =
        useGetLocationsName();
    const navigate = useNavigate();
    const [getLocationById, { loading: locationByIdLoading, data: locationById }] = useGetLocationById('loc-1');

    useEffect(() => {
        if (!locationIdData) {
            return;
        }
        console.log('locationIdData=', locationIdData);
    }, []);
    useEffect(() => {
        if (!locationNameData) {
            return;
        }
        console.log('locationNameData=', locationNameData);
    }, []);

    useEffect(() => {
        if (!locationById) {
            return;
        }
        console.log('locationById=', locationById);
    }, []);

    const handleLocationNameData = () => {
        console.log('시작');
        getLocationsName();
    };
    const handleLocationById = () => {
        console.log('시작');
        getLocationById();
    };
    return (
        <div>
            <p>Test Global Varaible</p>
            {locationIdLoading || locationNameLoading || locationByIdLoading ? <p>loading...</p> : null}
            <button onClick={handleLocationNameData}>Lazy query(name)</button>
            <button onClick={handleLocationById}>단일 조회</button>
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                홈으로 이동
            </button>
        </div>
    );
};

export default TestVariable;
