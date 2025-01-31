
import {clsx} from "clsx";

export const Section = ({
                          children,
                          weight = 'normal',
                          align = 'left',
                          isParagraph = false,
                          isItalic = false
}) => {
  return (
    <div className={clsx(
      "flex py-[5px] pr-[10px] pl-[15px]",
      {
        'font-bold': weight === 'bold',
        'justify-center': align === 'center',
        'justify-start': align === 'left',
        'justify-end': align === 'right',
        'justify-between': align === 'between',
        'italic': isItalic,
      })}>
      {isParagraph ? <span> &nbsp; </span> : null}
      {children}
    </div>
  )
}