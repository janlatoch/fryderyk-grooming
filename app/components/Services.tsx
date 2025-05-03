import { Section } from "@/app/components/Section"

export const Services = () => {
  return (
    <div className="bg-bd">
      <Section yPadding="py-6" title="Usługi" id="services">
        <div className="flex items-center justify-between">
          <div className="card bg-base-100  card-md w-96 shadow-sm">
            <figure
              className="h-60">
              <img
                src="./dog1.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Kąpanie piesków</h2>
              <p>Wykąpiemy Ci psa zajebiscie</p>
            </div>
          </div>
          <div className="card bg-base-100  card-md w-96 shadow-sm">
            <figure
              className="h-60">
              <img
                src="./dog2.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Strzyżenie piesków (i królików)</h2>
              <p>Mamy najlepsze strzyżenie po tej stronie galaktyki</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}