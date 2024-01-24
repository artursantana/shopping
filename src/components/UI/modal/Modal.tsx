import React, { useEffect, useState } from 'react';
import * as S from './style';
import { v4 as uuidv4 } from 'uuid';

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
  updatePromotion: (updatedPromotion: Promotion) => void;
};

const Modal: React.FC<Props> = ({ isOpen, setIsOpen, promotion, updatePromotion }) => {
  const [newComment, setNewComment] = useState('');
  const [visibleComments, setVisibleComments] = useState<Comment[]>(promotion.comments);

  const handleCommentSubmit = () => {

    const newCommentObj = {
      id: uuidv4(),
      comment: newComment,
      promotionId: promotion.id,
    };

    const updatedPromotion = {
      ...promotion,
      comments: [...promotion.comments, newCommentObj],
    };
  
    updatePromotion(updatedPromotion);

    setNewComment('');
  
    setVisibleComments((prevComments) => [...prevComments, newCommentObj]);
    console.log(newCommentObj)
  };
  
  

  if (isOpen) {
    return (
      <S.Container>
        <S.SubContainer>
          <button onClick={() => setIsOpen(!isOpen)}>close</button>
          <div>
            <h1>{promotion.title}</h1>
            <div>
              <textarea
                placeholder='Typing...'
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button onClick={handleCommentSubmit}>submit</button>
            </div>
            <h2>Comments: </h2>
            {visibleComments.map((comment) => (
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
