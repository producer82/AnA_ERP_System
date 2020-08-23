import React from 'react';
import logo from './logo.svg';
import './App.css';
import Club from './components/Club';

const clubs = [
  {
    'id' : 1,
    'logo' : 'https://placeimg.com/64/64/any',
    'name' : 'AnA',
    'department' : 'software',
    'nop' : 16
  },
  {
    'id' : 2,
    'logo' : 'https://placeimg.com/64/64/any',
    'name' : 'Apple:Pie',
    'department' : 'software',
    'nop' : 22
  },
  {
    'id' : 3,
    'logo' : 'https://placeimg.com/64/64/any',
    'name' : 'EDCAN',
    'department' : 'software',
    'nop' : 13
  }
]

function App() {
  return (
    <div>
      {
        clubs.map(c => {
          return (
            <Club
              key={c.id}
              id={c.id}
              logo={c.logo}
              name={c.name}
              department={c.department}
              nop={c.nop}
            />
          )
        })
      }
    </div>
  );
}

export default App;
