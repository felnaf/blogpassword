import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { viewBlogData } from '../actions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ViewBlogs = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { viewBlog } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (id) {
      dispatch(viewBlogData(id));
    }
  });
  return (
    <div className="container mt-5">
      <Button variant="primary" as={Link} to="/blogs">
        Back
      </Button>
      <Card style={{ width: '18rem' }} className="mt-5">
        <Card.Img variant="top" src={viewBlog.image} />
        <Card.Body>
          <Card.Title>{viewBlog.title}</Card.Title>
          <Card.Text>{viewBlog.description}</Card.Text>
          <Card.Text>{viewBlog.keyword}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewBlogs;
