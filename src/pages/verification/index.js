import React from 'react'
import { useVerification } from '../../hooks/useVerification'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';

const Verification = () => {
    const params = useParams();

    const {mutate} = useVerification(params.verification_token);

    useEffect(() => {
        mutate();
    }, [mutate]);

  return (
    <div>Verification</div>
  )
}

export default Verification