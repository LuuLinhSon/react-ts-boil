# React typescript boilerplace

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- built with Typescript
- latest API of React 16^
- bootstrap v4 and reactstrap
- i18n for Internationalization and localization
- formik to handle form
- story book to describe your components
- jest framework and runner, enzyme and react-test-renderer as test utilities
- axios to fetching
- react-sweet-state: Global + local state combining the best of Redux and Context API
- lint stage, run test before push the code

## Available Scripts

In the project directory, you can run:
Before start, make sure you create a `.env` file and copy content of `.env.development` to `.env` file and feel free to modify that
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.

### Build app for specific environment

Builds the app for production to the `dev | qc | qa or prod` env.
```
npm run build:dev
```

```
npm run build:qc
```

```
npm run build:qa
```

```
npm run build:prod
```


### `npm run test`
There are some commands for the jest test:
#### generate code coverage
```
npm run test:coverage
```

#### open code coverage report
```
npm run view:coverage
```

#### jest test with debug mode
```
npm run test:debug
```

### `npm run storybook`

Run Storybook
Storybook should start on a 3005 port in dev-mode http://localhost:3005/ .

Now you can develop your components and write stories and see the changes in Storybook immediately since it uses Webpack’s hot module reloading.


### `npm run mock`

Run mock json server
While waiting for API from BE, we can use mock response http://localhost:3004/.

Open `.env` file and update value:
```
REACT_APP_API_HOST="http://localhost:3004"
```

### `npm run build && npm run analyze`

Analyzing the Bundle Size
Source map explorer analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.

## Husky
Requires Node >= 10 and Git >= 2.13.0

### Pre-commit
- typecheck
- lint-staged: prettier, tslint fix, stylelint, test staged with flag findRelatedTests

### Pre-push
- test code coverage threshold
```
{
  "branches": 65,
  "functions": 65,
  "lines": 75,
  "statements": 75
}
```

## Required plugins
- EditorConfig
- Code-spell-checker
- Prettier

## Exclude features on left sidebar

You can exclude any feature by defining a `REACT_APP_EXCLUDED_FEATURES` flag in the ENV file and add a `featureName` flag into menu and sub-menu as well.

```
menu = [
  {
    title: 'SIDEBAR_MENU.CONTENT',
    featureName: 'Content',
    ...
    subMenus: [
      {
        title: 'SIDEBAR_MENU.SHOWS',
        featureName: 'Shows',
        ...
      },
      {
        title: 'SIDEBAR_MENU.SCHEDULES',
        featureName: 'Schedules',
        ...
      },
      {
        title: 'SIDEBAR_MENU.CHANNELS',
        featureName: 'Channels',
        ...
      }
    ]
  },
  ...
]
```

This is available feature name: `["content.shows", "content.schedules", "content.channels", "content.catalogs", "content.categories", "content.casts", "content.clips", "content.playlists", "content.updates", "licenses.contracts", "licenses.licensors", "user-management.usergroups", "system-configuration.payment-gateways", "system-configuration.risk-engine"]`

Please refer to `src/components/sideBar/SideBarMenu.ts`

Exp:
1. To exclude the Content & User Management menus and all of sub-menu: `REACT_APP_EXCLUDED_FEATURES=["content.*", "userManagement.*"]`
2. To exclude a list of sub-menu such as show, schedulers: `REACT_APP_EXCLUDED_FEATURES=["content.shows", "content.schedulers"]`

### Build BO are only for Shell Money and User User management
update the file .env.qa (`qa` is environment, it could be .env.development | .env.qc | .env.production)
`REACT_APP_EXCLUDED_FEATURES=["content.*","licenses.*"]`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

