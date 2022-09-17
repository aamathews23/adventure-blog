---
title: React Basics
description: This tutorial explains the basics of React by walking through a
  todo list application.
date: 09/17/2022
type: blog
collection:
  - "2022"
image:
  src: https://res.cloudinary.com/dmrjua4dg/image/upload/v1663296373/Adventure%20Blog/vue-todo-tutorial.jpg
  alt: todo list application user interface
---
# React Basics

React is the most popular web tool in the front-end ecosystem. It is not a framework, but a library which assists you in creating functionally componentized websites and web applications.
This tutorial is geared to cover the basics of React and Typescript. It will assume you have a basic understanding of HTML and CSS.

## Vite

I like to use Vite as a build tool. It is a much faster tool than the standard `create-react-app` tool, while providing all of the same functionality. To read more about Vite checkout their documentation!

## Table of Contents

## React Overview

React is a Javascript library and tool in which to build front-end applications with.

The main tooling within the React ecosystem is:

- Node.js - the runtime environment which executes your React app
- Typescript - a type safe superset of Javascript which allows for strict typing of data
- create-react-app - the command line utility to create new React apps
- Babel & webpack - the React build system
- npm - the Node.js pacakage manager

## Basics of React

### Components

Components are what make a React application special. They are created by grouping together common HTML elements to produce a section of a web page. Components can be use to create other components as well. They can accept their own uniquely defined properties, they can manage their own state, they can emit their own events, and they can all have their own styling. Components are the building blocks of React applications.

Components in React are functional, meaning they are defined and returned by a function. An example component:

```ts
const MyComponent = () => {
  return (
    <div>
      Hello world!
    </div>
  );
};
```

### JSX

JSX is the HTML-like syntax that is returned by a React component function.

All HTML elements and custom components can be given attributes in the JSX markup. This is similar to attributes on HTML elements in regular HTML. There are a few differences; the first is all attributes are camel case (`myAttr`) rather than kebab case (`my-attr`).

```ts
const MyComponent = () => {
  return (
    <div id="my-component">
      Hello world!
    </div>
  );
};
```

#### Rules

The CSS `class` attribute is renamed to `className` for all HTML elements in JSX.

```ts
const MyComponent = () => {
  return (
    <div
      id="my-component"
      className="my-component"
    >
      Hello world!
    </div>
  );
};
```

You must wrap your JSX in parenthesis to span multiple lines. This code example is **_BAD_**:

```ts
const MyComponent = () => {
  return
    <div id="my-component">
    Hello world!
    </div>;
};
```

All JSX must be wrapped by one, singular, parent element. In our examples we've been using a `<div>`, but it could be anything. This code would **_NOT_** be valid:

```ts
const MyComponent = () => {
  return (
    <div id="my-component-1">
      Hello world!
    </div>
    <div id="my-component-2">
      What's up world!
    </div>
  );
};
```

#### Tips & Tricks

Below I'll show some tricks you can use when defining React components.

You can use the arrow functions implicit return to write components like this:

```ts
const MyComponent = () => (
  <div
    id="my-component"
    className="my-component"
  >
    Hello world!
  </div>
);
```

You don't have to wrap every component in a HTML element. There is a shadow wrapper element provided by React which you can use like so:

```ts
const MyComponent = () => {
  return (
    <>
      <div id="my-component-1">
        Hello world!
      </div>
      <div id="my-component-2">
        What's up world!
      </div>
    </>
  );
};
```

### Props

### State

### Event Handlers

## Todo Project

I like to use Vite which works as both a command line utility to create new React apps, and as a build system which is **_way_** faster than the default Babel and webpack system.

### How to Use React with Vite

This tutorial will use Vite as the project creation and build tool. Below I

## Conclusion
