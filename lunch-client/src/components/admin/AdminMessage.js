import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import RequestService from '../../scripts/RequestService';

const AdminMessages = () => {
    const { t, i18n } = useTranslation();
    const [Message, setMessage] = useState("");
    const [currLang, setCurrLang] = useState(i18n.language);
    
    useEffect(() => {
        RequestService.getDataRequest("messages/" + currLang).then(msgObj => {
            console.log(msgObj);
            setMessage(msgObj.message);
        });

        i18n.on('languageChanged', () => {
            setCurrLang(i18n.language)
        });
    }, [i18n, currLang]);

    const toggleEditDialog = () => {

    }

    return (
        <>
        <h1>{t('Announcements') + ":"}</h1>
        {Message !== ""?
            <>
            <h3>{Message}</h3>
            </>
        : null}
        <Button
            variant="contained"
            color={"primary"}
            onClick={() => toggleEditDialog()}
            >{t('edit')}</Button>
        </>
    )
}

export default AdminMessages;