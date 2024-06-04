import React from 'react';
import {render} from '@testing-library/react';
import SimpleCard from "../../components/cards/SimpleCard";
import SimpleText from "../../components/texts/SimpleText";

// эмуляция SimpleText компонента для тестирования исключитено SimpleCard
// и того, что карточка действительно передет нужные данные в SimpleText
jest.mock('../../components/texts/SimpleText');


describe('SimpleCard', () => {
    it('SimpleCard renders SimpleText', () => {

        let cardProps = {
            description: "описание"
        };
        render(<SimpleCard card={cardProps}/>);

        // проверяем, действительно ли SimpleText отрисован в карточке
        expect(SimpleText).toHaveBeenCalled();
    });

    it("SimpleCard renders SimpleText with capitalize description prop", () => {
        const card = {
            description: "опИсАниЕ"
        };

        // проверяем, действительно ли SimpleCard
        // передает в SimpleText правильные данные
        render(<SimpleCard card={card}/>)
        expect(SimpleText).toHaveBeenCalledWith(
            {text: "Описание"},
            expect.anything())
    })

    it("snapshot rendering", () => {
        const card = {
            description: "опИсАниЕ"
        };
        const { asFragment } = render(<SimpleCard card={card} />);
        expect(asFragment()).toMatchSnapshot("hint");
    });
});
