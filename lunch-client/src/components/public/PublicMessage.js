import { useEffect, useState } from "react";
import RequestService from '../../scripts/RequestService';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const PublicMessage = () => {
    const { t, i18n } = useTranslation();
    const [Message, setMessage] = useState("");
    
    useEffect(() => {
        RequestService.getDataRequest("messages/" + i18n.language).then(msgObj => {
            console.log(msgObj);
            setMessage(msgObj.message);
        });

        i18n.on('languageChanged', () => {
            RequestService.getDataRequest("messages/" + i18n.language).then(msgObj => {
                console.log(msgObj);
                setMessage(msgObj.message);
            });
        })
    }, [i18n]);

    return (
        Message !== ""?
            <>
            <h1>{t('Announcements') + ":"}</h1>
            <h3>{Message}</h3>
            </>
        : null 
    )
}

export default PublicMessage;