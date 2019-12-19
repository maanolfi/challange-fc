export function requestMessage() {
  return {
    type: '@menssage/REQUEST_ALL_MESSAGE',
  };
}

export function successMessage(data) {
  return {
    type: '@menssage/REQUEST_SUCCESS',
    payload: data,
  };
}

export function createMessage(data) {
  return {
    type: '@menssage/CREATE_ONLY_MESSAGE',
    payload: data,
  };
}

export function deleteOnlyMessage(id) {
  return {
    type: '@menssage/DELETE_ONLY_MESSAGE',
    id,
  };
}

export function requestOnlyMessage(id) {
  return {
    type: '@menssage/REQUEST_ONLY_MESSAGE',
    id,
  };
}

export function successOnlyMessage(data) {
  return {
    type: '@menssage/REQUEST_ONLY_SUCCESS',
    payload: data,
  };
}
