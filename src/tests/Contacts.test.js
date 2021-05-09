import React from 'react';
import { shallow } from "enzyme";
import Contacts from '../components/Contacts';
import ContactsClass from '../components/Contacts-Class';

describe('Contact Component test cases', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Contacts />);
  })
   it('Snapshot create/update test case for Contacts', () => {
    expect(component).toMatchSnapshot();
  })

  // 4.Elements rendering
  it('Render paragraph 1 time in Contacts Component', () => {
    let header = <p>1</p>;
    expect(component.find('p').length).toBe(1);
  })
   it('Render heading of Contacts Component', () => {
    let header =  <h1 className="d-flex flex-column pl-3">Contacts Application</h1>
    expect(component.contains(header)).toBe(true);
   })
  // 5.render props
  it('Render input props of Contacts Component', () => {
    let inputProps = component.find('input').props();
    expect(inputProps.defaultValue).toEqual('');
  })
  // 6.render state in functional components
  it('Render version state in Contacts Component', () => {
    let inputProps = component.find('p').text();
    expect(inputProps).toEqual('1');
  })
  // 7.render state in class components
  it('Render version state in Contacts Component', () => {
    const inputTag = shallow(<ContactsClass />);
    let userState = inputTag.state('user');
    let userData = { name: "Venkatesh" };
    expect(userState).toEqual(userData);
  })
  it('Render version state in Contacts Component', () => {
    const inputTag = shallow(<ContactsClass />);
    let userState = inputTag.state('user');
    expect(userState.name).toEqual("Venkatesh");
  })
  
  // 8.functional testing
  it('Function in Contacts Component', () => {
    let button = component.find('button');
    button.simulate('click');
    let inputProps = component.find('p').text();
    expect(inputProps).toEqual("2");
  })
})
