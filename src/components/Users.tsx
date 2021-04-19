import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import '../styles/users.scss';

const User = () => {
  return (
    <div className="container">
      <div className="head">
        <h4>Lista de Usuários</h4>

        <form>
          <input type="text" placeholder="Nome" name="name" />
          <input type="email" placeholder="E-mail" name="email" />

          <input type="submit" value="Cadastrar" />
        </form>
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
          <tr>
            <td>1</td>
            <td>Gabriel</td>
            <td>gabriel@hotail.com</td>
            <td><button><FiEdit2 /></button></td>
            <td><button><FiTrash2 /></button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Gabriel</td>
            <td>gabriel@hotail.com</td>
            <td><button><FiEdit2 /></button></td>
            <td><button><FiTrash2 /></button></td>
          </tr>
          <tr>
            <td>1</td>
            <td>Gabriel</td>
            <td>gabriel@hotail.com</td>
            <td><button><FiEdit2 /></button></td>
            <td><button><FiTrash2 /></button></td>
          </tr>
        </tbody>
      </table>

    </div>
  )
}

export default User;