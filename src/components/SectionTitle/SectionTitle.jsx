import PropTypes from 'prop-types';

export const SectionTitle = ({ title, children }) => {
  return (
    <div>
      {title}
      {children}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
