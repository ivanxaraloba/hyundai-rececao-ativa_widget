const EXTERNAL_FETCHER = async (
  method,
  url,
  params = {},
  headers = {},
  body = {},
  service,
) => {
  var request = {
    url,
    params,
    headers,
    body,
  };

  return ZOHO[service].HTTP[method](request);
};
