
import React, { useState, useEffect } from 'react';

interface Props {
    data: any;
    lookupKey: string
}

const useFilter = ({ data, lookupKey }: Props) => {
    const [searchString, setSearchString] = useState<string>('');
    const [filteredData, setFilteredData] = useState<any[]>(data);
    const [isLoading, setIsLoading] = useState(true);
    const filter = () => {
        const _tempData = data.filter((e: any) => {
            return e?.[lookupKey]?.toLowerCase().includes(searchString.toLowerCase());
        });
        return setFilteredData(_tempData);
    };

    useEffect(() => {

        if (searchString) {

            filter();
        } else {
            setFilteredData(data);
            setIsLoading(false);
        }
    }, [searchString, data]);


    return {
        filteredData,
        setSearchString,
        searchString,
    };
};

export default useFilter;
