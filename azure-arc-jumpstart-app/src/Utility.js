export function extractRoutes(node, arr = []) {
    arr.push({
        path: node.path.replace(/\\/g, '/'),
        title: parseNodeTitle(node)
    });

    if (node.hasOwnProperty('children') && node.children.length > 0) {
        node.children.forEach(child => extractRoutes(child, arr));
    }
    return arr;
}

export function findNode(node, path) {
    if (node.path === path) {
        return node;
    }

    if (node.children && node.children.length > 0) {
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            const found = findNode(child, path);
            if (found) {
                return found;
            }
        }
    }

    return null;
}

export function parseNodeTitle(node) {
    if (node.frontMatter) {
        if (node.frontMatter.linkTitle) {
            return node.frontMatter.linkTitle;
        } else if (node.frontMatter.title) {
            return node.frontMatter.title;
        }
    }
    return node.path;
}

export function showNode(node) {
    if (node.name === 'img') {
        return false;
    }
    if (node.hasOwnProperty('frontMatter')) {
        if (node.frontMatter.hasOwnProperty('linkTitle')) {
            return true;
        }
    }
    return false;
}
