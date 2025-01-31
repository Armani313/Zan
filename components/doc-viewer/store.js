import { create } from 'zustand'

export const useDocStore = create((set) => ({
  docNumber: "",
  editDocNumber: (content) => set({ docNumber: content }),
  asd: "",
  editAsd: (content) => set({ asd: content }),
}))
