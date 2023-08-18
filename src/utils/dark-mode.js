const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");

  //state
  const theme = localStorage.getItem("theme");

  //on mount - reload page
  theme && document.body.classList.add(theme);
  //handlers
  const handleThemetoggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
      document.body.removeAttribute("class");
    }
  };

  //Events
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemetoggle)
  );
};

export default darkMode;
