# Widget Template - Reactjs - ZCRM

![Zoho](https://img.shields.io/badge/Zoho-E42527.svg?style=for-the-badge&logo=Zoho&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white) ![Reactjs](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black)

## About

This is a simple and somewhat opinionated template, built using [Vite](https://vitejs.dev/) and [Reactjs](https://react.dev/), to build Widgets in Zoho Services for the Zoho Team in LOBA. 🐺

### Table of Contents

- <a href="#requirements">Requirements</a>
- <a href="#key-features">Key Features</a>
- <a href="#development">Development</a>
- <a href="#links">Links</a>
- <a href="#credits">Credits</a>

## Requirements

<a id="requirements"></a>

- [Node.js v18^](https://nodejs.org/en/)
- [Zoho Extension Toolkit CLI](https://docs.catalyst.zoho.com/en/getting-started/installing-catalyst-cli/)
- [Git](https://git-scm.com) (optional)

## Key Features

<a id="key-features"></a>

- Data fetching with [axios](https://axios-http.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Date manipulating with [date-fns](https://date-fns.org/)
- [Lucide icons](https://lucide.dev/icons/)
- [Prettier](https://prettier.io/) + [Eslint](https://eslint.org/) configuration

## Development

<a id="development"></a>

### Setup

1. Install dependencies

   ```bash
     npm install
   ```

2. Run the project

   ```bash
     npm run start
   ```

3. Fill the information on domainName in ./src/config/widget.js. **This Production is mandatory**

4. Begin your developments at ./src/App.js

### Deployment

1. Run the build command

   ```bash
     npm run build
   ```

2. Pack the build

   ```bash
     npm run pack
   ```

3. Validate the packed ZIP

   ```bash
     zet validate
   ```

4. Then, get the ZIP file generated in the /dist directory and upload it to Sigma

5. Change this README.md file with the contents of the README_TEMPLATE.md and fill the blank spaces

## Suggestions / Alternatives / Enhancements

This template serves as an initial guide to create a widget. Numerous requirements might necessitate exploring alternative solutions or libraries, so feel free to think out of the box and change things. Below, you'll find a list of recommended options and enhancements for you to consider:

### For Styling:

- [Bootstrap](https://getbootstrap.com/)
- [daisyUI](https://daisyui.com/)
- [Flowbite](https://flowbite.com/)
- [TW Elements](https://tw-elements.com/)
- [Mantine](https://mantine.dev/)
- [NextUI](https://nextui.org/)
- [Radix](https://www.radix-ui.com/)
- [shadcn-ui](https://ui.shadcn.com/)
- [Material UI](https://mui.com/material-ui/getting-started/)
- [Chakra](https://chakra-ui.com/)
- [Blueprint](https://blueprintjs.com/docs/)
- [Carbon](https://react.carbondesignsystem.com/?path=/docs/getting-started-welcome--welcome)

### State Handling

- [Redux](https://redux.js.org/)
- [MobX](https://mobx.js.org/README.html)
- [Jotai](https://jotai.org/)
- [Valtio](https://valtio.pmnd.rs/docs/introduction/getting-started)
- [Recoil](https://recoiljs.org/)

### Icons

- [unplugin-icons](https://github.com/unplugin/unplugin-icons)
- [Phosphor](https://phosphoricons.com/)
- [heroicons](https://heroicons.com/)

### Misc

- [lodash](https://lodash.com/)
- [Remeda](https://remedajs.com/)
- [react-use](https://github.com/streamich/react-use)
- [SWR](https://swr.vercel.app/)
- [React Hook Form](https://www.react-hook-form.com/)
- [dnd kit](https://dndkit.com/)
- [Zod](https://zod.dev/)

## Links

<a id="links"></a>

### Documentation / Useful Stuff

- [Tailwind CSS cheatsheet](https://tailwindcomponents.com/cheatsheet/)
- [ZET CLI](https://www.zoho.com/crm/developer/docs/widgets/install-cli.html)
- [Creating an extension/widget walkthrough](https://help.zoho.com/portal/en/kb/sigma/general/articles/create-extensions-using-online-zoho-extension-toolkit#Step_1__Install_Node_js_and_ZET_CLI)
- [Zoho CRM CDN SDK documentation](https://help.zwidgets.com/help/latest/index.html)
- [Configuring plugin-manifest.json documentation](https://help.zoho.com/portal/en/kb/sigma/configuration/articles/configure-plugin-manifest-json#locale)

### Related Stuff

- [===== Widget CRM Sample ===== (legacy)](https://bitbucket.org/lobadev/widget-crm-sample/src/master/)
- [zohoTeam_wCRM_default (legacy)](https://bitbucket.org/lobadev/zohoteam_wcrm_default/src/production/)
- [zohoTeam_wCreator_default (legacy)](https://bitbucket.org/lobadev/zohoteam_wcreator_default/src)
- [zohoTeam_wRecruit_default (legacy)](https://bitbucket.org/lobadev/zohoteam_wrecruit_default/src/master/)

## Credits

<a id="credits"></a>

_LOBA Zoho Team_
