"use client";

import { Section } from "./section";
import { Container } from "./container";
import { useDocStore } from "./store";
import { Form } from "./form";

export const DocViewer = () => {
    const docNumber = useDocStore((state) => state.docNumber);
    const FIO = useDocStore((state) => state.FIO);
    const flightNumber = useDocStore((state) => state.flightNumber);

    return (
        <Container form={<Form />}>
            <section className="flex justify-center">
                <div
                    style={{
                        maxWidth: "800px",
                        width: "100%",
                        padding: "20px",
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                        minHeight: "500px", // Гарантируем, что контейнер не схлопнется
                    }}
                >
                    <p style={{ paddingLeft: "400px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        <span style={{ fontWeight: 400 }}>
                            {docNumber || "[Наименование авиакомпании]"}
                        </span>
                    </p>
                    <p style={{ paddingLeft: "400px" }}>
                        <span style={{ fontWeight: 400 }}>[Адрес авиакомпании]</span>
                    </p>
                    <p style={{ paddingLeft: "400px" }}>&nbsp;</p>
                    <p style={{ paddingLeft: "400px" }}>
                        <span style={{ fontWeight: 400 }}>{FIO || "[ФИО]"}</span>
                    </p>
                    <p style={{ paddingLeft: "400px" }}>
                        <span style={{ fontWeight: 400 }}>[Ваш адрес]</span>
                    </p>
                    <p style={{ paddingLeft: "400px" }}>
                        <span style={{ fontWeight: 400 }}>[Ваш контактный телефон]</span>
                    </p>
                    <p style={{ paddingLeft: "400px" }}>
                        <span style={{ fontWeight: 400 }}>[Ваш адрес электронной почты]</span>
                    </p>
                    <p style={{ paddingLeft: "400px", textAlign: "center" }}>&nbsp;</p>
                    <br/>
                    <h3 style={{ textAlign: "center", color: "#333", fontSize: "19px" }}>
                        <strong>Заявление на возврат средств в связи с задержкой рейса</strong>
                    </h3>
                    <br />
                    <p style={{ textAlign: "justify", textIndent: "40px", fontSize: "16px", lineHeight: "1.6" }}>
                        Уважаемые представители <strong>{docNumber || "[Наименование авиакомпании]"}</strong>,
                    </p>

                    <p style={{ textAlign: "justify", textIndent: "40px", fontSize: "16px", lineHeight: "1.6" }}>
                        Я, <strong> {FIO || "[Ваше ФИО]"}</strong>, обращаюсь к вам с требованием о возврате денежных средств в связи с задержкой рейса <strong> {flightNumber || "[номер рейса]"} </strong>, который должен был состояться [дата и время по расписанию].
                    </p>

                    <p style={{ textAlign: "justify", textIndent: "40px", fontSize: "16px", lineHeight: "1.6" }}>
                        Согласно статье 86 Закона Республики Казахстан «Об использовании воздушного пространства Республики Казахстан и деятельности авиации», перевозчик несет ответственность за задержку рейса, если она произошла по его вине или вследствие позднего прибытия воздушного судна. В таких случаях пассажир имеет право на возврат полной стоимости билета, а также выплату штрафа в размере 3% от стоимости тарифа за каждый час задержки.

                    </p>

                    <h2 style={{ textAlign: "left", textIndent: "40px", fontSize: "18px", fontWeight: "bold" }}>В связи с вышеизложенным прошу:</h2>
                    <ul style={{ paddingLeft: "40px", fontSize: "16px", lineHeight: "1.6" }}>
                        <li>Осуществить возврат полной стоимости билета.</li>
                        <li>Выплатить компенсацию в размере 3% от стоимости тарифа за каждый час задержки.</li>
                    </ul>

                    <h2 style={{ textAlign: "left", textIndent: "40px", fontSize: "18px", fontWeight: "bold" }}>К заявлению прилагаю:</h2>
                    <ul style={{ paddingLeft: "40px", fontSize: "16px", lineHeight: "1.6" }}>
                        <li>Копию билета.</li>
                        <li>Посадочный талон.</li>
                        <li>Реквизиты для возврата денежных средств.</li>
                    </ul>

                    <p style={{ textAlign: "right", fontSize: "16px", marginTop: "20px" }}>
                        <strong>С уважением,</strong> <br />
                        {FIO || "[Ваше ФИО]"} <br />
                        <strong>[Дата]</strong>
                    </p>
                </div>
            </section>
        </Container>
    );
};
