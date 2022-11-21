import React from 'react';
import AppButton from './AppButton';
import { useFormikContext } from 'formik';

function SubmitButton({ title, style, onPress}) {
    const{handleSubmit} = useFormikContext();
    return (
        <AppButton
            style={style}
			title={title}
			onPress= {onPress}
			bgColor='primary'
		/>
    );
}

export default SubmitButton;