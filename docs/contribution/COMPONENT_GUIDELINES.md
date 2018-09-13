# Component guidelines

## UX Specification

Components are designed according to [Zeplin](https://app.zeplin.io/project/5864e02695b5754a69f56150) design created by UX guild.

## Naming

A component will be named with a `CamelCase` convention.

## Structure

Every component folder should be a single component.

## DataHook

1. Every component should accept a `dataHook` property in order to allow it to be tested. A component can extend `WixComponent` in order to be a pure component and get `dataHook` for free.

1. If you use Stylable, then using the the Stylable's StyleSheet function (usually named `style()`), will pass a `data-hook` prop onto the dom.

## API

1. The convension for allowing styling of the component's root element is by exposing a `className` property.
1. If the component is an abstraction over a native DOM element (e.g. `<input/>`), we may expose a `****Props` property that would be spread over the native element (e.g. an `<Input/>` component may have an `inputProps` property).

## Typography

1. For common typography, components should use the `Text` or `Heading` components.
1. In some cases where you can not use a component, you can use the `typography.scss` file directly.

## Documentation

1. Add `propTypes` to each component and document each property with a `/** */` comment on above. (AutoDocs will make use of it)

[Read here](./DOCUMENTING_COMPONENTS.md)
