import {
  deleteData,
  editData,
  encrypt,
  getData,
  postData,
  validatePassword,
} from '../service';

export const getBlogData = () => async (dispatch) => {
  const { data } = await getData('Blogs');
  dispatch({
    type: 'BLOG_DATA',
    payload: data,
  });
};

export const postBlogData = (data) => async (dispatch) => {
  await postData('Blogs', data);
  dispatch(getBlogData());
};

export const deleteBlogData = (id) => async (dispatch) => {
  await deleteData(`Blogs/${id}`);
  dispatch(getBlogData());
};

export const editBlogData = (id) => async (dispatch) => {
  const { data } = await getData(`Blogs/${id}`);
  dispatch({
    type: 'EDIT_BLOG_DATA',
    payload: data,
  });
};

export const edittedBlogData = (data, id) => async (dispatch) => {
  await editData(`Blogs/${id}`, data);
  dispatch(getBlogData());
};

export const viewBlogData = (id) => async (dispatch) => {
  const { data } = await getData(`Blogs/${id}`);
  dispatch({
    type: 'VIEW_BLOG_DATA',
    payload: data,
  });
};

// login

export const loginAction = (credentials, navigate) => async (dispatch) => {
  const { data } = await getData('admin');
  const user = data.find((d) => d.email === credentials.email);
  if (!user) {
    alert('doesnt exists');
  } else {
    // console.log(credentials.phoneNumber);
    // console.log(
    //   validatePassword(
    //     'U2FsdGVkX1/6hOS5qGU896vGw9pqAWEHYwEPCwxxSAk=',
    //     '1111111111'
    //   )
    // );
    if (validatePassword(user.phoneNumber, credentials.phoneNumber)) {
      sessionStorage.setItem(
        'user',
        JSON.stringify({ user: user.email, status: true })
      );
      dispatch({ type: 'LOGIN', payload: { user: user.email, status: true } });
      navigate();
    } else {
      alert('invalid');
    }
  }
};

export const logout = () => async (dispatch) => {
  await sessionStorage.removeItem('user');
  dispatch({ type: 'LOGIN', payload: null });
};

// contact

export const getContactData = () => async (dispatch) => {
  const { data } = await getData('contact');
  dispatch({
    type: 'CONTACT_DATA',
    payload: data,
  });
};

export const postContactData = (data) => async (dispatch) => {
  await postData('contact', data);
  dispatch(getContactData());
};

export const changePassword = (credentials, navigate) => async (dispatch) => {
  const { data } = await getData('admin');
  const { user: email } = JSON.parse(sessionStorage.getItem('user'));
  const userLoggedIn = data.find((d) => d.email === email);
  if (validatePassword(userLoggedIn.phoneNumber, credentials.oldPassword)) {
    await editData(`admin/${userLoggedIn.id}`, {
      phoneNumber: encrypt(credentials.newPassword),
    }).then(() => {
      alert('changesdsuccessfully');
      dispatch(logout());
      navigate();
    });
  }
};
