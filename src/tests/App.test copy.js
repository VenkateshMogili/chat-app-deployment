import { mount, shallow } from 'enzyme';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import Contacts from '../components/Contacts';
import ContactsClass from '../components/Contacts-Class';
// import axios from 'axios';

// import { fetchData,API } from '../ApiCalls';
// jest.mock('axios');

// describe('fetchData', () => {
//   it('fetches successfully data from an API', async () => {
//  const data = {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
// 		"bs": "harness real-time e-markets"
// 	}
//     };
 
// 		axios.get.mockImplementationOnce(() => Promise.resolve(data));
// 		await expect(fetchData(1)).resolves.toEqual(data);
// 		expect(axios.get).toHaveBeenCalledWith(
//       `${API}/`+1,
//     );
//   });
 
//   it('fetches erroneously data from an API', async () => {
// const errorMessage = 'Network Error';
 
//     axios.get.mockImplementationOnce(() =>
//       Promise.reject(new Error(errorMessage)),
// 		);
// 		await expect(fetchData(1)).rejects.toThrow(errorMessage);
//   });
// });



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
  it('Snapshot create/update test case for Contacts', () => {
    const HeaderComponent = shallow(<Contacts />);
    expect(HeaderComponent).toMatchSnapshot();
  })

  // 4.Elements rendering
  it('Render paragraph 1 time in Contacts Component', () => {
    const contactsComponent = shallow(<Contacts />);
    let header = <p>1</p>;
    expect(contactsComponent.find('p').length).toBe(1);
  })
   it('Render heading of Contacts Component', () => {
    const contactsComponent = shallow(<Contacts />);
    let header =  <h1 className="d-flex flex-column pl-3">Contacts Application</h1>
    expect(contactsComponent.contains(header)).toBe(true);
   })
  // 5.render props
  it('Render input props of Contacts Component', () => {
    const inputTag = shallow(<Contacts />);
    let inputProps = inputTag.find('input').props();
    expect(inputProps.defaultValue).toEqual('');
  })
  // 6.render state in functional components
  it('Render version state in Contacts Component', () => {
    const inputTag = shallow(<Contacts />);
    let inputProps = inputTag.find('p').text();
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
    const component = shallow(<Contacts />);
    let button = component.find('button');
    button.simulate('click');
    let inputProps = component.find('p').text();
    expect(inputProps).toEqual("2");
  })

})
