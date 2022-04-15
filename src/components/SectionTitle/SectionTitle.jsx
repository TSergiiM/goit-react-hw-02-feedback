import PropTypes from 'prop-types';
import { Section } from './SectionTitle.styled';
export const SectionTitle = ({ title, children }) => {
  return (
    <Section>
      {title}
      {children}
    </Section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
