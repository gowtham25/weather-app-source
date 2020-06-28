import { connect } from 'react-redux';
import { getWeatherDetails } from '../store/reducer';
import Home from './Home';

const mapStateToProps = (state, props) => {
    return {

    };
};

export default connect(
    mapStateToProps,
    {
        getWeatherDetails
    },
)(Home);

