import React from 'react';
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import App from './App';

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return { 
  ...render (
  <Router history={history}>
      {component}
  </Router>
  )
}
}

it('should render the home page with all of the posts', () => {

  const { queryByTestId } = renderWithRouter(<App />) 
  const navbar = queryByTestId('navbar')
  const link = queryByTestId('home-link')

  expect(navbar).toContainElement(link);

  expect(queryByTestId('all-posts')).toBeTruthy();
})

it('should navigate to a filtered page', ()=> {
  const { queryByTestId } = renderWithRouter(<App />) 

  fireEvent.click(queryByTestId('news-link'))

  expect(queryByTestId('filtered-posts')).toBeTruthy();
})
