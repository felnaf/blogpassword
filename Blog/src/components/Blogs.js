import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBlogData } from '../actions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blogs = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getBlogData());
  });
  return (
    <div className="mt-5 container">
      {/* <button type="submit" className="btn btn-success">
        <Link to="/add-blogmanagement">ADD</Link>
      </button> */}
      <div className='d-flex justify-content-around flex-wrap m-3'>
     
      {data.map((d) => (
        <Card style={{ width: '18rem' }} className='mt-4'>
          <Card.Img variant="top" src={d.image} />
          <Card.Body>
            <Card.Title>{d.title}</Card.Title>
            <Card.Text>{d.description}</Card.Text>
            <Button variant="success" as={Link} to={`/view-blogs/${d.id}`}>
              View
            </Button>
          </Card.Body>
        </Card>
      ))}
         
         </div>
    </div>
  );
};

export default Blogs;
