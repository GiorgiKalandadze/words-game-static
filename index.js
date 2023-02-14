var currentIndex = 0;
let nodes = document.querySelectorAll('.word-block');

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '1':
            document.getElementById('ge').innerText = words[currentIndex]['ge'];
            break;
        case '2':
            document.getElementById('ru').innerText = words[currentIndex]['ru'];
            break;
        case '3':
            document.getElementById('en').innerText = words[currentIndex]['en'];
            break;
        case ' ':
            currentIndex++;
            for(const node of nodes){
                node.innerText = '';
            }
            break;
    }
});

for(const node of nodes) {
    node.addEventListener('click', (event) => {
        const name = event.target.id;
        document.getElementById(name).innerText = words[currentIndex][name];
    });
}

var adjectives = [
    {"type":"adverb","en":"on the way","ge":"გზაში","ru":"в пути"},
    {"type":"adverb","en":"bad","ge":"ცუდად","ru":"плохо"},
    {"type":"adverb","en":"ok","ge":"კარგად","ru":"хорошо"},
    {"type":"adverb","en":"today","ge":"დღეს","ru":"сегодня"},
    {"type":"adverb","en":"tomorrow","ge":"ხვალ","ru":"завтра"},
    {"type":"adverb","en":"yesterday","ge":"გუშინ","ru":"вчера"},
    {"type":"adverb","en":"long","ge":"გრძელი","ru":"длинная"},
    {"type":"adjective","en":"expensive","ge":"ძვირი","ru":"дорого"},
    {"type":"adjective","en":"hungry","ge":"მშიერი","ru":"голодный"},
    {"type":"adjective","en":"the nearest","ge":"უახლოესი","ru":"ближайший"},
    {
        "type": "adjective",
        "ge": "კარგი",
        "en": "good",
        "ru": "хороший"
    },
    {
        "type": "adjective",
        "ge": "ახალი",
        "en": "new",
        "ru": "новый"
    },
    {
        "type": "adjective",
        "ge": "პირველი",
        "en": "first",
        "ru": "первый"
    },
    {
        "type": "adjective",
        "ge": "ბოლო",
        "en": "last",
        "ru": "последний"
    },
    {
        "type": "adjective",
        "ge": "გრძელი",
        "en": "long",
        "ru": "длинный"
    },
    {
        "type": "adjective",
        "ge": "დიდებული",
        "en": "great",
        "ru": "великий"
    },
    {
        "type": "adjective",
        "ge": "პატარა",
        "en": "little",
        "ru": "маленький"
    },
    {
        "type": "adjective",
        "ge": "საკუთარი",
        "en": "own",
        "ru": "свой"
    },
    {
        "type": "adjective",
        "ge": "სხვა",
        "en": "other",
        "ru": "другой"
    },
    {
        "type": "adjective",
        "ge": "ძველი",
        "en": "old",
        "ru": "старый"
    },
    {
        "type": "adjective",
        "ge": "სწორი",
        "en": "right",
        "ru": "правый"
    },
    {
        "type": "adjective",
        "ge": "დიდი",
        "en": "big",
        "ru": "большой"
    },
    {
        "type": "adjective",
        "ge": "მაღალი",
        "en": "high",
        "ru": "высокий"
    },
    {
        "type": "adjective",
        "ge": "განსხვავებული",
        "en": "different",
        "ru": "разный"
    },
    {
        "type": "adjective",
        "ge": "ატარა",
        "en": "small",
        "ru": "маленький"
    },
    {
        "type": "adjective",
        "ge": "დიდი",
        "en": "large",
        "ru": "большой"
    },
    {
        "type": "adjective",
        "ge": "შემდეგი",
        "en": "next",
        "ru": "следующий"
    },
    {
        "type": "adjective",
        "ge": "ადრე",
        "en": "early",
        "ru": "рано"
    },
    {
        "type": "adjective",
        "ge": "ახალგაზრდა",
        "en": "young",
        "ru": "молодой"
    },
    {
        "type": "adjective",
        "ge": "მნიშნველოვანი",
        "en": "important",
        "ru": "важный"
    },
    {
        "type": "adjective",
        "ge": "ცოტა",
        "en": "few",
        "ru": "немного"
    },
    {
        "type": "adjective",
        "ge": "საჯარო",
        "en": "public",
        "ru": "общественный"
    },
    {
        "type": "adjective",
        "ge": "ცუდი",
        "en": "bad",
        "ru": "плохой"
    },
    {
        "type": "adjective",
        "ge": "იგივე",
        "en": "same",
        "ru": "тот же"
    },
    {
        "type": "adjective",
        "ge": "შემძლე",
        "en": "able",
        "ru": "способный"
    },
    {
        "type": "adjective",
        "ge": "ბოლო/უახლესი",
        "en": "recent",
        "ru": "недавний"
    },
    {
        "type": "adjective",
        "ge": "ძლიერი",
        "en": "strong",
        "ru": "сильный"
    },
    {
        "type": "adjective",
        "ge": "ძირითადი",
        "en": "major",
        "ru": "основной"
    },
    {
        "type": "adjective",
        "ge": "შესაძლებელი",
        "en": "possible",
        "ru": "возможно"
    },
    {
        "type": "adjective",
        "ge": "განსაკუთრებული/კონკრეტული",
        "en": "particular",
        "ru": "особый"
    },
    {
        "type": "adjective",
        "ge": "გარკვეული",
        "en": "certain",
        "ru": "определенный"
    },
    {
        "type": "adjective",
        "ge": "გასაგებია",
        "en": "clear",
        "ru": "ясный"
    },
    {
        "type": "adjective",
        "ge": "ადგილობრივი",
        "en": "local",
        "ru": "местный"
    },
    {
        "type": "adjective",
        "ge": "დარწმუნებული",
        "en": "sure",
        "ru": "уверенный"
    },
    {
        "type": "adjective",
        "ge": "ხელმისაწვდომი",
        "en": "available",
        "ru": "доступный"
    },
    {
        "type": "adjective",
        "ge": "საერთო",
        "en": "common",
        "ru": "общий"
    },
    {
        "type": "adjective",
        "ge": "ღარიბი",
        "en": "poor",
        "ru": "бедный"
    },
    {
        "type": "adjective",
        "ge": "ბუნებრივი",
        "en": "natural",
        "ru": "естественный"
    },
    {
        "type": "adjective",
        "ge": "გამორჩეული/განსაკუთრებული",
        "en": "special",
        "ru": "особый"
    },
    {
        "type": "adjective",
        "ge": "რთული",
        "en": "difficult",
        "ru": "сложный"
    },
    {
        "type": "adjective",
        "ge": "მოკლე",
        "en": "short",
        "ru": "короткий"
    },
    {
        "type": "adjective",
        "ge": "მარტივი",
        "en": "simple",
        "ru": "простой"
    },
    {
        "type": "adjective",
        "ge": "ერთი/მარტოხელა",
        "en": "single",
        "ru": "один"
    },
    {
        "type": "adjective",
        "ge": "სამედიცინო",
        "en": "medical",
        "ru": "медицинский"
    },
    {
        "type": "adjective",
        "ge": "ამჟამინდელი",
        "en": "current",
        "ru": "текущий"
    },
    {
        "type": "adjective",
        "ge": "არასწორი",
        "en": "wrong",
        "ru": "неправильный"
    },
    {
        "type": "adjective",
        "ge": "თავისუფალი",
        "en": "free",
        "ru": "свободный"
    },
    {
        "type": "adjective",
        "ge": "მარტივი",
        "en": "easy",
        "ru": "легко"
    },
    {
        "type": "adjective",
        "ge": "ნაციონალური",
        "en": "national",
        "ru": "национальный"
    },
    {
        "type": "adjective",
        "ge": "პირადი",
        "en": "personal",
        "ru": "личный"
    },
    {
        "type": "adjective",
        "ge": "ღია",
        "en": "open",
        "ru": "открытый"
    },
    {
        "type": "adjective",
        "category": ["adjective", "color"],
        "ge": "წითელი",
        "en": "red",
        "ru": "красный"
    },
    {
        "type": "adjective",
        "category": ["adjective", "color"],
        "ge": "მწვანე",
        "en": "green",
        "ru": "зеленый"
    },
    {
        "type": "adjective",
        "category": ["adjective", "color"],
        "ge": "ცისფერი",
        "en": "blue",
        "ru": "синий"
    },
    {
        "type": "adjective",
        "category": ["adjective", "color"],
        "ge": "ყვითელი",
        "en": "yellow",
        "ru": "желтый"
    },
    {
        "type": "adjective",
        "category": ["adjective", "color"],
        "ge": "თეთრი",
        "en": "white",
        "ru": "белый"
    },
    {
        "type": "adjective",
        "category": ["adjective", "color"],
        "ge": "შავი",
        "en": "black",
        "ru": "черный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "brown",
        "ru": "коричневый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "gray",
        "ru": "серый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "pink",
        "ru": "розовый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "orange",
        "ru": "оранжевый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "fast",
        "ru": "быстрый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "slow",
        "ru": "медленный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "full",
        "ru": "полный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "empty",
        "ru": "пустой"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "dry",
        "ru": "сухой"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "wet",
        "ru": "мокрый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "warm",
        "ru": "теплый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "cold",
        "ru": "холодный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "clean",
        "ru": "чистый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "dirty",
        "ru": "грязный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "correct",
        "ru": "правильный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "near",
        "ru": "рядом"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "far",
        "ru": "далеко"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "left",
        "ru": "левый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "top",
        "ru": "верх"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "bottom",
        "ru": "низ"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "front",
        "ru": "передний"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "back",
        "ru": "задний"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "inside",
        "ru": "внутри"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "outside",
        "ru": "снаружи"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "deep",
        "ru": "глубокий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "shallow",
        "ru": "мелкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "modern",
        "ru": "современный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "ancient",
        "ru": "древний"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "ready",
        "ru": "готовый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "happy",
        "ru": "счастливый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "sad",
        "ru": "грустный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "angry",
        "ru": "сердитый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "surprised",
        "ru": "удивленный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "busy",
        "ru": "занятый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "calm",
        "ru": "спокойный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "tired",
        "ru": "уставший"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "relaxed",
        "ru": "расслабленный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "hungry",
        "ru": "голодны"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "thirsty",
        "ru": "жаждущий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "excited",
        "ru": "взволнованный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "bored",
        "ru": "скучающий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "lonely",
        "ru": "одинокий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "content",
        "ru": "довольный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "anxious",
        "ru": "взвешенный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "curious",
        "ru": "любознательный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "thoughtful",
        "ru": "задумчивый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "confident",
        "ru": "уверенный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "proud",
        "ru": "гордый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "humble",
        "ru": "скромный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "shy",
        "ru": "застенчивый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "friendly",
        "ru": "дружелюбный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "kind",
        "ru": "добрый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "generous",
        "ru": "щедрый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "rude",
        "ru": "грубый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "mean",
        "ru": "злой"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "honest",
        "ru": "честный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "dishonest",
        "ru": "нечестный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "loyal",
        "ru": "верный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "disloyal",
        "ru": "неверный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "trustworthy",
        "ru": "надежный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "untrustworthy",
        "ru": "ненадежный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "brave",
        "ru": "храбрый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "fearful",
        "ru": "боящийся"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "clever",
        "ru": "умный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "stupid",
        "ru": "глупый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "intelligent",
        "ru": "умный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "wise",
        "ru": "мудрый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "foolish",
        "ru": "глупый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "creative",
        "ru": "творческий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "uncreative",
        "ru": "нетворческий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "original",
        "ru": "оригинальный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "unoriginal",
        "ru": "неоригинальный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "popular",
        "ru": "популярный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "unpopular",
        "ru": "непопулярный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "successful",
        "ru": "успешный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "unsuccessful",
        "ru": "неуспешный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "famous",
        "ru": "известный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "infamous",
        "ru": "известный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "rich",
        "ru": "богатый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "wealthy",
        "ru": "богатый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "low",
        "ru": "низки"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "heavy",
        "ru": "тяжелый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "light",
        "ru": "легкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "thick",
        "ru": "толстый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "thin",
        "ru": "тонкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "wide",
        "ru": "широкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "narrow",
        "ru": "узкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "tall",
        "ru": "высокий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "tiny",
        "ru": "крошечный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "giant",
        "ru": "гигантский"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "huge",
        "ru": "огромный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "massive",
        "ru": "массивный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "slim",
        "ru": "стройный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "round",
        "ru": "круглый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "square",
        "ru": "квадратный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "rectangular",
        "ru": "прямоугольный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "triangular",
        "ru": "треугольный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "circular",
        "ru": "круглый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "oval",
        "ru": "овальный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "cylindrical",
        "ru": "цилиндрический"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "conical",
        "ru": "конический"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "spherical",
        "ru": "сферический"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "flat",
        "ru": "плоский"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "smooth",
        "ru": "гладкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "rough",
        "ru": "шероховатый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "soft",
        "ru": "мягкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "hard",
        "ru": "твердый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "dense",
        "ru": "плотный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "porous",
        "ru": "пористый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "solid",
        "ru": "твердый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "liquid",
        "ru": "жидкость"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "gaseous",
        "ru": "газообразный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "flexible",
        "ru": "гибкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "stiff",
        "ru": "жесткий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "weak",
        "ru": "слабый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "durable",
        "ru": "долговечный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "fragile",
        "ru": "хрупкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "elastic",
        "ru": "эластичный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "rigid",
        "ru": "жесткий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "sturdy",
        "ru": "прочный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "flimsy",
        "ru": "непрочны"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "beautiful",
        "ru": "красивый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "ugly",
        "ru": "некрасивый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "attractive",
        "ru": "привлекательный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "unattractive",
        "ru": "непривлекательный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "charming",
        "ru": "очаровательный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "plain",
        "ru": "простой"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "elegant",
        "ru": "элегантный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "sophisticated",
        "ru": "сложный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "complex",
        "ru": "сложный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "colorful",
        "ru": "цветной"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "monochrome",
        "ru": "монохромный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "bright",
        "ru": "яркий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "dim",
        "ru": "тусклый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "shiny",
        "ru": "блестящий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "dull",
        "ru": "моросящий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "radiant",
        "ru": "сияющий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "luminous",
        "ru": "светящийся"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "sparkling",
        "ru": "искрящийся"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "glowing",
        "ru": "светящийся"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "sweet",
        "ru": "сладкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "sour",
        "ru": "кислый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "salty",
        "ru": "соленый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "bitter",
        "ru": "горький"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "spicy",
        "ru": "острый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "bland",
        "ru": "невкусный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "creamy",
        "ru": "кремовый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "crunchy",
        "ru": "хрустящий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "juicy",
        "ru": "сочный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "tender",
        "ru": "мягкий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "tough",
        "ru": "жесткий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "fresh",
        "ru": "свежий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "stale",
        "ru": "старый"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "fragrant",
        "ru": "ароматный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "odorless",
        "ru": "без запаха"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "aromatic",
        "ru": "ароматный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "tasteless",
        "ru": "безвкусный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "hot",
        "ru": "горячий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "cool",
        "ru": "прохладный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "freezing",
        "ru": "морозный"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "boiling",
        "ru": "кипящий"
    },
    {
        "type": "adjective",
        "ge": "null",
        "en": "pungent",
        "ru": "острый"
    }
];
var verbs = [
    {"type":"verb","en":"to pay","ge":"გადახდა","ru":"заплатить"},
    {"type":"verb","en":"to sell","ge":"გაყიდვა","ru":"продавать"},
    {"type":"verb","en":"to land","ge":"მიწაზე დაშვება","ru":"приземляться"},
    {"type":"verb","en":"to buy","ge":"ყიდვა","ru":"купить"},
    {"type":"verb","en":"to leave","ge":"წასვლა/ადგილის დატოვება","ru":"уезжать/уходить/Покинуть"},
    {"type":"verb","en":"to cost","ge":"ღირს","ru":"стоить"},
    {"type":"verb","en":"to drink","ge":"დალევა","ru":"пить"},
    {"type":"verb","en":"to need","ge":"საჭიროება","ru":"нужно"},
    {"type":"verb","en":"to repeat","ge":"გამეორება","ru":"повторять"},
    {"type":"verb","en":"to sing","ge":"სიმღერა","ru":"петь "},
    {"type":"verb","en":"to speak","ge":"საუბარი","ru":"говорить"},
    {"type":"verb","en":"to understand","ge":"გაგება","ru":"понять"},
    {"type":"verb","en":"to welcome","ge":"მისალმება","ru":"приветствовать"},
    {"type":"verb","en":"to book","ge":"დაჯავშნა","ru":"бронировать"},
    {
        "type": "verb",
        "ge": "null",
        "en": "to be",
        "ru": "быть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to have",
        "ru": "иметь"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to do",
        "ru": "делать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to say",
        "ru": "сказать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to get",
        "ru": "получать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to make",
        "ru": "делать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to go",
        "ru": "идти"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to know",
        "ru": "знать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to take",
        "ru": "брать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to see",
        "ru": "видеть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to come",
        "ru": "приходить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to think",
        "ru": "думать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to look",
        "ru": "смотреть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to want",
        "ru": "хотеть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to give",
        "ru": "давать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to use",
        "ru": "использовать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to find",
        "ru": "находить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to tell",
        "ru": "рассказывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to ask",
        "ru": "спрашивать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to work",
        "ru": "работать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to seem",
        "ru": "казаться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to feel",
        "ru": "чувствовать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to try",
        "ru": "пытаться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to leave",
        "ru": "уходить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to call",
        "ru": "звонить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to pay",
        "ru": "платить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to show",
        "ru": "показывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to put",
        "ru": "класть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to keep",
        "ru": "хранить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to hold",
        "ru": "держать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to begin",
        "ru": "начинать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to help",
        "ru": "помощь"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to talk",
        "ru": "разговаривать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to turn",
        "ru": "поворачивать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to run",
        "ru": "бежать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to move",
        "ru": "двигаться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to live",
        "ru": "жить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to belong",
        "ru": "принадлежать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to stand",
        "ru": "стоять"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to lose",
        "ru": "терять"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to win",
        "ru": "выигрывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to offer",
        "ru": "предлагать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to remember",
        "ru": "помнить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to love",
        "ru": "любить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to hate",
        "ru": "ненавидеть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to consider",
        "ru": "рассматривать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to expect",
        "ru": "ожидать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to mean",
        "ru": "значить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to set",
        "ru": "устанавливать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to change",
        "ru": "менять"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to grow",
        "ru": "расти"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to open",
        "ru": "открывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to close",
        "ru": "закрывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to walk",
        "ru": "ходить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to play",
        "ru": "играть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to drive",
        "ru": "водить машину"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to ride",
        "ru": "ездить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to write",
        "ru": "писать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to read",
        "ru": "читать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to speak",
        "ru": "говорить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to listen",
        "ru": "слушать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to watch",
        "ru": "смотреть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to follow",
        "ru": "следовать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to lead",
        "ru": "вести"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to stop",
        "ru": "останавливать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to create",
        "ru": "создавать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to allow",
        "ru": "разрешать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to support",
        "ru": "поддерживать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to raise",
        "ru": "поднимать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to care",
        "ru": "заботиться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to apply",
        "ru": "применять"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to decide",
        "ru": "решать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to learn",
        "ru": "учиться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to teach",
        "ru": "учить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to build",
        "ru": "строить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to maintain",
        "ru": "поддерживать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to improve",
        "ru": "улучшать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to repair",
        "ru": "ремонтировать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to clean",
        "ru": "чистить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to cook",
        "ru": "готовить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to shop",
        "ru": "шопинг"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to eat",
        "ru": "есть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to drink",
        "ru": "пить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to dress",
        "ru": "одеваться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to wash",
        "ru": "мыть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to brush",
        "ru": "чистить зубы"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to cut",
        "ru": "резать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to shave",
        "ru": "бриться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to comb",
        "ru": "расчесывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to dry",
        "ru": "сушить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to iron",
        "ru": "гладить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to style",
        "ru": "стиль"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to dye",
        "ru": "красить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to paint",
        "ru": "рисовать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to draw",
        "ru": "рисовать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to color",
        "ru": "цвет"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to sketch",
        "ru": "эскиз"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to design",
        "ru": "проектиров"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to shoot",
        "ru": "стрелять"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to film",
        "ru": "фильм"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to photograph",
        "ru": "фотографировать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to capture",
        "ru": "захватывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to record",
        "ru": "записывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to produce",
        "ru": "производить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to direct",
        "ru": "руководить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to act",
        "ru": "акт"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to perform",
        "ru": "выполнять"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to present",
        "ru": "представлять"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to host",
        "ru": "хозяин"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to entertain",
        "ru": "развлекать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to participate",
        "ru": "участвовать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to compete",
        "ru": "соревноваться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to join",
        "ru": "присоединяться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to attend",
        "ru": "посещать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to visit",
        "ru": "посетить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to tour",
        "ru": "тур"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to explore",
        "ru": "изучать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to discover",
        "ru": "открывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to travel",
        "ru": "путешествовать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to migrate",
        "ru": "мигрировать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to relocate",
        "ru": "переезжать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to transport",
        "ru": "транспортировать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to carry",
        "ru": "нести"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to lift",
        "ru": "поднимать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to push",
        "ru": "толкать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to pull",
        "ru": "тянуть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to drag",
        "ru": "тащить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to move",
        "ru": "двигать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to drop",
        "ru": "уронить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to throw",
        "ru": "бросать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to toss",
        "ru": "бросать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to pitch",
        "ru": "сбрасывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to roll",
        "ru": "катить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to spin",
        "ru": "вращать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to rotate",
        "ru": "вращать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to swing",
        "ru": "качать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to sway",
        "ru": "качать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to rock",
        "ru": "качать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to shake",
        "ru": "трясти"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to vibrate",
        "ru": "вибрировать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to let",
        "ru": "пускать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to help",
        "ru": "помогать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to hear",
        "ru": "слышать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to believe",
        "ru": "верить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to bring",
        "ru": "приносить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to happen",
        "ru": "случаться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to meet",
        "ru": "встречать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to include",
        "ru": "включать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to continue",
        "ru": "продолжать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to start",
        "ru": "начинать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to might",
        "ru": "мог"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to be able to",
        "ru": "уметь"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to fall",
        "ru": "падать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to send",
        "ru": "отправлять"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to receive",
        "ru": "получать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to spend",
        "ru": "тратить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to walk",
        "ru": "идти"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to pass",
        "ru": "проходить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to sell",
        "ru": "продавать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to appear",
        "ru": "появляться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to die",
        "ru": "умирать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to return",
        "ru": "возвращать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to catch",
        "ru": "ловить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to rise",
        "ru": "подниматься"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to remain",
        "ru": "оставаться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to need",
        "ru": "нуждаться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to lack",
        "ru": "не хватать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to fail",
        "ru": "проваливать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to fight",
        "ru": "бороться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to bite",
        "ru": "кусать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to hit",
        "ru": "ударить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to kiss",
        "ru": "целовать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to knock",
        "ru": "стукать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to place",
        "ru": "размещать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to sit",
        "ru": "садиться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to lie",
        "ru": "лежать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to lie down",
        "ru": "лежать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to rise",
        "ru": "вставать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to lean",
        "ru": "наклоняться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to bend",
        "ru": "сгибать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to twist",
        "ru": "крутить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to sway",
        "ru": "качаться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to balance",
        "ru": "балансировать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to wave",
        "ru": "махать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to point",
        "ru": "указывать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to aim",
        "ru": "целиться"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to fire",
        "ru": "стрелять"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to punch",
        "ru": "ударить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to slap",
        "ru": "хлопать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to kick",
        "ru": "ударить ногой"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to jump",
        "ru": "прыгать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to hop",
        "ru": "прыгать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to skip",
        "ru": "прыгать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to dance",
        "ru": "танцевать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to march",
        "ru": "маршировать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to jog",
        "ru": "бегать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to crawl",
        "ru": "ползать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to climb",
        "ru": "лезть"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to slide",
        "ru": "скользить"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to swim",
        "ru": "плавать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to dive",
        "ru": "нырять"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to float",
        "ru": "плавать"
    },
    {
        "type": "verb",
        "ge": "null",
        "en": "to sail",
        "ru": "плыть"
    }
];
var words = [
    {"type":"noun","en":"airport","ge":"აეროპორტი","ru":"аэропорт"},
    {"type":"noun","en":"atm","ge":"ბანკომატი","ru":"банкомат"},
    {"type":"noun","en":"bill","ge":"ჩეკი/ანგარიში/გადასახადი","ru":"счет"},
    {"type":"noun","en":"cash","ge":"ნაღდი ფული","ru":"наличные деньги"},
    {"type":"noun","en":"city","ge":"ქალაქი","ru":"город"},
    {"type":"noun","en":"country","ge":"ქვეყანა","ru":"страна"},
    {"type":"noun","en":"credit card","ge":"საკრედიტო ბარათი","ru":"кредитная карта"},
    {"type":"noun","en":"doctor","ge":"ექიმი","ru":"врач"},
    {"type":"noun","en":"evening","ge":"საღამო","ru":"вечер"},
    {"type":"noun","en":"example","ge":"მაგალითი","ru":"пример"},
    {"type":"noun","en":"excuse me","ge":"უკაცრავად","ru":"извините"},
    {"type":"noun","en":"help","ge":"დახმარება","ru":"помощь"},
    {"type":"noun","en":"hi","ge":"გამარჯობა","ru":"привет"},
    {"type":"noun","en":"hotel","ge":"სასტუმრო","ru":"гостиница"},
    {"type":"noun","en":"house","ge":"სახლი","ru":"дом"},
    {"type":"noun","en":"interpreter","ge":"თარჯიმანი","ru":"переводчик(устный)"},
    {"type":"noun","en":"language","ge":"ენა","ru":"язык"},
    {"type":"noun","en":"luggage","ge":"ბარგი","ru":"багаж"},
    {"type":"noun","en":"money","ge":"ფული","ru":"деньги"},
    {"type":"noun","en":"morning","ge":"დილა","ru":"утро"},
    {"type":"noun","en":"name","ge":"სახელი","ru":"имя"},
    {"type":"noun","en":"police","ge":"პოლიცია","ru":"полиция"},
    {"type":"noun","en":"question","ge":"კითხვა","ru":"вопрос"},
    {"type":"noun","en":"stop","ge":"გაჩერება","ru":"остановка"},
    {"type":"noun","en":"street","ge":"ქუჩა","ru":"улица"},
    {"type":"noun","en":"swimming pool","ge":"საცურაო აუზი","ru":"бассейн"},
    {"type":"noun","en":"thanks","ge":"მადლობა","ru":"спасибо"},
    {"type":"noun","en":"time","ge":"დრო","ru":"время"},
    {"type":"noun","en":"translator","ge":"მთარგმნელი","ru":"переводчик"},
    {"type":"noun","en":"village","ge":"სოფელი","ru":"деревня"},
    {"type":"noun","en":"water","ge":"წყალი","ru":"вода"},


    {"type":"noun","en":"wave","ge":"ტალღა","ru":"волна"},
    {"type":"noun","en":"tan","ge":"რუჯი","ru":"загар"},
    {"type":"noun","en":"foreigner","ge":"უცხოელი","ru":"иностранец"},
    {"type":"noun","en":"map","ge":"რუკა","ru":"карта"},
    {"type":"noun","en":"swim suit","ge":"საცურაო კოსტუმი","ru":"купальный костюм"},
    {"type":"noun","en":"route","ge":"მარშრუტი","ru":"маршрут"},
    {"type":"noun","en":"destination","ge":"დანიშნულების ადგილი","ru":"место назначения"},
    {"type":"noun","en":"service","ge":"მომსახურება","ru":"обслуживание"},
    {"type":"noun","en":"tent","ge":"კარავი","ru":"палатка"},
    {"type":"noun","en":"beach","ge":"სანაპირო","ru":"пляж"},
    {"type":"noun","en":"trip","ge":"მოგზაურობა","ru":"путешествие"},
    {"type":"noun","en":"journey","ge":"მოგზაურობა","ru":"поездка"},

    {"type":"noun","en":"hike","ge":"ლაშქრობა","ru":"поход"},

    {"type":"noun","en":"knapsack","ge":"ზურგჩანთა","ru":"рюкзак"},

    {"type":"noun","en":"suitcase","ge":"ჩემოდანი","ru":"чемодан"},
    {"type":"noun","en":"deckchair","ge":"შეზლონგი","ru":"шезлонг"},
    {"type":"noun","en":"shop","ge":"მაღაზია","ru":"магазин"},
    {"type":"noun","en":"pharmacy","ge":"აფთიაქი","ru":"аптека"},
    {"type":"noun","en":"grocery","ge":"სასურსათო მაღაზია","ru":"Бакалея"},
    {"type":"noun","en":"bakery","ge":"საცხობი","ru":"булочная"},
    {"type":"noun","en":"scales","ge":"სასწორი","ru":"весы"},
    {"type":"noun","en":"wallet","ge":"საფულე","ru":"бумажник"},
    {"type":"noun","en":"coin","ge":"მონეტა","ru":"монета"},
    {"type":"noun","en":"queue","ge":"რიგი","ru":"очередь"},
    {"type":"noun","en":"buyer","ge":"მყიდველი","ru":"покупатель  "},
    {"type":"noun","en":"shelf","ge":"თარო","ru":"полка"},
    {"type":"noun","en":"discount","ge":"ფასდაკლება","ru":"скидка "},
    {"type":"noun","en":"shopping trolley","ge":"მაღაზიის გორიალა","ru":"тележка"},
    {"type":"noun","en":"price","ge":"ფასი","ru":"цена "},
    {"type":"noun","en":"floor","ge":"სართული","ru":"этаж"},
    {"type":"noun","en":"gate","ge":"ჭიშკარი","ru":"ворота"},
    {"type":"noun","en":"switch","ge":"ჩამრთველი","ru":"переключатель"},
    {"type":"noun","en":"garage","ge":"ავტოფარეხი","ru":"гараж"},
    {"type":"noun","en":"wardrobe","ge":"ტანსაცმლის კარადა","ru":"гардероб/шкаф"},
    {"type":"noun","en":"lounge","ge":"მისაღები ოთახი","ru":"гостиная"},
    {"type":"noun","en":"doorbell","ge":"კარების ზარი","ru":"дверной звонок"},
    {"type":"noun","en":"door","ge":"კარი","ru":"дверь"},
    {"type":"noun","en":"shower","ge":"შხაპი","ru":"душ"},
    {"type":"noun","en":"hall","ge":"დარბაზი","ru":"зал"},
    {"type":"noun","en":"bathroom","ge":"აბაზანა","ru":"ванная"},
    {"type":"noun","en":"fireplace","ge":"ბუხარი","ru":"камин"},
    {"type":"noun","en":"lawn","ge":"გაზონი","ru":"газон"},
    {"type":"noun","en":"post box","ge":"საფოსტე ყუთი","ru":"почтовый ящик"},
    {"type":"noun","en":"post","ge":"ფოსტა","ru":"Почта"},
    {"type":"noun","en":"bookcase","ge":"წიგნების თარო","ru":"книжный шкаф"},
    {"type":"noun","en":"room","ge":"ოთახი","ru":"комната"},
    {"type":"noun","en":"corridor","ge":"დერეფანი","ru":"коридор"},
    {"type":"noun","en":"armchair","ge":"სავარძელი","ru":"кресло"},
    {"type":"noun","en":"bed","ge":"საწოლი","ru":"кровать"},
    {"type":"noun","en":"kitchen","ge":"სამზარეულო","ru":"кухня"},
    {"type":"noun","en":"stairs","ge":"კიბეები","ru":"лестница"},
    {"type":"noun","en":"ladder","ge":"მისაყუდებელი კიბე","ru":"лестница"},
    {"type":"noun","en":"stepladder","ge":"მასაყენებელი კიბე","ru":"стремянка "},
    {"type":"noun","en":"mirror","ge":"სარკე","ru":"зеркало"},
    {"type":"noun","en":"furniture","ge":"ავეჯი","ru":"мебель"},
    {"type":"noun","en":"dustbin","ge":"ნაგვის ურნა","ru":"Мусорный Ящик"},
    {"type":"noun","en":"window","ge":"ფანჯარა","ru":"окно"},
    {"type":"noun","en":"heating","ge":"გათბობა","ru":"отопление"},
    {"type":"noun","en":"in","ge":"შიგნით","ru":"внутри"},
    {"type":"noun","en":"ceiling","ge":"ჭერი","ru":"потолок"},
    {"type":"noun","en":"bedroom","ge":"საძინებელი","ru":"спальня "},
    {"type":"noun","en":"dust","ge":"მტვერი","ru":"пыль"},
    {"type":"noun","en":"lamp","ge":"ლამპა","ru":"светильник"},
    {"type":"noun","en":"bulb","ge":"ნათურა","ru":"лампочка"},
    {"type":"noun","en":"Flashlight","ge":"ფანარი","ru":"Фонарик"},
    {"type":"noun","en":"wall","ge":"კედელი","ru":"стена"},
    {"type":"noun","en":"toilet","ge":"საპირფარეშო","ru":"туалет"},
    {"type":"noun","en":"administrator","ge":"ხელმძღვანელი","ru":"управляющий"},
    {"type":"noun","en":"foyer","ge":"ფოიე","ru":"фойе"},
    {"type":"noun","en":"attic","ge":"სხვენი","ru":"мансарда/чердак"},
    {"type":"noun","en":"brush","ge":"ჯაგრისი/ფუნჯი","ru":"щётка"},
    {"type":"noun","en":"box","ge":"ყუთი","ru":"ящик"},
    {"type":"noun","en":"air company","ge":"საჰაერო კომპანია","ru":"авиакомпания"},
    {"type":"noun","en":"bus","ge":"ავტობუსი","ru":"автобус"},
    {"type":"noun","en":"bus station","ge":"ავტო სადგური","ru":"автовокзал"},
    {"type":"noun","en":"ticket","ge":"ბილეთი","ru":"билет"},
    {"type":"noun","en":"abbreviation","ge":"აბრევიატურა","ru":"аббревиатура"},
    {"type":"noun","en":"indent","ge":"აბზაცი","ru":"отступ"},
    {"type":"noun","en":"subscription","ge":"აბონემენტი","ru":"абонемент"},
    {"type":"noun","en":"apricot","ge":"გარგარი","ru":"абрикос"},
    {"type":"noun","en":"absolutely","ge":"აბსოლუტურად","ru":"абсолютно"},
    {"type":"noun","en":"","ge":"","ru":""},
    { "type": "noun", "en": "red", "ru": "красный", "category": ["color", "noun"] },
    { "type": "noun", "en": "orange", "ru": "оранжевый", "category": ["color", "noun"] },
    { "type": "noun", "en": "yellow", "ru": "жёлтый", "category": ["color", "noun"] },
    { "type": "noun", "en": "green", "ru": "зелёный", "category": ["color", "noun"] },
    { "type": "noun", "en": "blue", "ru": "синий", "category": ["color", "noun"] },
    { "type": "noun", "en": "purple", "ru": "фиолетовый", "category": ["color", "noun"] },
    { "type": "noun", "en": "pink", "ru": "розовый", "category": ["color", "noun"] },
    { "type": "noun", "en": "brown", "ru": "коричневый", "category": ["color", "noun"] },
    { "type": "noun", "en": "black", "ru": "чёрный", "category": ["color", "noun"] },
    { "type": "noun", "en": "white", "ru": "белый", "category": ["color", "noun"] }
];