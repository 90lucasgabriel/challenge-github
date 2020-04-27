import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/9625765?s=460&u=f123476bf3a0547ffc2dfacecbf65ea0a5fc6ebd&v=4"
            alt="Lucas Gabriel"
          />
          <div>
            <strong>Github repositorio</strong>
            <p>Descriçaão do projeto no github deve aparecer aqui.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
