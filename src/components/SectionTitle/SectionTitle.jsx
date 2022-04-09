import PropTypes from 'prop-types';

export const SectionTitle = ({ title }) => {
  return <div>{title}</div>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
