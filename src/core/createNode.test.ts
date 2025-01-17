import { describe, it, expect } from 'vitest';
import { createNode } from './createNode';

describe('createNode', () => {
    it('should create a node with type and props', () => {
        const node = createNode('div', { id: 'app' }, 'Hello, world;');

        expect(node).toEqual({
            type: 'div',
            props: {
                id: 'app',
                children: [{
                    type: 'TEXT_ELEMENT',
                    props: {
                        nodeValue: 'Hello, world;',
                        children: [],
                    },
                }],
            },
        });
    });
});