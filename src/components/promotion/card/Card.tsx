
import Image from 'next/image';
import * as S from './style'

type Comment = {
    id: number
    comment: string
}

type Promotion = {
    id: number
    title: string
    price: number
    imageUrl: string
    url: string;
    comments: Comment[]
}

type Props = {
    promotion: Promotion
}


const Card: React.FC<Props> = ({promotion}) => {
  
  return (
    <S.Container>
      <Image
        loader={({src}) => src} src={promotion.imageUrl} width={200} height={200} alt=''
      />
      <S.Info>
        <h1>{promotion.title}</h1>
        <div className='price'>
            R$ {promotion.price}
        </div>
        <footer>
            {promotion.comments.length > 0 && (
                <div className='promotion_card_comment'>{promotion.comments[0].comment} </div>
            )}


                <div className='promotion_card_count'>
                {promotion.comments.length}
                {' '}
                {promotion.comments.length > 1 ? 'Comments' : 'Comment'}
                </div>
                <a href={promotion.url} target='blank'>Go to WebSite</a>


        </footer>
      </S.Info>
    </S.Container>
  )
}

export default Card
