const Locations = require('../interfaces/Locations');

const route = (app) => {
  app.get('/api/locations/:search_term', (req, res) => {
    const locations = new Locations();
    locations.callGetlocations(req).then((data) => {
      res.json(data);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ error: 'Server error' });
    });
  });
};

module.exports = {
    route,
};
