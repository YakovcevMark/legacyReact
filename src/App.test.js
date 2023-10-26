
import SamuraiJSApp from "./App";
import {createRoot} from "react-dom/client";


test('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<SamuraiJSApp/>);
  root.unmount();
});