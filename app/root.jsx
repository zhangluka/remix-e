import { Link, Meta, Outlet, Scripts } from "@remix-run/react";
export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA"></link>
      </head>
      <body>
        <h1>remix !</h1>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
