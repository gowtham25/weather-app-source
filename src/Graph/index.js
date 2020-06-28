import { connect } from 'react-redux';
import Graph from './Graph';

const mapStateToProps = (state, props) => {
    return {
        weatherData: state.weatherData
    };
};

export default connect(
    mapStateToProps,
    {

    },
)(Graph);

