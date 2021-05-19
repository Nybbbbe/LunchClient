import PublicNavbar from './PublicNavbar';
import PublicMessage from './PublicMessage';
import PublicHours from './PublicHours';
import PublicMenu from './PublicMenu';
import PublicPosts from './PublicPosts';
import PublicPrices from './PublicPrices';
import './PublicApp.scss';

const PublicApp = () => {
    return (
        <div id="app">
            <PublicNavbar />
            <div className="public-container">
                <div className="public-content">
                    < PublicMessage/>
                    < PublicHours/>
                    < PublicMenu/>
                    < PublicPosts/>
                    < PublicPrices/>
                </div>
            </div>
        </div>
    );
}

export default PublicApp;