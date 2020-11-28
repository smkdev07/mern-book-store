import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { fetchUsers, deleteUser } from '../../../store/actions/admin';

import Loader from '../../../components/Loader/Loader';
import Message from '../../../components/Message/Message';

import { Table, Button } from 'react-bootstrap';
import { FaCheck, FaTimes, FaEdit, FaTrash } from 'react-icons/fa';

interface UsersScreenProps extends RouteComponentProps {}

const UsersScreen: React.FC<UsersScreenProps> = ({ history }) => {
  const dispatch = useDispatch();
  const adminState = useSelector((state: RootState) => state.admin);
  const { users, loading, error } = adminState;
  const userState = useSelector((state: RootState) => state.user);
  const { user } = userState;

  const deleteUserHandler = (userId: string) => {
    if (window.confirm('Are you sure you want to remove this user?')) {
      dispatch(deleteUser(userId));
    }
  };

  useEffect(() => {
    if (user && user.isAdmin) {
      dispatch(fetchUsers());
    } else {
      history.push('/signin');
    }
  }, [dispatch, history, user]);
  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table
          striped
          bordered
          hover
          responsive
          variant="dark"
          className="table-sm text-center">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                {/* <td>{user._id}</td> */}
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <FaCheck color="green" />
                  ) : (
                    <FaTimes color="red" />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}`}>
                    <Button variant="light" className="btn-sm mr-2">
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteUserHandler(user._id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UsersScreen;
