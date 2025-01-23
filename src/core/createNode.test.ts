import { describe, it, expect } from 'vitest';
import { createNode } from './createNode';

describe('createNode', () => {
    it('should create a node with text child', () => {
        const node = createNode('div', { id: 'app' }, 'Hello, world');

        expect(node).toEqual({
            type: 'div',
            props: {
                id: 'app',
                children: [{
                    type: 'TEXT_ELEMENT',
                    props: {
                        nodeValue: 'Hello, world',
                        children: [],
                    },
                }],
            },
        });
    });

    it('should create a node with element child', () => {
        const child = createNode('span', { id: 'child' }, 'Hello, child');
        const node = createNode('div', { id: 'app' }, child);

        expect(node).toEqual({
            type: 'div',
            props: {
                id: 'app',
                children: [{
                    type: 'span',
                    props: {
                        id: 'child',
                        children: [{
                            type: 'TEXT_ELEMENT',
                            props: {
                                nodeValue: 'Hello, child',
                                children: [],
                            },
                        }],
                    },
                }],
            },
        });
    });
});