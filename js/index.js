alert('Введіть значення для вирішення квадратного рівняння');

const numA = parseFloat(prompt('Введіть значення A рівняння: ax2 + bx + c = 0'));
if (numA == 0) {
    alert('Коефіцієнт при першому доданку рівняння не може дорівнювати нулю, змініть його та спробуйте знову.');
}
else if (isNaN(numA)) {
    alert('Потрібно вводити лише числа!');
}

const numB = parseFloat(prompt('Введіть значення B рівняння: ax2 + bx + c = 0'));
if (isNaN(numB)) {
    alert('Потрібно вводити лише числа!');
}

const numC = parseFloat(prompt('Введіть значення C рівняння: ax2 + bx + c = 0'));
if (isNaN(numC)) {
    alert('Потрібно вводити лише числа!');
}

function getDiscriminant(a, b, c) {
    const D = Math.pow(b, 2) - 4 * a * c;
    return D;
}

const D = getDiscriminant(numA, numB, numC);

const getSolution = function getSolution(a, b, D) {
    if (D > 0) {
        const x1 = ((-b + Math.sqrt(D)) / (2 * a));
        const x2 = ((-b - Math.sqrt(D)) / (2 * a));
        return ('<br>Так як дискримінант більше нуля, то квадратне рівняння має два дійсних кореня:<br><br>x1 = ' + x1 + ';<br><br> x2 = ' + x2);
    }
    else if (D == 0) {
        const x = (-(b / (2 * a)));
        return ('<br>Так як дискримінант рівний нулю, то квадратне рівняння має один дійсний корінь:<br> x = ' + x);
    }
    else if (D < 0) {
        return ('<br>Так як дискримінант менше нуля, то рівняння не має дійсних коренів.');
    }
};

const S = getSolution(numA, numB, D);

document.write('Ваше рівняння: ' + numA + 'x<sup>2</sup> + ' + numB + 'x + ' + numC + ' = 0');
document.write('<br><br>');
document.write('Знайдемо дискримінант квадратного рівняння: ');
document.write('<br><br>');
document.write('D = b<sup>2</sup> - 4ac = ' + numB + '<sup>2</sup> - 4 * ' + numA + ' * ' + numC + ' = ' + D);
document.write('<br>');
document.write(S);
