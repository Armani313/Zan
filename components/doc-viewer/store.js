import { create } from 'zustand'

export const useDocStore = create((set) => ({
  docNumber: "",
  editDocNumber: (content) => set({ docNumber: content }),

  FIO: "",
  editFIO: (content) => set({ FIO: content }),

  flightNumber: "", // Сохраняем номер рейса
  editFlightNumber: (content) => set({ flightNumber: content }), // Функция для обновления номера рейса

  flightStatus: "delayed", // По умолчанию "Вылетел с задержкой"
  editFlightStatus: () => set((state) => ({
    flightStatus: state.flightStatus === "delayed" ? "canceled" : "delayed",
  })),

}));


//нужно уточнить в части двойного обявления переменных