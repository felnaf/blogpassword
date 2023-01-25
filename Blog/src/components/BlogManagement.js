import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBlogData, getBlogData } from '../actions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BlogManagement = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getBlogData());
  }, []);
  return (
    <div className="mt-5 container ">
      <div className="d-flex justify-content-between">
        <div></div>
        <button type="submit" className="btn btn-success">
          <Link to="/add-blogmanagement">ADD</Link>
        </button>
      </div>
      <div className="d-flex justify-content-around flex-wrap m-3 ">
        {data.map((d) => (
          <Card style={{ width: '18rem' }} className="mt-4">
            <Card.Img variant="top" src={d.image} />
            <Card.Body>
              <Card.Title>{d.title}</Card.Title>
              <Card.Text>{d.description}</Card.Text>
              <Button
                variant="success"
                as={Link}
                to={`/view-blogmanagement/${d.id}`}
              >
                View
              </Button>
               <Button
                variant="primary"
                as={Link}
                to={`/edit-blogmanagement/${d.id}`}
              >
                Edit
              </Button>
              <Button
                variant="warning"
                onClick={() => dispatch(deleteBlogData(d.id))}
              >
                Delete
              </Button> 
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogManagement;
