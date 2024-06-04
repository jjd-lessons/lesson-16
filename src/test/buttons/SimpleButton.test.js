import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import SimpleButton from "../../components/buttons/SimpleButton";

// describe: Группа тестов.
// Например, группа тестов одного компонента
describe('SimpleButton', () => {
    // Отдельный тест из группы.
    // В описании лучше указывать:
    // - при каких условиях тестируется компонент
    // - что мы ждем от компонента в данных условиях
    // Например, без свойств компонент генерирует символ 👉
    it('component without props renders 👉', () => {
        // render: Генерация компонента
        render(<SimpleButton />);
        // утверждение, что 👉 должна присутствовать в dom дереве после генерации

        // способы получпния элементов в сгенерированном компоненте
        // screen.getByAltText - alt тега img
        // screen.getAllByLabelText - текст label формы
        // screen.getAllByTestId - data-testid на элементе
        // screen.getByDisplayValue - значение совйства value элмента формы
        // screen.getByRole - по значению свойства role элемента
        // screen.getByText - по тексту элемента
        expect(screen.getByText("👉")).toBeInTheDocument();

    });

    it("component with props 'text='подробнее'' renders 'ПОДРОБНЕЕ...'", () => {
        // объявляем свойства для проверки
        const props = {
            text: 'подробнее',
        };
        render(<SimpleButton {...props} />);
        // render(<SimpleButton text="подробнее" />);

        // утверждение, что 'ПОДРОБНЕЕ...' должно присутствовать
        // в dom дереве после генерации
        expect(screen.getByText("ПОДРОБНЕЕ...")).toBeInTheDocument();
    });

    it("button changes class by click", () => {
        // объявляем свойства для проверки
        const props = {
            text: 'подробнее',
            onSimpleClick: () => console.log('clicked'),
        };
        render(<SimpleButton {...props} />);

        const button = screen.getByTestId('simple')

        // эмуляция события #1,
        // в данном случае - click на кнопке с testid - simple
        fireEvent.click(button);

        // утверждение, что класс изменился на active
        expect(button).toHaveClass('active')
        expect(button).not.toHaveClass('simple')

        // эмуляция события #2,
        // в данном случае - click на кнопке с testid - simple
        fireEvent.click(button);

        // утверждение, что класс изменился на simple
        // после повторного клика
        expect(button).toHaveClass('simple')
        expect(button).not.toHaveClass('active')
    });
});
