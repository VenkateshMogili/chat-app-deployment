import { mount, shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Contacts from '../components/Contacts';
import ContactsClass from '../components/Contacts-Class';

describe('App Component Test Cases', () => {
  // 1.snapshot
  it('Snapshot create/update test case', () => {
    const AppComponent = renderer.create(
      <Router>
        <App />
      </Router>
    ).toJSON();
    expect(AppComponent).toMatchSnapshot();
  })
  // 2.complete component
  it('Snapshot create/update test case for Header', () => {
    const HeaderComponent = mount(
      <Router>
        <Header />
      </Router>
    );
    expect(HeaderComponent).toMatchSnapshot();
  })
  // 3.isolated component
  it('Snapshot create/update test case for Dashboard', () => {
    const HeaderComponent = mount(
      <Router>
        <Dashboard />
      </Router>
    );
    expect(HeaderComponent).toMatchSnapshot();
  })

})


