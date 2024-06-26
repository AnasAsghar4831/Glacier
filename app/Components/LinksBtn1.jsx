import PropTypes from "prop-types";
import Link from "next/link";
function LinksBtn1({ linkName, linkPath }) {
  return (
    <li className="flex items-center justify-center">
      <Link
        href={linkPath}
        className="relative text-header-text text-white font-semibold before:w-0 before:bottom-[-20%] before:absolute before:bg-gradient-to-r from-transparent to-teal-500 before:h-[10%] hover:before:w-full before:transition-all transition-all hover:text-primary"
      >
        {linkName}
      </Link>
    </li>
  );
}

LinksBtn1.propTypes = {
  linkName: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};

export default LinksBtn1;
