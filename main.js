let devWindowTitle = "DEV"
  if (window.location.href.indexOf("localhost")) {
    document.title += " - " + devWindowTitle;
  }