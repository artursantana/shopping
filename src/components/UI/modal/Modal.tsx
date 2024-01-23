import React, { useEffect, useState } from 'react';
import * as S from './style';

type Comment = {
  id: number;
  comment: string;
};

type Promotion = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  url: string;
  comments: Comment[];
};

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  promotion: Promotion;
};

const Modal: React.FC<Props> = ({ isOpen, setIsOpen, promotion }) => {
  const [apiload, setApiLoad] = useState<Promotion[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/promotions?_embed=comments')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error');
        }
        return res.json();
      })
      .then((data) => {
        setApiLoad(data);
        console.log(data);
      });
  }, []);


  if (isOpen) {
    return (
      <S.Container>
        <S.SubContainer>
          <button onClick={() => setIsOpen(!isOpen)}>close</button>
          <div>
            <h1>{promotion.title}</h1>
            <h2>Commnet: </h2>
            {promotion.comments.map((comment) => (
              <p key={comment.id}>{comment.comment}</p>
            ))}
          </div>
        </S.SubContainer>
      </S.Container>
    );
  }

  return null;
};

export default Modal;
