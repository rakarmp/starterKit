function Header() {
  return (
    <div className="flex justify-between my-8 items-center">
      <h1 className="font-medium text-xl">
        <a href="/">Starter Kit</a>
      </h1>
      <div>
        <a
          href="https://github.com/grizz12"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Header;
