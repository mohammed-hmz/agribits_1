import PropTypes from "prop-types";
import "./../layoutCSS/pageTitle.css"; // Import the new CSS file

export function PageTitle({ section, heading, children }) {
  return (
    <div className="page-title-container">
      <p className="page-title-section">{section}</p>
      <h2 className="page-title-heading">{heading}</h2>
      <p className="page-title-children">{children}</p>
    </div>
  );
}

PageTitle.propTypes = {
  section: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
