const axios = require('axios');

const validateLinks = (links) => {
  const promises = links.map((link) => {
    return axios.get(link.href)
      .then((response) => ({
        ...link,
        status: response.status,
        ok: response.status >= 200 && response.status < 400 ? "ok" : "Fail",
      }))
      .catch((error) => ({
        ...link,
        status: error.response ? error.response.status : 'Error',
        ok: 'Fail'
      }));
  });

  return Promise.all(promises);
};

module.exports = validateLinks;
