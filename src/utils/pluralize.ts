/**
 * Функция для правильного склонения слов в русском языке
 * @param count - количество
 * @param words - массив из 3 форм слова:
 *                [форма для 1, форма для 2-4, форма для 5-0]
 *                Пример для лет: ['год', 'года', 'лет']
 * @returns Правильная форма слова
 */
export const pluralize = (count: number, words: [string, string, string]): string => {
    const absCount = Math.abs(count);
    const cases = [2, 0, 1, 1, 1, 2];

    let index;

    if (absCount % 100 >= 11 && absCount % 100 <= 19) {
        index = 2;
    } else {
        const lastDigit = absCount % 10;
        index = cases[lastDigit < 5 ? lastDigit : 5];
    }

    return words[index];
}