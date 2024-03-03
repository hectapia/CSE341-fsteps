const hectorRoute = (req, res) => {
    res.send('Hello Hector Tapia');
  };

  const veroRoute = (req, res) => {
    res.send('Hello Veronica Guerrero');
  };  

  module.exports = {
    hectorRoute,
    veroRoute,
  };