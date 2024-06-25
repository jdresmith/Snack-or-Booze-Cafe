### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
The purpose of React Router is to enable navigation and routing in React applications.

- What is a single page application?
A Single Page Application (SPA) is a type of web application that operates within a single web page, dynamically updating the content as the user interacts with the application, without requiring a full page reload from the server.

- What are some differences between client side and server side routing?
1) Routing logic is executed on the client-side within the web browser vs on  the web server for the latter.
2) client-side routing, the initial HTML, CSS, and JavaScript resources are loaded when the user visits the application's entry point, while in server-side routing, each navigation request results in a new HTML page being generated and sent from the server to the client.
3) Page rendering occurs on the client-side using JavaScript frameworks like React, Angular, or Vue.js, while the latter  occurs on the server-side, where the server generates complete HTML pages for each route and sends them to the client.

- What are two ways of handling redirects with React Router? When would you use each?
You may use the `Redirect` component which allows you to declare the target URL that the user should be redirected to. React Router also provides a `history` object that you can use to programmatically navigate to different URLs using the `useHistory` hook or `withRouter`.

- What are two different ways to handle page-not-found user experiences using React Router? 
You can define a `<Route>` component with a path of "*" (wildcard route) at the end of your route configuration or you may use the <Redirect> component to handle page-not-found experiences by conditionally redirecting users to a specific page.

- How do you grab URL parameters from within a component using React Router?
You can grab URL parameters from within a component using React Router by accessing the match prop provided by the Route component. The match prop contains information about how the current URL matches the route's path, including any URL parameters.

- What is context in React? When would you use it?
Context is a feature that allows you to pass data through the component tree without having to pass props manually at every level. It provides a way to share values such as themes, localization preferences, or authentication status across the entire React component tree.

- Describe some differences between class-based components and function
  components in React.
  1) Class components are  defined using ES6 classes that extend `React.Component` while function components return JSX and are simpler in structure, not requiring a class definition.
  2) Class components can manage state using the state property and setState() method provided by React while function components. With the use of hooks such as useState, function components can now manage state.
  3) Class components can use lifecycle methods such as componentDidMount(), componentDidUpdate(), componentWillUnmount(), etc., for managing side effects and updating the UI. functional components can now use `useEffect` to perform side effects and manage lifecycle events.

- What are some of the problems that hooks were designed to solve?
1) Hooks, such as useState, provide a simpler and more concise way to manage class component state.
2) Hooks, particularly custom hooks, enable the encapsulation and reuse of stateful logic across multiple components.
3) Hooks allow for more fine-grained control over rendering and optimization, helping to improve the performance of React applications.
