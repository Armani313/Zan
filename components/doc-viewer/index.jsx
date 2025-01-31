"use client"

import {Section} from "./section";
import {Container} from "./container";
import {useDocStore} from "./store";
import {Form} from "./form";

export const DocViewer = () => {
  const docNumber = useDocStore(state => state.docNumber)
  const asd = useDocStore(state => state.asd)

  return (
    <Container form={<Form />}>
      <Section weight="bold" align="center">
        Договор реального дарения движимого имущества № {docNumber}
      </Section>
      <Section weight="bold" align="between">
        <span>
          1. Предмет Договора
        </span>
        <span>
          {asd}
        </span>
      </Section>
      <Section isParagraph>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section isItalic>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1. Предмет Договора
      </Section>
      <Section isParagraph>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section isItalic>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1. Предмет Договора
      </Section>
      <Section isParagraph>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section isItalic>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1. Предмет Договора
      </Section>
      <Section isParagraph>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section isItalic>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1. Предмет Договора
      </Section>
      <Section isParagraph>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section isItalic>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1. Предмет Договора
      </Section>
      <Section isParagraph>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section isItalic>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1. Предмет Договора
      </Section>
      <Section isParagraph>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section isItalic>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1. Предмет Договора
      </Section>
      <Section isParagraph>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section isItalic>
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
      <Section weight="bold">
        1.4. С момента передачи предмета дара во владение Одаряемого и до момента перехода права собственности на предмет дара к Одаряемому, Даритель не вправе каким-либо образом прямо или косвенно обременять его правами третьих лиц (залог, аренда, ссуда и т.д.).
      </Section>
    </Container>
  )
}