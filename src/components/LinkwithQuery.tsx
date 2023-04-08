import { Link, useLocation } from 'react-router-dom';
import { forwardRef } from 'react';
const LinkwithQuery = forwardRef(function LinkwithQuery(props: any, ref) {
  const { path, query, ...rest } = props;
  const { search } = useLocation();
  return (
    <Link
      ref={ref}
      to={`${path}${search}&${query}`}
      className="btn capitalize btn-primary rounded-md w-full flex justify-between"
      {...rest}
    >
      {props.children}
    </Link>
  );
});

export default LinkwithQuery;
