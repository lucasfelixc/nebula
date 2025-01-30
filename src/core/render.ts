import {NebulaNode} from './createNode';

export function render(node: NebulaNode, container: HTMLElement): void {
    const dom = 
        node.type === 'TEXT_ELEMENT'
            ? document.createTextNode(node.props.nodeValue)
            : document.createElement(node.type as string);

    Object.keys(node.props)
        .filter(key => key !== 'children')
        .forEach(name => {
            if (name.startsWith('on')) {
                const eventName = name.toLowerCase().substring(2);
                dom.addEventListener(eventName, node.props[name]);
            } else if (name === 'className') {
                (dom as HTMLElement).className = node.props[name];
            } else {
                (dom as any)[name] = node.props[name];
            }
        });

    node.props.children?.forEach(child => render(child, dom as HTMLElement));

    container.appendChild(dom);
}