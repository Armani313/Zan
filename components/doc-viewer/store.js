import { create } from 'zustand'

export const useDocStore = create((set) => ({
  docNumber: "",
  editDocNumber: (content) => set({ docNumber: content }),
  FIO: "",
  editFIO: (content) => set({ FIO: content }),
}))
