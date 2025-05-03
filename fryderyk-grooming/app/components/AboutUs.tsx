import { Section } from "@/app/components/Section"
import Image from "next/image"

export const AboutUs = () => {
  return (
    <div className="bg-bd">
      <Section yPadding="py-6" title="O nas" id="aboutUs">
        <div className="flex items-center justify-between">
          <div className="basis-sm flex justify-center">
            <Image
              className=""
              src="./dogs1.jpg"
              alt="Dogs"
              width={400}
              height={38}
              priority
            />
          </div>
          <div className="basis-sm">
            <p className='mt-2 text-sm'>
              Pielęgnacją psów zajmujemy się już od początku hodowli. Specjalizujemy się zwłaszcza w pielęgnacji rasy samoyed.
              W 2018 r. nasze drogi połączyły się z wymagającymi pudlami królewskimi, które były główną motywacją do zdobywania dalszej wiedzy w zakresie groomingu.
              To właśnie nasz pierwszy czarny pudel królewski, dumnie zwany Fryderyk, został inspiracją dla nazwy naszego salonu groomerskiego.
            </p>
            <p className='mt-2 text-sm'>
              Kwalifikacje zdobywałyśmy u najlepszych groomerów w Polsce.
              Karolina ukończyła podstawowy kurs w Gdańsku pod okiem Tatiany Rzeszutek,
              zaś Irena we Wrocławiu u Anny Krauze. Wciąż doskonalimy umiejętności i uczymy się,
              uczestnicząc w różnych seminariach oraz kursach doszkalających.
            </p>
            <p className='mt-2 text-sm'>
              W naszym salonie pielęgnacji psów, podchodzimy do każdego klienta indywidualnie.
              Wszystkie zabiegi pielęgnacyjne oraz strzyżenie wykonywane są bez użycia środków uspokajających.
              Do pielęgnacji używamy profesjonalnych narzędzi oraz najwyższej jakości kosmetyków.
            </p>
          </div>
        </div>
      </Section>
    </div>
  )
}