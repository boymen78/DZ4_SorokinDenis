import React, { useState, useEffect } from 'react';
import MainPage from './pages/mainPage/MainPage';
import ErrorPage from './pages/erorPage/ErorPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState(null);

  useEffect(() => {
    const name = prompt('Введите ваше имя:');
    const lastname = prompt('Введите вашу фамилию:');
    const enteredUser = { name, lastname };
    setUser(enteredUser);

    if (name === 'John' && lastname === 'Johns') {
      setPage('main');
    } else {
      setPage('error');
    }
  }, []);

  if (page === 'main' && user) {
    return <MainPage user={user} />;
  }

  if (page === 'error' && user) {
    return <ErrorPage user={user} />;
  }

  return null; // Возвращаем null, пока страница и пользователь не установлены
};

export default App;
