import Movielist from "../components/Movielist";
import Slider from "../components/Slider";

const Home = () => {

    return (
        <div className="page-content">
            <Slider/>
            <div className="container">
                <Movielist type='top_rated' title='Top Movies' />
                <Movielist type='upcoming' title='Upcoming Movies' />
                <Movielist type='popular' title='Popular Movies' />
            </div>
        </div>
    )
}

export default Home;