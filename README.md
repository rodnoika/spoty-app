<<<<<<< HEAD
Spoty-app
=======
# Spoty-app
https://spoty-app.atlassian.net/wiki/x/AoAE(ссылка документаций confluence edition)
>>>>>>> ef31282f9603cd1be26c7bf7c18e5a8913d55e68
Обзор

Spoty-app веб-приложение где пользователь зарегистрировавшись может найти или узнать альбом и исполнителя, и оставить свою оценку по альбому.

 Инициализация и запуск веб-приложения

Шаг 1: Установка и настройка окружения разработки
1.1 Установка фреймворка React+Vite и Node.js
Шаг 2: Получение исходного кода
2.1 Клонируйте репозиторий проекта(ссылка:   ) с использованием Git или загрузите архив и распакуйте его.
Шаг 3: Установка библиотек
3.1 Откройте с помощью командной строкой директорию проекта
3.2 Скачайте через командную строку библиотеки react-router-dom(с помощью команды npm install react-router-dom ) 
Шаг 4: Запуск проекта
4.1 Откройте с помощью командной строкой директорию проекта
4.2 Запустить локальный сервер с помощью команды npm run dev


<<<<<<< HEAD
Процесс проектирования и разработки:

1Разделение сайта на Main_Page(Где показываются популярные исполнители и альбомы), Search_Page(Где находятся все альбомы из БД и их можно фильтровать), Welcome_Page(Которая первым вас встречает и предлагает зарегистрироваться)

2В проекте не было добавлено никаких сторонних AP, вся data находится в двух json файлах:data.js, albumsdata.js. Первая для Main_Page, а вторая для Search_Page.
=======
 Процесс проектирования и разработки:

Разделение сайта на Main_Page(Где показываются популярные исполнители и альбомы), Search_Page(Где находятся все альбомы из БД и их можно фильтровать), Welcome_Page(Которая первым вас встречает и предлагает зарегистрироваться)

В проекте не было добавлено никаких сторонних AP, вся data находится в двух json файлах:data.js, albumsdata.js. Первая для Main_Page, а вторая для Search_Page.
>>>>>>> ef31282f9603cd1be26c7bf7c18e5a8913d55e68

 

 

<<<<<<< HEAD
3Информация об users находится не в самом проекте как можно было подумать, а хранится в самом браузере LocalStorage, это помогает сохранят нужную информацию даже после перезагрузок страницы или перехода в другие страницы
=======
Информация об users находится не в самом проекте как можно было подумать, а хранится в самом браузере LocalStorage, это помогает сохранят нужную информацию даже после перезагрузок страницы или перехода в другие страницы
>>>>>>> ef31282f9603cd1be26c7bf7c18e5a8913d55e68

 

 

<<<<<<< HEAD
4Переход через страницы был сделан с помощью маршрутизатора библиотеки react-router-dom, из за этого переход по страницам удобен и приятен

 

5Было решено, что информацию об альбомах можно будет посмотреть через модальное окно нажав на иконку альбома.

 

6Фильтрация в Search_Page была сделана с помощью простого быстрого перебора каждого символа input-а, чтобы увеличить точность нахождения нужных для пользователя альбом
=======
Переход через страницы был сделан с помощью маршрутизатора библиотеки react-router-dom, из за этого переход по страницам удобен и приятен

 

Было решено, что информацию об альбомах можно будет посмотреть через модальное окно нажав на иконку альбома.

 

Фильтрация в Search_Page была сделана с помощью простого быстрого перебора каждого символа input-а, чтобы увеличить точность нахождения нужных для пользователя альбом
>>>>>>> ef31282f9603cd1be26c7bf7c18e5a8913d55e68

  



Компромиссы, принятые во время разработки, и известные проблемы:

<<<<<<< HEAD
1В начале я задумывался о дизайне и решил черпать вдохновение у прародителя. Хотя в проекте можно найти некоторые схожести с Spotify, но в основном он был реализован с уникальным подходом, минимизируя копирование.

2Когда пришло время создавать систему регистрации и входа, я обдумывал, какой механизм использовать для хранения пользователей, и решил остановиться на LocalStorage. Я считаю, что это была хорошая идея, поскольку информацию оттуда легко извлечь и просмотреть, и она всегда доступна.

3При разработке главной страницы и функционала взаимодействия с альбомами, было принято решение представлять информацию через модальные окна. Это связано с тем, что перемещение на отдельные страницы с избыточным объемом информации может затруднить восприятие данных о альбоме посетителями. Множество исследований подтвердило, что предоставление компактной информации способствует ее более эффективному усвоению и пониманию.

Известные проблемы:

1Веб-приложение не имеет никаких шифровании против взлома, ведь это лишь task-проект. Но его можно добавить, хэшируя пароли с ключом, чтобы злоумышленник не смог заполучить пароли наших пользователей достав только хэш(ему потребуется еще ключ)

2Малое количество альбомов, это можно легко исправить добавив дополнительные объекты в json файлы или подключив API с готовыми списками альбом.

Заключение:

На этом моя разработка заканчивается, при разработке этого веб-приложения я изучил множество трюков, которых хватает во время разработки, и улучшил свои навыки пользованием react. В будущем Spoty можно использовать как личное хранилище любимых синглов, трэков и альбомов от любимых исполнителей. Надеюсь вам мой проект понравится, и я смог оправдать ваши возможные ожидания
=======
В начале я задумывался о дизайне и решил черпать вдохновение у прародителя. Хотя в проекте можно найти некоторые схожести с Spotify, но в основном он был реализован с уникальным подходом, минимизируя копирование.

Когда пришло время создавать систему регистрации и входа, я обдумывал, какой механизм использовать для хранения пользователей, и решил остановиться на LocalStorage. Я считаю, что это была хорошая идея, поскольку информацию оттуда легко извлечь и просмотреть, и она всегда доступна.

При разработке главной страницы и функционала взаимодействия с альбомами, было принято решение представлять информацию через модальные окна. Это связано с тем, что перемещение на отдельные страницы с избыточным объемом информации может затруднить восприятие данных о альбоме посетителями. Множество исследований подтвердило, что предоставление компактной информации способствует ее более эффективному усвоению и пониманию.

Известные проблемы:

Веб-приложение не имеет никаких шифровании против взлома, ведь это лишь task-проект. Но его можно добавить, хэшируя пароли с ключом, чтобы злоумышленник не смог заполучить пароли наших пользователей достав только хэш(ему потребуется еще ключ)

Малое количество альбомов, это можно легко исправить добавив дополнительные объекты в json файлы или подключив API с готовыми списками альбом.

Заключение:

На этом моя разработка заканчивается, при разработке этого веб-приложения я изучил множество трюков, которых хватает во время разработки, и улучшил свои навыки пользованием react. В будущем Spoty можно использовать как личное хранилище любимых синглов, трэков и альбомов от любимых исполнителей. Надеюсь вам мой проект понравится, и я смог оправдать ваши возможные ожидания
>>>>>>> ef31282f9603cd1be26c7bf7c18e5a8913d55e68
"# Spoty" 
