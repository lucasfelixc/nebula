type Props = {
    [key: string]: any;
    children?: NebulaNode[];
};

type NebulaNode = {
    type: string | Function;
    props: Props;
};