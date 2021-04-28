import PublicNavbar from './PublicNavbar';
import PublicMessage from './PublicMessage';
import PublicHours from './PublicHours';
import './PublicApp.scss';

const PublicApp = () => {
    return (
        <div id="app">
            <PublicNavbar />
            <div className="public-container">
                <h1>Public</h1>
                < PublicMessage/>
                < PublicHours/>
            </div>
        </div>
    );
}

export default PublicApp;