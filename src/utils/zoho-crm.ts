import axios from 'axios';

// https://www.zohoapis.com/crm/v7/functions/widget_rececaoativa_getviatura/actions/execute?auth_type=apikey&zapikey=1003.aeb1f5098a1c598f8de0511475d51e3b.9f319265cefa3683efea45f72d1c9b42
const ZOHOCRM_ZAPIKEY =
  '1003.aeb1f5098a1c598f8de0511475d51e3b.9f319265cefa3683efea45f72d1c9b42';
const DOMAIN = 'com';

export const zohocrm = {
  callFunction: async (functionName: string) => {
    console.log(ZOHO);

    try {
      const url = `https://www.zohoapis.com/crm/v7/functions/widget_rececaoativa_getviatura/actions/execute?auth_type=apikey&zapikey=1003.aeb1f5098a1c598f8de0511475d51e3b.9f319265cefa3683efea45f72d1c9b42`;
      console.log(url);

      const response2 = await ZOHO.CREATOR.API.invokecustomapi({});
      console.log(response2);

      const response = await axios.get(url);
      console.log(response?.data);
    } catch (err) {
      console.log(err);
    }
  },
};
