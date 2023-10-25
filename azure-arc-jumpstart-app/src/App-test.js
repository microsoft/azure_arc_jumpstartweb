import { useLocation } from 'react-router-dom';

function findNodeByPath(node, pathname, breadcrumb = []) {
  // Check if the current node's path matches the given pathname.
  if (node.path === pathname) {
    breadcrumb.push(node.title); // Add the current node's title to the breadcrumb.
    return breadcrumb;
  }

  // If the node has children, recursively search in its children.
  if (node.children && node.children.length > 0) {
    for (const child of node.children) {
      const result = findNodeByPath(child, pathname, [...breadcrumb, node.title]);
      if (result) {
        return result;
      }
    }
  }

  return null; // Return null if no match is found.
}

function App() {
  const location = useLocation();
  const nodeTree = {
    title: 'Home',
    path: 'home',
    children: [{ title: 'Jumpstart', path: 'home/jumpstart', children: [] }],
  };

  const breadcrumb = findNodeByPath(nodeTree, location.pathname);
  console.log(breadcrumb);
  return (
    <div> 
        <h1>App</h1>
      {breadcrumb && (
        <nav>
          {breadcrumb.map((title, index) => (
            <span key={title}>
              {index > 0 && ' / '}
              {title}
            </span>
          ))}
        </nav>
      )}
    </div>
  );
}

export default App;
