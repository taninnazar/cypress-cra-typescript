/// <reference types="cypress" />
import React from 'react';
import App from './App';
import { mount } from '@cypress/react';

it('renders learn react link', () => {
  mount(<App />, {
      cssFiles: 'src/App.css',
  })
  cy.contains(/learn react/i)
});
