## Задание
API приложение для **барахолки**.

Должны быть сущности пользователей и товаров. Товары разнызх типов имеют разный набор доп. аттрибутов.
У всех товаров есть поля:
  - название
  - тип
  - цена
  - дата добавления

В приложении есть  роли:
 - admin:
    - менеджит типы товаров и наборы аттрибутов в каждом из них.
 - обычный пользователь:
   - может менеджить свои товары
 - не авторизированый пользователь:
    - просматривает списки товаров с фильтрацией по типу, названию, автору товара и сортировкой по цене или дате добавления
    - просматривает страинцу одного товара.

Добавление нового пользователя должно осуществояться консольной командой с выбором роли (admin или обычный пользователь).
