import {useDocStore} from "./store";

export const Form = () => {
  const editDocNumber = useDocStore(state => state.editDocNumber)
  const editAsd = useDocStore(state => state.editAsd)

  return (
    <div className="p-4 flex flex-col gap-2">
      <label htmlFor="docNumber">Номер документа</label>
      <input id="docNumber" className="border border-gray-500" onChange={(e) => editDocNumber(e.target.value)} />

      <label htmlFor="asd">Asd</label>
      <input id="asd" className="border border-gray-500" onChange={(e) => editAsd(e.target.value)} />
    </div>
  )
}