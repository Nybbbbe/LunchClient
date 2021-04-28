import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import RequestService from '../../scripts/RequestService';

const PublicHours = () => {
    const { t, i18n } = useTranslation();
    const [Hours, setHours] = useState("");
    
    useEffect(() => {
        RequestService.getDataRequest("hours/eng").then(hourObj => {
            console.log(hourObj);
            setHours(hourObj.hours);
        })
    }, []);

    return (
        Hours !== ""?
            <>
            <h1>{t('OpenHours') + ":"}</h1>
            <h3>{Hours}</h3>
            </>
        : null 
    )
}

export default PublicHours;