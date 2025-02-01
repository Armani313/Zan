import { useDocStore } from "./store";

export const Form = () => {
    const editDocNumber = useDocStore((state) => state.editDocNumber);
    const editFIO = useDocStore((state) => state.editFIO);
    const editFlightNumber = useDocStore((state) => state.editFlightNumber);
    const editFlightStatus = useDocStore((state) => state.editFlightStatus);

    const docNumber = useDocStore((state) => state.docNumber); // Получаем текущее значение
    const FIO = useDocStore((state) => state.FIO);
    const flightNumber = useDocStore((state) => state.flightNumber);
    const flightStatus = useDocStore((state) => state.flightStatus);

    const airlines = [
        { value: "Жезказган Эйр Жетысу", label: "Жезказган Эйр Жетысу" },
        { value: "Казах Эйр", label: "Казах Эйр" },
        { value: "СКАТ", label: "СКАТ" },
        { value: "Флай Арыстан", label: "Флай Арыстан" },
        { value: "Эйр Астана- Южное небо", label: "Эйр Астана- Южное небо" },
    ];

    return (
        <div className="p-4 flex flex-col gap-2">
            <label>Заполните формы</label>
            <br/>
            <label htmlFor="airline">Выберите авиакомпанию:</label>
            <select
                id="airline"
                className="border border-gray-500 p-2"
                value={docNumber} // Теперь select управляется Zustand Store
                onChange={(e) => editDocNumber(e.target.value)}
            >
                <option value="" disabled>
                    Выберите авиакомпанию
                </option>
                {airlines.map((airline) => (
                    <option key={airline.value} value={airline.value}>
                        {airline.label}
                    </option>
                ))}
            </select>

            <br/>
            <label htmlFor="FIO">Введите ФИО:</label>
            <input
                id="FIO"
                className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                type="text"
                value={FIO} // Теперь input управляется Zustand Store
                onChange={(e) => editFIO(e.target.value)}
                placeholder="ФИО"
            />

            <br/>
            <label htmlFor="flightNumber">Введите номер рейса:</label>
            <input
                id="flightNumber"
                className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none"
                type="text"
                value={flightNumber} // Теперь input управляется Zustand Store
                onChange={(e) => editFlightNumber(e.target.value)}
                placeholder="Номер рейса"
            />

            <br/>
            <div className="flex items-center gap-3">
                <span className="text-sm text-gray-700">Рейс отменен</span>
                <div
                    className={`relative w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 
        ${flightStatus === "delayed" ? "bg-blue-500" : "bg-red-500"}`}
                    onClick={editFlightStatus}
                >
                    <div
                        className={`absolute w-7 h-7 bg-white rounded-full shadow-md transition-all duration-300 
            ${flightStatus === "delayed" ? "translate-x-8" : "translate-x-0"}`}
                    />
                </div>
                <span className="text-sm text-gray-700">Вылетел с задержкой</span>
            </div>


            <br/>
            <div className="flex flex-col md:flex-row gap-4 mt-4">
                <a target="_blank" href={"/assets/file.pdf"} rel="noreferrer" className="flex-1">
                    <button
                        className="w-full py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded text-center">
                        Скачать обращение
                    </button>
                </a>
                <br/>
                <a target="_blank" href={"/assets/file.pdf"} rel="noreferrer" className="flex-1">
                    <button
                        className="w-full py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded text-center">
                        Отправить обращение через наш сервис
                    </button>
                </a>
            </div>

        </div>
    );
};
