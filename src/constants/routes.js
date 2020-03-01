export default {
  log_in: 'https://trello.backend.tests.nekidaem.ru/api/v1/users/login/',
  get_cards: 'https://trello.backend.tests.nekidaem.ru/api/v1/cards/',
  add_card: 'https://trello.backend.tests.nekidaem.ru/api/v1/cards/',
  update_card: id => `https://trello.backend.tests.nekidaem.ru/api/v1/cards/${id}/`,
  delete_card: id => `https://trello.backend.tests.nekidaem.ru/api/v1/cards/${id}/`,
};
