import { pricingData } from "../assets/data"
import PricingTier from "../components/PricingTier"
const PricingSection = () => {
    return (
        <section id='Price' className='container mx-auto px-4 py-28'>
            <div className='max-w-2xl mx-auto text-center mb-12'>
                <h2 className="text-5xl md:text-6xl mb-6 tracking-tight clash-display">
                    Choose Your
                    <span className="font-medium clash-display grad1">
                        Trading Plan
                    </span>
                </h2>
                <p className="text-lg text-zinc-300/80 text-center">
                    Select the perfect trading plan with advanced features and competitive fees
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {
                    pricingData.map(({ _id, isPopular, name, description, features, price }) => (
                        <PricingTier
                            key={_id}
                            isPopular={isPopular}
                            name={name}
                            description={description}
                            features={features}
                            price={price}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default PricingSection