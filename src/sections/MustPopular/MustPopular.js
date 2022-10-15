import './MustPopular.css'
import { Card, SectionHeader, SectionWrapper } from '../../components/index'
import MostPopularData from '../../Data/MostPopularData'

const MustPopular = () => {

    const cards = MostPopularData.map(card => {
        return <Card id={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
    })

    return (
        <SectionWrapper>
            <SectionHeader>
                Must Popular
            </SectionHeader>
            <div className='most-popular-items'>
                {cards}
            </div>
        </SectionWrapper>
    )
}

export default MustPopular