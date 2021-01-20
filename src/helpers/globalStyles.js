import { theme } from 'twin.macro'

const GlobalStyles = `
  * {
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
    margin: 0;
    padding: 0;
  }
  * {
      --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: rgba(59, 130, 246, 0.5);
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
  }
  * {
    --tw-shadow: 0 0 #0000;
  }
  html{
    -webkit-text-size-adjust: 100%;
    font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
    line-height: 1.4;
  }
  body{
    margin: 0;
    font-family: inherit;
    line-height: inherit;
    background-color: ${theme`colors.dark`};
    font-weight: 300;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button {
    background-color: transparent;
    background-image: none;
  }
  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }
  img {
    border-style: solid;
  }
  button,
  [role="button"] {
    cursor: pointer;
  }
  table {
    border-collapse: collapse;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }
  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }
  img,
  video {
    max-width: 100%;
    height: auto;
  }
`

export default GlobalStyles
