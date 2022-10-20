import { NavLink } from 'react-router-dom';

export const GoBackButton = ({ backLinkRef }) => {
  return (
    <div>
      <NavLink to={backLinkRef}>Go back</NavLink>
    </div>
  );
};
