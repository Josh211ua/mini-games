# `js`

## Folder Structure

The top level of the js folder is broken up into directories meant to create boundaries between the code of each game.

* `root`: Contains files that are needed to set up the base of the app. Should be used only by app.js.

* `shared`: Contains files that may be used by any game.
* `shared/components`: For components that are shared accross games.
* `shared/polyfills`: For utility level functionality that might be useful in any app.

* `games`: Contains a subdirectory for each game.

### Game folder structure
Each game subdirectory has folders based on how [Redux](https://github.com/gaearon/redux) works, so if you are not familiar with Redux check out the [official documentation](https://gaearon.github.io/redux/).

* `actions`: Actions get dispatched with this/these utility module(s)

* `components`: The main JS folder. All your React components should be in this folder, for big projects they might be grouped into seperate subfolders. E.g. a navigation component `Nav.react.js`

* `constants`: Action constants need to be defined in this/these utility module(s)

* `reducers`: Reducers manage the state of an app, basically a simplified implementation of Stores in Flux. For an introduction to reducers, watch [this talk](https://www.youtube.com/watch?v=xsSnOQynTHs) by @gaearon.

* `index.js`: The entry point of the game. Should export the interface to the game from the perspective of the rest of the app.

### Game interface
Each game must fulfill an interface that is consumed by the root of the app.
The point of this interface is to ensure that games can be written independently from each other while all working within the same app. Games should export the following variables:

1. name: string - The name to use when displaying the option to play that game.
2. iconurl?: string (TODO not implemented)
3. route: ReactRouter.Route - A route component that can be plugged directly into the router.
4. reducer: Redux.Reducer - A reducer for all state in the game
