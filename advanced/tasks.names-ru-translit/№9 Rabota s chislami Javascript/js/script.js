
function stringWork() {
	var str = document.getElementById('head').innerHTML;
	/////////////////////////////////////////////////////
	//TODO Функция Math.abs возвращает модуль числа, то есть из отрицательного числа делает положительное.
	var result = Math.abs(-10);

	//TODO Функция Math.acos возвращает арккосинус числа.
	// Параметр функции должен находиться в промежутке от -1 до 1, иначе будет возращен NaN.
	var result = Math.acos(-1);

	//TODO Функция Math.atan возвращает арктангенс числа.
	// Параметр функции должен находиться в промежутке от -Пи/2 и Пи/2, иначе будет возращен NaN.
	var result = Math.atan(45);

	//TODO Функция Math.ceil производит округление числа до целых всегда в большую сторону.
	var result = Math.ceil(-3.7);

	//TODO Функция Math.cos возвращает косинус числа (это число должно быть углом в радианах).
	var result = Math.cos(60*0.01745);//2p/360

	//TODO Свойство Math.E содержит в себе экспоненту с точностью до определенного знака после запятой.
	var result = Math.E;

	//TODO Функция Math.exp возвращает число e (экспоненту, ее значение около 2.7) в степени x.
	var result = Math.exp(2);//7.1

	//TODO Функция Math.floor производит округление числа до целых всегда в меньшую сторону.
	var result = Math.floor(-3.9);//-4

	//TODO Свойство Math.LN10 содержит в себе значение натурального логарифма числа 10.
	var result = Math.LN10;//2.3

	//TODO Свойство Math.LN2 содержит в себе значение натурального логарифма числа 2.
	var result = Math.LN2;//0.69

	//TODO Функция Math.log возвращает значение натурального логарифма переданного числа.
	var result = Math.log(10);//2.3

	//TODO Свойство Math.LOG10E возвращает значение логарифма от e (экспоненты) по основанию 10.
	var result = Math.LOG10E;//0.43

	//TODO Свойство Math.LOG2E возвращает значение логарифма от e (экспоненты) по основанию 2.
	var result = Math.LOG2E;//1.44

	//TODO Функция Math.max возвращает максимальное число из группы чисел, переданных в функцию.
	// Если в функцию ничего не передано, то будет возращено -Infinity.
	// По умолчанию функция не работает с массивами, однако с помощью хитрого приема можно найти максимальное значение массива:
	// Math.max.apply(null, arr), где arr - произвольный массив.
	var result = Math.max(10,34,56,100,0,45,600,1000,5001,Infinity);//Infinity

	//TODO Функция Math.min возвращает минимальное число из группы чисел, переданных в функцию.
	// Если в функцию ничего не передано, то будет возращено Infinity.
	// По умолчанию функция не работает с массивами, однако с помощью хитрого приема можно найти минимальное значение массива:
	// Math.min.apply(null, arr), где arr - произвольный массив
	var result = Math.min(10,34,56,100,0,45,600,1000,5001,-Infinity,-78);//-Infinity

	//TODO Свойство Math.PI возвращает число Пи с 15-ю знаками после запятой.
	var result = Math.PI;//3.14

	//TODO Функция Math.pow возводит число в заданную степень.
	// Первым параметром передается число, вторым - в какую степень его возвести.
	var result = Math.pow(-4,0.5);// NaN, если со знаком (-)

	//TODO Функция Math.random возвращает случайное дробное число от 0 до 1.
	// Чтобы получить случайно число в определенном промежутке (дробное или целое) следует и пользоваться специальными приемами:
	var result = Math.floor(Math.random()*100);//от 0 до 100

	//TODO Функция Math.sin возвращает синус числа (это число должно быть углом в радианах).
	var result = Math.sin(30 * ((2*Math.PI)/360));//0.5

	//TODO Функция Math.sqrt возвращает квадратный корень числа.
	var result = Math.sqrt(25);//5

	//TODO Свойство Math.SQRT1_2 возвращает квадратный корень из 1/2.
	var result = Math.SQRT1_2;//1/sqrt(2) = 0.7

	//TODO Свойство Math.SQRT2 возвращает квадратный корень из 2.
	var result = Math.SQRT2;//sqrt(2) = 1.41

	//TODO Функция Math.tan возвращает тангенс угла (это число должно быть углом в радианах).
	var result = Math.tan(45 * ((2*Math.PI)/360));//1

	//TODO Значение NaN (Not-A-Number) обозначает "не число".
	var result = NaN;

	//TODO Функция isNaN проверяет, является ли переданный параметр числом или нет.
	// Функция вернет true, если параметр не является числом и false, если является.
	// Как она работает: переданный параметр преобразуется к числу. Если это не число (строка, массив и т.п.),
	// то он преобразуется в NaN. Ну, а isNaN проверяет - NaN у нас получился после преобразования или нет.
	// Учтите, что, к примеру true преобразуется не к NaN, а к числу 1. Есть и другие подобные подводные камни,
	// смотрите их в описании NaN.
    var	result = isNaN(NaN);//true

	//TODO Функции Number получает параметр, который преобразовывает в число.
	// Численные преобразования для различных типов происходят по разному. Для логического типа: true - 1, false - 0. Для строк: пробельные символы по краям обрезаются, затем, если строку возможно преобразовать в число - то возвращается это число. Если нет - возвращается NaN.
	// Объекты при численных преобразованиях превращаются в NaN (либо согласно методу valueOf()).
	// Кроме Функции Number преобразование к числу происходит при сравнении значений различных типов. А также при любых математических с числом (кроме суммирования со строкой).
	var result = Number(true);//1

	//Свойство Number.MAX_VALUE представляет максимальное числовое значение,
	var result = Number.MAX_VALUE;
	//Свойство Number.MIN_VALUE представляет минимальное положительное числовое
	var result = Number.MIN_VALUE;
	//Свойство Number.NEGATIVE_INFINITY представляет значение отрицательной есконечности.
	var result = Number.NEGATIVE_INFINITY;
	//Свойство Number.POSITIVE_INFINITY представляет значение положительной бесконечности.
	var result = Number.POSITIVE_INFINITY;
	
	var nemb = 10.5;
	//TODO Метод toString - позволяет задать функцию преобразования объекта в строку.
	//var result = nemb.toString();
	//TODO Метод toLocaleString возвращает строку в формате разных языков с учетом их правил.
	// Поддерживается всеми современными браузерами кроме ИЕ меньше 10 версии.
	//var result = nemb.toLocaleString();//10(,)5, запятая, не точка

	//TODO Метод toFixed производит округление числа до указанного знака в дробной части.
	// Количество знаков указывается параметром.
	// Если число знаков не указано, то по умолчанию берется 0 знаков, то есть округление до целого числа.
	// Параметр метода также может быть отрицательным, в этом случае округлятся будут не знаки в дробной части,
	// а знаки в целой части. К примеру, значение -2 округлит число 12345.6789 в число 12300.
	var result = nemb.toFixed(10);//10.5000000000

	//TODO Метод toPrecision округляет число до заданного знака.
	// В отличие от Math.round округление можно проводить не только в дробной части.
	// Параметром метода указывается сколько цифр должно остаться в числе. Остальные цифры будут отброшены.
	// Последнее оставшееся число будет округлено по правилам математического округления.
	var result = nemb.toPrecision(2);//11

	//TODO Функция parseFloat преобразует строку в число с плавающей точкой.
	// Это нужно для значений типа '12.5px' - когда вначале стоит число, а потом единицы измерения.
	// Если применить функцию parseFloat к '12.5px', то результатом получится число 12.5 (и это будет действительно число, а не строка).
	// Преобразование произойдет, если только целое число стоит в начале строки, иначе будет выведено NaN.
	// Вторым параметром можно указать систему счисления числа, и функция вернет число, переведенное из указанной системы счисления в десятичную.
	var result = parseFloat(' 10.23hello 10 world');//10.23

	//TODO Функция parseInt преобразует строку в целое число.
	// Это нужно для значений типа '12px' - когда вначале стоит число, а потом единицы измерения.
	// Если применить функцию parseInt к '12px', то результатом получится число 12 (и это будет действительно число, а не строка).
	// Преобразование произойдет, если только целое число стоит в начале строки, иначе будет выведено NaN.
	// Вторым параметром можно указать систему счисления числа, и функция вернет число, переведенное из указанной системы счисления в десятичную.
	var result = parseInt('10.23hello 10 world');//10
	
	/////////////////////////////////////////////////////
	document.getElementById('result').innerHTML = result;
}

window.onload = function () {
	stringWork();
}

