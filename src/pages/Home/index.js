import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';

import * as ActionsMsg from '../../store/modules/menssages/actions';

import { Wrapper, ContainerLeft, ContainerRight } from './styles';

const Home = ({ requestMessage, requestOnlyMessage, deleteOnlyMessage }) => {
  const [idonly, setIdonly] = useState('');
  const { loading } = useSelector(state => state.menssage);
  const { data } = useSelector(state => state.menssage);
  const { onlydata, onlydataloading } = useSelector(state => state.menssage);

  const handleSelectMsg = id => {
    requestOnlyMessage(id);
    setIdonly(id);
  };

  useEffect(() => {
    requestMessage();
  }, []);

  return (
    <Wrapper>
      <ContainerLeft>
        {loading ? (
          <span>Carregando</span>
        ) : (
          data.map(elem => (
            <div key={elem.id}>
              <button type="button" onClick={() => handleSelectMsg(elem.id)}>
                <h2>{elem.title}</h2>
                <p>{elem.date}</p>
              </button>
            </div>
          ))
        )}
      </ContainerLeft>
      <ContainerRight>
        {onlydataloading ? (
          <div>
            <h2>Seja Bem Vindo ao seu leitor de mensagens preferido.!</h2>
            <p>Clique nas menssagens para abri-lá.</p>
          </div>
        ) : (
          <div>
            <h2>{onlydata.title}</h2>
            <p>{onlydata.subject}</p>
            <p>{onlydata.date}</p>
            <span>{onlydata.description}</span>

            <button type="button" onClick={() => deleteOnlyMessage(idonly)}>
              Excluir
            </button>
          </div>
        )}
      </ContainerRight>
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(ActionsMsg, dispatch);

export default connect(null, mapDispatchToProps)(Home);
