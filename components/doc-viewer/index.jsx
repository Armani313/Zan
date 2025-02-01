"use client"

import {Section} from "./section";
import {Container} from "./container";
import {useDocStore} from "./store";
import {Form} from "./form";

export const DocViewer = () => {
  const docNumber = useDocStore(state => state.docNumber)
  const FIO = useDocStore(state => state.FIO)

  return (
    <Container form={<Form />}>
        <section weight="bold" align="between">
            <div style={{
                maxWidth: "800px",
                margin: "auto",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
            }}>

                <p style={{paddingLeft: 400}}><span style={{fontWeight: 400}}>{docNumber || "[Наименование авиакомпании]"}</span></p>
                <p style={{paddingLeft: 400}}><span style={{fontWeight: 400}}>[Адрес авиакомпании]</span></p>
                <p style={{paddingLeft: 400}}>&nbsp;</p>
                <p style={{paddingLeft: 400}}><span style={{fontWeight: 400}}>{FIO || "[ФИО]"}</span></p>
                <p style={{paddingLeft: 400}}><span style={{fontWeight: 400}}>[Ваш адрес]</span></p>
                <p style={{paddingLeft: 400}}><span style={{fontWeight: 400}}>[Ваш контактный телефон]</span></p>
                <p style={{paddingLeft: 400}}><span style={{fontWeight: 400}}>[Ваш адрес электронной почты]</span></p>
                <p style={{paddingLeft: 400, textAlign: "center"}}>&nbsp;</p>


                <h1 style={{textAlign: "center", color: "#333"}}> <strong> Заявление на возврат средств в связи с задержкой
                    рейса</strong></h1>
                <br/>
                <p style={{textAlign: "justify", textIndent: "40px"}}>Уважаемые представители <strong>[Наименование
                    авиакомпании]</strong>,
                </p>

                <p style={{textAlign: "justify", textIndent: "40px"}}>Я, <strong>[Ваше ФИО]</strong>, обращаюсь к вам с
                    требованием о
                    возврате денежных средств в связи с задержкой рейса <strong>[номер рейса]</strong> по
                    маршруту <strong>[город вылета] – [город назначения]</strong>, который должен был
                    состояться <strong>[дата и время по расписанию]</strong>. Однако фактически вылет состоялся <strong>[фактическая
                        дата и время]</strong> с задержкой на <strong>[указать количество часов]</strong>.</p>

                <p style={{textAlign: "justify", textIndent: "40px"}}>Согласно статье 86 Закона Республики Казахстан «Об
                    использовании
                    воздушного пространства Республики Казахстан и деятельности авиации», перевозчик несет
                    ответственность за задержку рейса, если она произошла по его вине или вследствие позднего прибытия
                    воздушного судна. В таких случаях пассажир имеет право на возврат полной стоимости билета, а также
                    выплату штрафа в размере 3% от стоимости тарифа за каждый час задержки.</p>

                <h2 style={{textAlign: "left", textIndent: "40px"}}>В связи с вышеизложенным прошу:</h2>
                <ul>
                    <li>Осуществить возврат полной стоимости билета <strong>[указать сумму и валюту]</strong> за
                        рейс <strong>[номер рейса]</strong>.
                    </li>
                    <li>Выплатить компенсацию в размере 3% от стоимости тарифа за каждый час задержки, что
                        составляет <strong>[рассчитать сумму]</strong>.
                    </li>
                </ul>

                <h2 style={{textAlign: "left", textIndent: "40px"}}>К заявлению прилагаю:</h2>
                <ul>
                    <li>Копию билета.</li>
                    <li>Посадочный талон.</li>
                    <li>Реквизиты для возврата денежных средств.</li>
                </ul>

                <p style={{textAlign: "justify", textIndent: "40px"}}>Прошу рассмотреть мое обращение в установленный
                    законодательством срок
                    и осуществить выплату на указанные реквизиты. В случае игнорирования или отказа в удовлетворении
                    требований я оставляю за собой право обратиться в уполномоченные органы для защиты своих прав.</p>

                <p style={{textAlign: "justify", textIndent: "40px"}}>Ожидаю вашего ответа в течение срока определенный действующим законодательством Республики Казахстан.</p>
                <br/>
                <p style={{textAlign: "right"}}><strong>С уважением,</strong><br/>[Ваше ФИО]</p>
                <p style={{textAlign: "right"}}><strong>[Дата]</strong></p>
            </div>
        </section>
    </Container>
  )
}