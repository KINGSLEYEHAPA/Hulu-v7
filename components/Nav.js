import request from "../utilities/request";

const Nav = () => {
  return (
    <nav>
      <div>
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2 key={title}>{title}</h2>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
