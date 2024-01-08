import { useEffect } from 'react';
import { useGetLocationById, useGetLocationsId, useGetLocationsName } from '../hooks/location';
import { useNavigate } from 'react-router-dom';

function Main() {
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
    }, [locationIdData]);
    useEffect(() => {
        if (!locationNameData) {
            return;
        }
        console.log('locationNameData=', locationNameData);
    }, [locationNameData]);

    useEffect(() => {
        if (!locationById) {
            return;
        }
        console.log('locationById=', locationById);
    }, [locationById]);

    const handleLocationNameData = () => {
        console.log('시작');
        getLocationsName();
    };
    const handleLocationById = () => {
        console.log('시작');
        getLocationById();
    };

    return (
        <div className='App'>
            {locationIdLoading || locationNameLoading || locationByIdLoading ? <p>loading...</p> : null}
            <button onClick={handleLocationNameData}>Lazy query(name)</button>
            <button onClick={handleLocationById}>단일 조회</button>
            <button
                onClick={() => {
                    navigate('./test');
                }}
            >
                테스트 페이지
            </button>
        </div>
    );
}

export default Main;
