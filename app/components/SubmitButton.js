import React from 'react';
import AppButton from './AppButton';
import { useFormikContext } from 'formik';

function SubmitButton({ title, style, navigation}) {
    const{handleSubmit} = useFormikContext();
    return (
        <AppButton
            style={style}
			title={title}
			onPress={handleSubmit}
			bgColor='primary'
		/>
    );
}

export default SubmitButton;