
export const Container = ({children, form}) => {
  return (
    <div className="flex h-screen p-4">
      <div className="w-[390px]">
        {form}
      </div>
      <div className="w-full h-full">
        <div className="border border-gray-500 h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>

  )
}