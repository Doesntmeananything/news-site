## My news site

### Demo available at: https://amazing-ardinghelli-dab4e2.netlify.com/

A single page news app built with:

- React and React hooks
- [Base Web React Components](https://baseweb.design/)
- Create-react-app
- Powered by [NewsAPI.org](https://newsapi.org)

### Motivation

React Hooks provide a more elegant way of writing components and managing their state and life cycle. In order to familiarise myself with a fundamentally new way of creating components, I have created this app based around individual stateful block and overarching state of fetched data from an external API.

Base-UI was used as a mature UI-kit that supplies ready-made but malleable components.

CRA was used to test limits and extendability of this particular boilerplate set.

### How to set up locally

1. Clone the repository.
2. Create a `config.js` file in `src` folder.
3. Register your own free api key at [NewsAPI.org](https://newsapi.org).
4. Put your api key in `config.js` and export it.
5. Import your api key in `app.js` as `apiKey` and remove the respective env variable `process.env.REACT_APP_API_KEY`.
6. Use `npm run start` to run a development build or build the app with `npm run build`.
