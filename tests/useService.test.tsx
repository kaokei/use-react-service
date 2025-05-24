import { render, screen, fireEvent } from '@testing-library/react';
import { useService, declareProviders, Inject } from '@/index';

class LogService {
  log(msg: string) {
    console.log(msg);
  }
}

class UserService {
  name = 'zhangsan';
  age = 0;

  @Inject(LogService)
  logger!: LogService;

  incrementAge() {
    this.age++;
  }
}

function Person() {
  const user = useService(UserService, s => [() => s.name, () => s.age]);
  const logger = useService(LogService);
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
      <button type="button" onClick={() => logger.log('hello world')}>
        logger button
      </button>
    </div>
  );
}

const ObserverPerson = declareProviders([UserService, LogService])(Person);

describe('App', () => {
  test('observer and useService', async () => {
    render(<ObserverPerson />);

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
