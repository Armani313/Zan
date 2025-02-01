import {useDocStore} from "./store";

export const Form = () => {
  const editDocNumber = useDocStore(state => state.editDocNumber)
  const editFIO = useDocStore(state => state.editFIO)

  return (
      <div className="p-4 flex flex-col gap-2">
          <label htmlFor="docNumber">Заполните формы</label>
          <br/>
          <input id="docNumber"
                 className="border border-gray-500"
                 onChange={(e) => editDocNumber(e.target.value)}
                 placeholder="Авокомпания"/>

          <br/>
          <input id="FIO"
                 className="border border-gray-500"
                 onChange={(e) => editFIO(e.target.value)}
                 placeholder="ФИО"/>

          <a target="_blank" href={"/assets/file.pdf"}>
              <button>
                  скачать обращение
              </button>
          </a>
          <a target="_blank" href={"/assets/file.pdf"}>
              <button>
                  отправить обращение
              </button>
          </a>
      </div>

  )
}
