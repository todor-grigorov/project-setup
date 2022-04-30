import { createRoot } from 'react-dom/client';
// import ReactDOM from "react-dom";
// import { render } from 'react-dom';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
// render(<App />, document.getElementById("root"))

