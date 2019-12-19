import { put, call, takeLatest, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import history from '../../../services/history';

import reduxSagaFirebase from '../../../config/firebase';

import { requestMessage, successMessage, successOnlyMessage } from './actions';

function* requestMenssageDB() {
  try {
    const data = yield call(reduxSagaFirebase.database.read, 'fcamara');
    const dataArray = Object.keys(data).map(chave => ({
      ...data[chave],
      id: chave,
    }));

    yield put(successMessage(dataArray));

    toast.success('Dados carregados com Sucesso!', {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch {
    toast.error(
      'Erro interno da API, nãos foi possivel carregar os dados, desculpe!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

function* requestOnlyMenssageDB({ id }) {
  try {
    const data = yield call(reduxSagaFirebase.database.read, `fcamara/${id}`);

    yield put(successOnlyMessage(data));
  } catch {
    toast.error(
      'Erro interno da API, nãos foi possivel carregar os dados, desculpe!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

function* createMenssageDB({ payload }) {
  try {
    yield call(reduxSagaFirebase.database.create, 'fcamara', payload);

    toast.success('Menssagem encaminhada com total sucesso!', {
      position: toast.POSITION.TOP_CENTER,
    });
    history.push('/');
  } catch {
    toast.error(
      'Erro interno da API, nãos foi possivel criar a menssagem, desculpe!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

function* deleteMenssageDB({ id }) {
  try {
    yield call(reduxSagaFirebase.database.delete, `fcamara/${id}`);

    yield put(requestMessage());

    toast.warn('Sua menssagem foi apagada!', {
      position: toast.POSITION.TOP_CENTER,
    });
  } catch {
    toast.error(
      'Erro interno da API, nãos foi possivel deletar a menssagem, desculpe!',
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  }
}

export default all([
  takeLatest('@menssage/REQUEST_ALL_MESSAGE', requestMenssageDB),
  takeLatest('@menssage/REQUEST_ONLY_MESSAGE', requestOnlyMenssageDB),
  takeLatest('@menssage/CREATE_ONLY_MESSAGE', createMenssageDB),
  takeLatest('@menssage/DELETE_ONLY_MESSAGE', deleteMenssageDB),
]);
