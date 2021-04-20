import React, { useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import '../styles/users.scss';

interface IUser {
  id: number;
  name: string;
  email: string;
}

const User = () => {

  const [users, setUsers] = useState<IUser[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<IUser>()

  const handleCreateUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!name || !email) {
      alert('Preencha ambos os campos!');
      return;
    }

    const id = Math.floor(Math.random() * 1000);
    const newUser = {
      id,
      name,
      email,
    }

    setUsers([...users, newUser]);
    setName('');
    setEmail('');
  }

  const handleDeleteUser = (id: number) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  }

  const handleEditUser = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedUsers = users.map(user => user.id === selectedUser?.id ? selectedUser : user)
    setUsers(updatedUsers);
    setSelectedUser(undefined);
  }

  return (
    <div className="container">
      <div className="head">
        <h4>Lista de Usuários</h4>

        {selectedUser ? (
          <form onSubmit={handleEditUser}>
            <input type="text" placeholder="Nome" name="name" value={selectedUser.name} onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value})} />
            <input type="email" placeholder="E-mail" name="email" value={selectedUser.email} onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value})} />

            <input type="submit" value="Editar" />
          </form>
        ) : (
          <form onSubmit={handleCreateUser}>
            <input type="text" placeholder="Nome" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="E-mail" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input type="submit" value="Cadastrar" />
          </form>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><button><FiEdit2 onClick={() => setSelectedUser(user)} /></button></td>
              <td><button onClick={(e) => handleDeleteUser(user.id)}><FiTrash2 /></button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default User;