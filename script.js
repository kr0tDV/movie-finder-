document.addEventListener('DOMContentLoaded', function() {
    // База данных фильмов (45 фильмов)
    const movies = [
        // Первые 5 фильмов остаются без изменений
        {
            id: 1,
            title: "Крестный отец",
            year: 1972,
            genre: ["Криминал", "Драма"],
            country: "США",
            director: "Фрэнсис Форд Коппола",
            rating: 9.2,
            description: "Криминальная сага о нью-йоркской сицилийской мафиозной семье Корлеоне.",
            poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"
        },
        {
            id: 2,
            title: "Темный рыцарь",
            year: 2008,
            genre: ["Боевик", "Криминал", "Драма"],
            country: "США",
            director: "Кристофер Нолан",
            rating: 9.0,
            description: "Бэтмен поднимает ставки в войне с преступностью в Готэме.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
        },
        {
            id: 3,
            title: "Побег из Шоушенка",
            year: 1994,
            genre: ["Драма"],
            country: "США",
            director: "Фрэнк Дарабонт",
            rating: 9.3,
            description: "История невиновного банкира, приговоренного к пожизненному заключению.",
            poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
        },
        {
            id: 4,
            title: "Форрест Гамп",
            year: 1994,
            genre: ["Драма", "Мелодрама"],
            country: "США",
            director: "Роберт Земекис",
            rating: 8.9,
            description: "Жизнь простодушного Форреста Гампа на фоне важных событий американской истории.",
            poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
        },
        {
            id: 5,
            title: "Начало",
            year: 2010,
            genre: ["Фантастика", "Боевик", "Триллер"],
            country: "США",
            director: "Кристофер Нолан",
            rating: 8.8,
            description: "Профессиональные воры, крадущие идеи прямо из подсознания людей.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
        },
        // Новые добавленные фильмы
        {
            id: 6,
            title: "Леон",
            year: 1994,
            genre: ["Боевик", "Криминал", "Драма"],
            country: "Франция",
            director: "Люк Бессон",
            rating: 8.8,
            description: "Профессиональный убийца берет под опеку 12-летнюю девочку после убийства ее семьи.",
            poster: "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_.jpg"
        },
        {
            id: 7,
            title: "Зеленая миля",
            year: 1999,
            genre: ["Драма", "Фэнтези"],
            country: "США",
            director: "Фрэнк Дарабонт",
            rating: 9.1,
            description: "История, происходящая в блоке смертников тюрьмы «Холодная гора».",
            poster: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg"
        },
        {
            id: 8,
            title: "Список Шиндлера",
            year: 1993,
            genre: ["Драма", "История", "Военный"],
            country: "США",
            director: "Стивен Спилберг",
            rating: 9.0,
            description: "История Оскара Шиндлера, спасшего более тысячи евреев во время Холокоста.",
            poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        },
        {
            id: 9,
            title: "Интерстеллар",
            year: 2014,
            genre: ["Фантастика", "Драма", "Приключения"],
            country: "США",
            director: "Кристофер Нолан",
            rating: 8.7,
            description: "Путешествие группы исследователей через червоточину в космосе.",
            poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            id: 10,
            title: "Бойцовский клуб",
            year: 1999,
            genre: ["Драма", "Триллер"],
            country: "США",
            director: "Дэвид Финчер",
            rating: 8.8,
            description: "Страдающий бессонницей офисный работник встречает загадочного торговца мылом.",
            poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        },
        // Продолжение новых фильмов...
        {
            id: 11,
            title: "Матрица",
            year: 1999,
            genre: ["Фантастика", "Боевик"],
            country: "США",
            director: "Лана и Лилли Вачовски",
            rating: 8.7,
            description: "Хакер Нео узнает шокирующую правду о реальности.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        },
        {
            id: 12,
            title: "Криминальное чтиво",
            year: 1994,
            genre: ["Криминал", "Драма"],
            country: "США",
            director: "Квентин Тарантино",
            rating: 8.9,
            description: "Несколько связанных историй из жизни бандитов и мелких преступников.",
            poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        },
        {
            id: 13,
            title: "Властелин колец: Возвращение короля",
            year: 2003,
            genre: ["Фэнтези", "Приключения", "Драма"],
            country: "Новая Зеландия",
            director: "Питер Джексон",
            rating: 9.0,
            description: "Завершающая часть трилогии о Кольце Всевластья.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        },
        {
            id: 14,
            title: "Титаник",
            year: 1997,
            genre: ["Драма", "Мелодрама"],
            country: "США",
            director: "Джеймс Кэмерон",
            rating: 8.4,
            description: "История любви на фоне гибели легендарного лайнера.",
            poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
        },
        {
            id: 15,
            title: "Паразиты",
            year: 2019,
            genre: ["Драма", "Триллер", "Комедия"],
            country: "Южная Корея",
            director: "Пон Джун Хо",
            rating: 8.6,
            description: "Бедная семья внедряется в жизнь богатых, что приводит к неожиданным последствиям.",
            poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
        },
        // Продолжаем добавлять фильмы до 45...
        {
            id: 16,
            title: "Достать ножи",
            year: 2019,
            genre: ["Детектив", "Комедия", "Криминал"],
            country: "США",
            director: "Райан Джонсон",
            rating: 8.0,
            description: "Расследование загадочной смерти богатого писателя.",
            poster: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg"
        },
        {
            id: 17,
            title: "Джокер",
            year: 2019,
            genre: ["Триллер", "Драма", "Криминал"],
            country: "США",
            director: "Тодд Филлипс",
            rating: 8.4,
            description: "История становления одного из самых известных злодеев комиксов.",
            poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
        },
        {
            id: 18,
            title: "Гладиатор",
            year: 2000,
            genre: ["Боевик", "Драма", "История"],
            country: "США",
            director: "Ридли Скотт",
            rating: 8.6,
            description: "Преданный генерал становится гладиатором, чтобы отомстить за убийство семьи.",
            poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        },
        {
            id: 19,
            title: "Однажды в Голливуде",
            year: 2019,
            genre: ["Драма", "Комедия"],
            country: "США",
            director: "Квентин Тарантино",
            rating: 7.7,
            description: "История актера и его дублера на фоне изменений в Голливуде 1969 года.",
            poster: "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg"
        },
        {
            id: 20,
            title: "Аватар",
            year: 2009,
            genre: ["Фантастика", "Боевик", "Приключения"],
            country: "США",
            director: "Джеймс Кэмерон",
            rating: 7.9,
            description: "Парализованный морпех становится частью программы по освоению Пандоры.",
            poster: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2JkLTkwZDMtMzU5ZGY1ZDRhZTJkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
        },
        // Продолжаем до 45 фильмов...
        {
            id: 21,
            title: "Дюнкерк",
            year: 2017,
            genre: ["Военный", "Драма", "История"],
            country: "Великобритания",
            director: "Кристофер Нолан",
            rating: 7.9,
            description: "Эвакуация союзных войск из Дюнкерка во время Второй мировой войны.",
            poster: "https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg"
        },
        {
            id: 22,
            title: "Достать ножи: Стеклянная луковица",
            year: 2022,
            genre: ["Детектив", "Комедия", "Криминал"],
            country: "США",
            director: "Райан Джонсон",
            rating: 7.1,
            description: "Бенуа Блан расследует убийство на частном острове миллиардера.",
            poster: "https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg"
        },
        {
            id: 23,
            title: "Остров проклятых",
            year: 2010,
            genre: ["Триллер", "Детектив", "Драма"],
            country: "США",
            director: "Мартин Скорсезе",
            rating: 8.2,
            description: "Расследование исчезновения пациентки психиатрической клиники на отдаленном острове.",
            poster: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            id: 24,
            title: "Социальная сеть",
            year: 2010,
            genre: ["Драма", "История"],
            country: "США",
            director: "Дэвид Финчер",
            rating: 7.8,
            description: "История создания Facebook и последовавших за этим судебных разбирательств.",
            poster: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjlhYTMwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            id: 25,
            title: "Драйв",
            year: 2011,
            genre: ["Криминал", "Драма", "Триллер"],
            country: "США",
            director: "Николас Виндинг Рефн",
            rating: 7.8,
            description: "Каскадер подрабатывает водителем для грабителей, но однажды все идет не по плану.",
            poster: "https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_.jpg"
        },
        // Остальные фильмы (26-45)...
        {
            id: 26,
            title: "Мстители: Финал",
            year: 2019,
            genre: ["Фантастика", "Боевик", "Приключения"],
            country: "США",
            director: "Энтони и Джо Руссо",
            rating: 8.4,
            description: "Завершающая часть саги о противостоянии Мстителей и Таноса.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
        },
        {
            id: 27,
            title: "Человек-паук: Через вселенные",
            year: 2018,
            genre: ["Мультфильм", "Фантастика", "Боевик"],
            country: "США",
            director: "Боб Персичетти, Питер Рэмзи",
            rating: 8.4,
            description: "Подросток Майлз Моралес становится Человеком-пауком в мультивселенной.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_.jpg"
        },
        {
            id: 28,
            title: "Бегущий по лезвию 2049",
            year: 2017,
            genre: ["Фантастика", "Триллер", "Драма"],
            country: "США",
            director: "Дени Вильнёв",
            rating: 8.0,
            description: "Офицер полиции раскрывает давно похороненную тайну, которая может погрузить общество в хаос.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg"
        },
        {
            id: 29,
            title: "Одержимость",
            year: 2014,
            genre: ["Драма", "Музыка"],
            country: "США",
            director: "Дэмьен Шазелл",
            rating: 8.5,
            description: "Молодой барабанщик поступает в консерваторию, где встречает преподавателя, меняющего его жизнь.",
            poster: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            id: 30,
            title: "Гравитация",
            year: 2013,
            genre: ["Фантастика", "Триллер", "Драма"],
            country: "США",
            director: "Альфонсо Куарон",
            rating: 7.7,
            description: "Астронавты оказываются в смертельной опасности после разрушения их космического корабля.",
            poster: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_.jpg"
        },
        {
            id: 31,
            title: "Отель «Гранд Будапешт»",
            year: 2014,
            genre: ["Комедия", "Драма", "Приключения"],
            country: "Германия",
            director: "Уэс Андерсон",
            rating: 8.1,
            description: "Приключения консьержа и его юного помощника в знаменитом европейском отеле между двумя мировыми войнами.",
            poster: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg"
        },
        {
            id: 32,
            title: "Достать ножи",
            year: 2019,
            genre: ["Детектив", "Комедия", "Криминал"],
            country: "США",
            director: "Райан Джонсон",
            rating: 8.0,
            description: "Расследование загадочной смерти богатого писателя.",
            poster: "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_.jpg"
        },
        {
            id: 33,
            title: "Бёрдмэн",
            year: 2014,
            genre: ["Драма", "Комедия"],
            country: "США",
            director: "Алехандро Гонсалес Иньярриту",
            rating: 7.7,
            description: "Бывшая звезда супергеройского кино пытается вернуть себе славу на Бродвее.",
            poster: "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_.jpg"
        },
        {
            id: 34,
            title: "Она",
            year: 2013,
            genre: ["Драма", "Мелодрама", "Фантастика"],
            country: "США",
            director: "Спайк Джонз",
            rating: 8.0,
            description: "Одинокий писатель влюбляется в операционную систему с искусственным интеллектом.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_.jpg"
        },
        {
            id: 35,
            title: "Мастер",
            year: 2012,
            genre: ["Драма"],
            country: "США",
            director: "Пол Томас Андерсон",
            rating: 7.1,
            description: "История харизматичного интеллектуала, создающего движение, похожее на секту.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTQ2NjQ5MzMwMV5BMl5BanBnXkFtZTcwMjczNTAzOA@@._V1_.jpg"
        },
        {
            id: 36,
            title: "Джанго освобожденный",
            year: 2012,
            genre: ["Драма", "Вестерн"],
            country: "США",
            director: "Квентин Тарантино",
            rating: 8.4,
            description: "Освобожденный раб вместе с охотником за головами отправляется спасать свою жену.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
        },
        {
            id: 37,
            title: "Жизнь Пи",
            year: 2012,
            genre: ["Приключения", "Драма", "Фэнтези"],
            country: "США",
            director: "Энг Ли",
            rating: 7.9,
            description: "Юноша оказывается в одной лодке с бенгальским тигром после кораблекрушения.",
            poster: "https://m.media-amazon.com/images/M/MV5BNTg2OTY2ODg5OF5BMl5BanBnXkFtZTcwODM5MTYxOA@@._V1_.jpg"
        },
        {
            id: 38,
            title: "Арго",
            year: 2012,
            genre: ["Триллер", "Драма", "История"],
            country: "США",
            director: "Бен Аффлек",
            rating: 7.7,
            description: "Операция по спасению американских дипломатов из Ирана под прикрытием съемок фантастического фильма.",
            poster: "https://m.media-amazon.com/images/M/MV5BNzljNjY3MDYtYzc0Ni00YjU0LWIyNDUtNTE0ZDRiMGExMjZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            id: 39,
            title: "Охотники на ведьм",
            year: 2015,
            genre: ["Фэнтези", "Боевик", "Драма"],
            country: "США",
            director: "Брек Эйснер",
            rating: 6.1,
            description: "Последний охотник на ведьм защищает человечество от сверхъестественных угроз.",
            poster: "https://m.media-amazon.com/images/M/MV5BMjA1MDQ3ODU2OV5BMl5BanBnXkFtZTgwMDQ1NzU2NDE@._V1_.jpg"
        },
        {
            id: 40,
            title: "Безумный Макс: Дорога ярости",
            year: 2015,
            genre: ["Боевик", "Приключения", "Фантастика"],
            country: "Австралия",
            director: "Джордж Миллер",
            rating: 8.1,
            description: "Макс и Фуриоса пытаются сбежать от тирана Иммортена Джо в постапокалиптической пустыне.",
            poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            id: 41,
            title: "Марсианин",
            year: 2015,
            genre: ["Фантастика", "Драма", "Приключения"],
            country: "США",
            director: "Ридли Скотт",
            rating: 8.0,
            description: "Астронавт Марк Уотни борется за выживание после того, как его ошибочно признали погибшим и оставили на Марсе.",
            poster: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_.jpg"
        },
        {
            id: 42,
            title: "Выживший",
            year: 2015,
            genre: ["Драма", "Приключения", "Вестерн"],
            country: "США",
            director: "Алехандро Гонсалес Иньярриту",
            rating: 8.0,
            description: "Охотник на пушнину борется за выживание после нападения медведя и предательства товарищей.",
            poster: "https://m.media-amazon.com/images/M/MV5BY2FmODc2N2QtYmY3MS00YTMwLWI2NGYtZWRmYWVkNjFjZmI0XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_.jpg"
        },
        {
            id: 43,
            title: "Дэдпул",
            year: 2016,
            genre: ["Боевик", "Комедия", "Приключения"],
            country: "США",
            director: "Тим Миллер",
            rating: 8.0,
            description: "Наемник Уэйд Уилсон получает сверхспособности, но ценой ужасного обезображивания.",
            poster: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        },
        {
            id: 44,
            title: "Ла-Ла Ленд",
            year: 2016,
            genre: ["Драма", "Мелодрама", "Мюзикл"],
            country: "США",
            director: "Дэмьен Шазелл",
            rating: 8.0,
            description: "Джазовый музыкант и актриса влюбляются друг в друга, пытаясь реализовать свои мечты в Лос-Анджелесе.",
            poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg"
        },
        {
            id: 45,
            title: "Доктор Стрэндж",
            year: 2016,
            genre: ["Фантастика", "Боевик", "Фэнтези"],
            country: "США",
            director: "Скотт Дерриксон",
            rating: 7.5,
            description: "После автомобильной аварии талантливый нейрохирург становится на путь мистических искусств.",
            poster: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_.jpg"
        }
    ];

// DOM элементы
const moviesGrid = document.getElementById('movies-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const yearFilter = document.getElementById('year-filter');
const genreFilter = document.getElementById('genre-filter');
const countryFilter = document.getElementById('country-filter');
const ratingFilter = document.getElementById('rating-filter');
const themeBtn = document.getElementById('theme-btn');
const modal = document.getElementById('movie-modal');
const closeBtn = document.querySelector('.close');
const favoriteBtn = document.getElementById('favorite-btn');
const allTabBtn = document.getElementById('all-tab');
const favoritesTabBtn = document.getElementById('favorites-tab');

// Текущий фильм в модальном окне
let currentMovie = null;
// Избранные фильмы
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Инициализация
displayMovies(movies);
populateFilters(movies);
initTheme();

// Отображение фильмов
function displayMovies(moviesToDisplay) {
    moviesGrid.innerHTML = '';
    
    if (!moviesToDisplay || moviesToDisplay.length === 0) {
        moviesGrid.innerHTML = '<div class="no-results">Фильмы не найдены</div>';
        return;
    }
    
    moviesToDisplay.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        
        // Проверяем, есть ли фильм в избранном
        const isFavorite = favorites.includes(movie.id);
        if (isFavorite) {
            movieCard.classList.add('favorite');
        }
        
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.year}, ${movie.genre.join(', ')}</p>
                <p>Рейтинг: ${movie.rating}</p>
            </div>
            <div class="favorite-icon">★</div>
        `;
        
        movieCard.addEventListener('click', () => openMovieModal(movie));
        moviesGrid.appendChild(movieCard);
    });
}

// Открытие модального окна
function openMovieModal(movie) {
    currentMovie = movie;
    
    document.getElementById('modal-poster').src = movie.poster;
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-year').textContent = movie.year;
    document.getElementById('modal-director').textContent = movie.director;
    document.getElementById('modal-country').textContent = movie.country;
    document.getElementById('modal-rating').textContent = movie.rating;
    document.getElementById('modal-genre').textContent = movie.genre.join(', ');
    document.getElementById('modal-description').textContent = movie.description;
    
    updateFavoriteButton();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Обновление кнопки избранного
function updateFavoriteButton() {
    if (!currentMovie) return;
    
    const isFavorite = favorites.includes(currentMovie.id);
    favoriteBtn.textContent = isFavorite ? 'Удалить из избранного' : 'Добавить в избранное';
    favoriteBtn.classList.toggle('in-favorites', isFavorite);
}

// Переключение избранного
function toggleFavorite() {
    if (!currentMovie) return;
    
    const index = favorites.indexOf(currentMovie.id);
    if (index === -1) {
        favorites.push(currentMovie.id);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton();
    displayCurrentTab();
}

// Заполнение фильтров
function populateFilters(movies) {
    // Годы
    const years = [...new Set(movies.map(movie => movie.year))].sort((a, b) => b - a);
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
    
    // Жанры
    const genres = [...new Set(movies.flatMap(movie => movie.genre))].sort();
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
    
    // Страны
    const countries = [...new Set(movies.map(movie => movie.country))].sort();
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });
}

// Фильтрация фильмов
function filterMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedYear = yearFilter.value;
    const selectedGenre = genreFilter.value;
    const selectedCountry = countryFilter.value;
    const selectedRating = ratingFilter.value;
    
    let filteredMovies = movies;
    
    // Если на вкладке избранного, фильтруем только избранные
    if (favoritesTabBtn.classList.contains('active')) {
        filteredMovies = movies.filter(movie => favorites.includes(movie.id));
    }
    
    filteredMovies = filteredMovies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm);
        const matchesYear = !selectedYear || movie.year.toString() === selectedYear;
        const matchesGenre = !selectedGenre || movie.genre.includes(selectedGenre);
        const matchesCountry = !selectedCountry || movie.country === selectedCountry;
        const matchesRating = !selectedRating || movie.rating >= parseFloat(selectedRating);
        
        return matchesSearch && matchesYear && matchesGenre && matchesCountry && matchesRating;
    });
    
    displayMovies(filteredMovies);
}

// Переключение вкладок
function switchTab(tab) {
    allTabBtn.classList.toggle('active', tab === 'all');
    favoritesTabBtn.classList.toggle('active', tab === 'favorites');
    displayCurrentTab();
}

// Отображение текущей вкладки
function displayCurrentTab() {
    if (favoritesTabBtn.classList.contains('active')) {
        const favoriteMovies = movies.filter(movie => favorites.includes(movie.id));
        filterMovies(favoriteMovies);
    } else {
        filterMovies(movies);
    }
}

// Инициализация темы
function initTheme() {
    const savedTheme = localStorage.getItem('movieFinderTheme') || 'light-theme';
    document.body.className = savedTheme;
    updateThemeButton();
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('movieFinderTheme', document.body.className);
    updateThemeButton();
}

function updateThemeButton() {
    if (document.body.classList.contains('dark-theme')) {
        themeBtn.textContent = 'Светлая тема';
    } else {
        themeBtn.textContent = 'Тёмная тема';
    }
}

// События
searchBtn.addEventListener('click', filterMovies);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') filterMovies();
});

yearFilter.addEventListener('change', filterMovies);
genreFilter.addEventListener('change', filterMovies);
countryFilter.addEventListener('change', filterMovies);
ratingFilter.addEventListener('change', filterMovies);

themeBtn.addEventListener('click', toggleTheme);
closeBtn.addEventListener('click', closeModal);
favoriteBtn.addEventListener('click', toggleFavorite);

allTabBtn.addEventListener('click', () => switchTab('all'));
favoritesTabBtn.addEventListener('click', () => switchTab('favorites'));

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
});