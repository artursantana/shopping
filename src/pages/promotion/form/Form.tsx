import { useRouter } from 'next/router';
import React from 'react';

const Form = () => {
  const { id }: { id?: string } = useRouter().query;

  return (
    <div>
      Form
      {id && <div>id: {id}</div>}
    </div>
  );
};

export default Form;
