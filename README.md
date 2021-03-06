![Unit Tests CI](https://github.com/var-bin/reactjs-2019q1/workflows/Unit%20Tests%20CI/badge.svg)
[![Build Status](https://img.shields.io/travis/var-bin/reactjs-2019q1?label=Travis%20CI&logo=Travis&style=flat-square)](https://travis-ci.org/var-bin/reactjs-2019q1)
[![Build status](https://ci.appveyor.com/api/projects/status/eg1ql391rj0is3cw?svg=true)](https://ci.appveyor.com/project/var-bin/reactjs-2019q1)

# reactjs-2019q1

![find your movie example](./find-your-movie.min.jpg)

## Init step
* `git clone https://github.com/var-bin/reactjs-2019q1.git`
* `yarn`

## Dev Env
* `yarn start`

## Prod Env
* `yarn build`

## Test Env
* `yarn test`
* `yarn test:watch // watch mode`
* `yarn test:coverage // add coverage`
* `yarn e2e // e2e tests via cypress`
* `yarn e2e:open // e2e tests via cypress and open browser`

## List of tasks
* ### HT1
  * [Core concepts](https://github.com/var-bin/reactjs-2019q1/tree/reactjs-2019q1-ht1/src/ht1)
* ### HT2 - Webpack:
  * [Build configs](https://github.com/var-bin/reactjs-2019q1/tree/reactjs-2019q1-ht2/buildTools) for each env
  * A [bunch of tests](https://github.com/var-bin/reactjs-2019q1/tree/reactjs-2019q1-ht2/src/ht1) for checking test script + [Jest](https://jestjs.io/), [Enzyme](https://airbnb.io/enzyme/)
* ### HT3 - Components:
  * A [bunch of components](https://github.com/var-bin/reactjs-2019q1/tree/reactjs-2019q1-ht3/src/components)
  * [Error Boundaries](https://github.com/var-bin/reactjs-2019q1/tree/reactjs-2019q1-ht3/src/components/error-boundary) Component
* ### HT4 - Testing:
  * A [bunch of unit-tests](https://github.com/var-bin/reactjs-2019q1/tree/reactjs-2019q1-ht4/src)
  * A [simple e2e test](https://github.com/var-bin/reactjs-2019q1/blob/reactjs-2019q1-ht4/src/App.e2e.js)
  * [Config](https://github.com/var-bin/reactjs-2019q1/blob/reactjs-2019q1-ht4/.travis.yml) for [Travis CI](https://travis-ci.org/)
  * [Config](https://github.com/var-bin/reactjs-2019q1/blob/reactjs-2019q1-ht4/appveyor.yml) for [AppVeyor CI](https://travis-ci.org/)
* ### HT5 - Flux + Redux:
  * [Link to PR](https://github.com/var-bin/reactjs-2019q1/pull/13/files)
  * Connect App to Redux
  * Cover actions, reducers and new components by unit-tests
