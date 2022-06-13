import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (options.map(key =>
        <button key={key} type="button" onClick={() => onLeaveFeedback(key)}>{key}</button>));
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}