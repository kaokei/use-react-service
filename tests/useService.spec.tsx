import React from 'react';
import 'reflect-metadata';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { useService, observer, Injectable } from '@/index';

@Injectable()
class UserService {
  name = 'zhangsan';
  age = 0;

  incrementAge() {
    this.age++;
  }
}

function Person() {
  const user = useService(UserService);
  return (
    <div>
      <div data-testid="name">{user.name}</div>
      <div data-testid="age">{user.age}</div>
      <button
        type="button"
        onClick={() => user.incrementAge()}
        data-testid="incrementAgeBtn"
      >
        年龄+1
      </button>
    </div>
  );
}

const ObserverPerson = observer([UserService])(Person);

function App() {
  return <ObserverPerson />;
}

describe('App', () => {
  test('observer and useService', async () => {
    render(<App />);

    const nameElement = screen.getByTestId('name');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent('zhangsan');

    const ageElement = screen.getByTestId('age');
    expect(ageElement).toBeInTheDocument();
    expect(ageElement).toHaveTextContent('0');

    fireEvent.click(screen.getByTestId('incrementAgeBtn'));
    expect(ageElement).toHaveTextContent('1');

    fireEvent.click(screen.getByTestId('incrementAgeBtn'));
    expect(ageElement).toHaveTextContent('2');
  });
});
