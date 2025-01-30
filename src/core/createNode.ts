type Props = {
    [key: string]: any;
    children?: NebulaNode[];
};

export type NebulaNode = {
    type: string | Function;
    props: Props;
};

export function createNode(type: string | Function, props: Props, ...children: any[]): NebulaNode {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => typeof child === 'object' ? child : createTextNode(child)),
        },
    };
};

function createTextNode(text: string | number): NebulaNode {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: [],
        },
    };
}