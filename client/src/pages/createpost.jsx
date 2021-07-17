import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Axios from 'axios'

function CreatePost() {

    const initialValues = {
        title: '',
        postText: '',
        username: ''
    }

    const validation = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().required()
    })

    const onSubmit = (data) => {
        Axios.post('http://localhost:3002/post/createpost', data);
    }

    return (
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validation}>
                <Form className="formContainer">
                    <label>Title:</label>
                    <ErrorMessage name="title" component="span"/>
                    <Field id="inputCreatePost" name="title" placeholder=""></Field>
                    <label>Post:</label>
                    <ErrorMessage name="postText" component="span"/>
                    <Field id="inputCreatePost" name="postText" placeholder=""></Field>
                    <label>Username:</label>
                    <ErrorMessage name="username" component="span"/>
                    <Field id="inputCreatePost" name="username" placeholder=""></Field>
                    <button type="submit">Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost;