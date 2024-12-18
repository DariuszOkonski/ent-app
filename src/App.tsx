import './App.css';
import useUsers from './hooks/useUsers';
import userService, { User } from './services/user-service';

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  // const [users, setUsers] = useState<User[]>([]);
  // const [error, setError] = useState('');
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);

  //   const { request, cancel } = userService.getAll<User>();
  //   request
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => {
  //       if (err instanceof AbortController || err instanceof CanceledError)
  //         return;

  //       setError(err.message);
  //     })
  //     .finally(() => setIsLoading(false));

  //   return () => cancel();
  // }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: 'Mosh' };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {error && <p className='text-danger'>{error}</p>}
      {isLoading && <div className='spinner-border'></div>}
      <button className='btn btn-primary mb-3' onClick={addUser}>
        Add
      </button>

      <ul className='list-group'>
        {users.map((user) => (
          <li
            key={user.id}
            className='list-group-item d-flex justify-content-between'
          >
            {user.name}

            <div>
              <button
                className='btn btn-outline-secondary mx-1'
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className='btn btn-outline-danger'
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
