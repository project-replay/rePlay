import React from 'react';
import {Formik} from "formik";

function AppForm({initialValues, onSubmit, validationSchema, children, style}) {
    return (
        <Formik
		    initialValues={initialValues}
			onSubmit={onSubmit}
            validationSchema={validationSchema}
            style={style}
        >
            { () => (
                <>
                    {children}
                </>
            )}

        </Formik>
    );
}

export default AppForm;