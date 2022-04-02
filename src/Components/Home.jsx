import React from 'react'
import Card from './Card'
export default function Home() {
    let cards = [
        { id: "1", title: "card 1", btnText: "btn 1 ", imgSrc: "https://ae01.alicdn.com/kf/HTB1inXaaiYrK1Rjy0Fdq6ACvVXa7/Puseky-Newborn-Baby-Crochet-Romper-Knit-Costume-Prop-Photo-Photography-Baby-Hat-Photo-Props-Newborn-Baby.jpg" },
        { id: "2", title: "card 2", btnText: "btn 2 ", imgSrc: "http://i.ytimg.com/vi/ip_IkkDaiyM/maxresdefault.jpg" },
        { id: "3", title: "card 3", btnText: "btn 3 ", imgSrc: "https://maternityglow.com/wp-content/uploads/2017/09/nap-transition.jpg" },
        { id: "4", title: "card 4", btnText: "btn 4 ", imgSrc: "https://beststatus4u.in/wp-content/uploads/2019/12/baby-whatsapp-status-24.jpg" },
        { id: "5", title: "card 5", btnText: "btn 5 ", imgSrc: "https://www.mykidsite.com/wp-content/uploads/2016/01/Little-Sleeping-Baby-cu274.jpg" },
        { id: "6", title: "card 6", btnText: "btn 6 ", imgSrc: "https://i.huffpost.com/gen/791041/images/o-BABYNAMES-facebook.jpg" }
    ]
    return (
        <div>
            <div className='row'>
                {
                    cards.map((card, index) => {
                        return <Card key={index} title={card.title} btnText={card.btnText} imgSrc={card.imgSrc} />
                    })
                }
            </div>
        </div>
    )
}
