import { combineReducers } from 'redux';

const dummy = () => '';

const initial = {
  data: [],
  editBlog: {},
  viewBlog: {},
  userLoggeIn: JSON.parse(sessionStorage.getItem('user')),
  contactdata: [],
};

const postReducer = (state = initial, action) => {
  switch (action.type) {
    case 'BLOG_DATA':
      return { ...state, data: action.payload };
    case 'EDIT_BLOG_DATA':
      return { ...state, editBlog: action.payload };
    case 'VIEW_BLOG_DATA':
      return { ...state, viewBlog: action.payload };
    case 'LOGIN':
      return { ...state, userLoggeIn: action.payload };
    case 'CONTACT_DATA':
      return { ...state, contactdata: action.payload };
    default:
      return state;
  }
};
export default combineReducers({ dummy, postReducer });
