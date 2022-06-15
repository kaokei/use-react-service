import React from 'react';
import 'reflect-metadata';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import { useService, observer, Injectable, Inject } from '@/index';

@Injectable()
class LogService {
  log(msg: string) {
    console.log(msg);
  }
}

@Injectable()
class UserService {
  name = 'zhangsan';
  age = 0;

  @Inject()
  logger!: LogService;

  incrementAge() {
    this.age++;
  }
}

function Person() {
  const user = useService(UserService);
  const [user2, logger] = useService([UserService, LogService]);
  const userText = String(user === user2);
  return (
    <div>
      <div data-testid="name">{user.name}</div>
      <div data-testid="age">{user.age}</div>
      <div data-testid="user">{userText}</div>
      <button
        type="button"
        onClick={() => user.incrementAge()}
        data-testid="incrementAgeBtn"
      >
        年龄+1
      </button>
      <button type="button" onClick={() => logger.log('hello world')}>
        logger button
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

    const userElement = screen.getByTestId('user');
    expect(userElement).toBeInTheDocument();
    expect(userElement).toHaveTextContent('true');

    const ageElement = screen.getByTestId('age');
    expect(ageElement).toBeInTheDocument();
    expect(ageElement).toHaveTextContent('0');

    fireEvent.click(screen.getByTestId('incrementAgeBtn'));
    expect(ageElement).toHaveTextContent('1');

    fireEvent.click(screen.getByTestId('incrementAgeBtn'));
    expect(ageElement).toHaveTextContent('2');
  });
});
