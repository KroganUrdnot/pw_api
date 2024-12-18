import { test, expect, MountResult } from '@playwright/experimental-ct-react';
import TodoApp from '../src/components/Todo';
import React from 'react';

test.describe('TodoApp Component', () => {
    test('renders TodoApp component', async function (this: void, { mount }) {
        const component: MountResult = await mount(<TodoApp />);
        await expect(component).toContainText('Todo List');
    });

    test('adds a new todo', async function (this: void, { mount }) {
        const component: MountResult = await mount(<TodoApp />);
        await component.locator('input[placeholder="Add a new todo"]').fill('New Todo');
        await component.locator('text=Add').click();
        await expect(component).toContainText('New Todo');
    });

    test('toggles a todo', async function (this: void, { mount }) {
        const component: MountResult = await mount(<TodoApp />);
        await component.locator('input[placeholder="Add a new todo"]').fill('New Todo');
        await component.locator('text=Add').click();
        await component.locator('text=Complete').click();
        await expect(component.locator('text=New Todo')).toHaveCSS('text-decoration', 'line-through');
    });

    test('deletes a todo', async function (this: void, { mount }) {
        const component: MountResult = await mount(<TodoApp />);
        await component.locator('input[placeholder="Add a new todo"]').fill('New Todo');
        await component.locator('text=Add').click();
        await component.locator('text=Delete').click();
        await expect(component.locator('text=New Todo')).not.toBeVisible();
    });
});