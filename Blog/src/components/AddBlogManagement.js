import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImageUploader from 'react-images-upload';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editBlogData, edittedBlogData, postBlogData } from '../actions';

const AddBlogManagement = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [errorImage, setErrorImage] = useState('');

  const { editBlog } = useSelector((state) => state.postReducer);

  const onDrop = (pictureFiles, pictureDataURLs) => {
    setImage(pictureDataURLs);
  };
  useEffect(() => {
    if (id) {
      dispatch(editBlogData(id));
    }
  }, []);

  return (
    <div className="container">
      <Formik
        initialValues={{
          title: id ? editBlog.title : '',
          description: id ? editBlog.description : '',
          keyword: id ? editBlog.keyword : '',
        }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          description: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          keyword: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          if (image === '') {
            setErrorImage('Required');
            if (id) {
              let img = image ? image : editBlog.image;
              dispatch(edittedBlogData({ ...values, image: img }, id));
              navigate('/blog-management');
              resetForm();
            }
          } else {
            values = { ...values, image };
            dispatch(postBlogData(values));
            navigate('/blog-management');
            resetForm();
          }
        }}
        enableReinitialize
      >
        <Form>
          <div className="mb-4">
            <div>
              <label htmlFor="title">Title</label>
            </div>

            <Field name="title" type="text" />
            <div className="text-danger">
              <ErrorMessage name="title" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="description">Description</label>
            </div>
            <Field name="description" type="text" />
            <div className="text-danger">
              <ErrorMessage name="description" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="keyword">Keyword</label>
            </div>
            <Field name="keyword" type="text" />
            <div className="text-danger">
              <ErrorMessage name="keyword" />
            </div>
          </div>

          <div className="mb-4">
            <div>
                
              <label>Photo</label>
              <div>{ id ? <img src = {editBlog.image}  style={{height:'100px'}}/>: null}</div>
              <ImageUploader
                withIcon={true}
                value={image}
                withPreview={true}
                buttonText="Choose images"
                onChange={onDrop}
                imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
              />
            </div>
            <div className="text-danger">{errorImage}</div>
          </div>

          <button type="submit" className="btn btn-primary">
            ADD
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBlogManagement;
