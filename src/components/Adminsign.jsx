import { Button, Typography,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Home from './Signup';

const Adminsign = () => {
    var [edit, setEdit] = useState(false);
    var [selected, setSelected] = useState({});
    var [user, setUsers] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/logins")
            .then((respose) => {
                //console.log(respose.data);
                setUsers(respose.data);
            })
    }, []);

    const deleteUser = (id) => {
        axios.delete("http://localhost:3000/logins/" + id).then(() => {
            alert("Delted Row");
            window.location.reload();    //auto-reload of page
        })
            .catch(() => {
                alert("Deleting Field")
            })
    }

    const editUser = (id) => {
        axios
            .get("http://localhost:3000/logins/" + id)
            .then((response) => {
                setSelected(response.data);
                setEdit(true);
            })
            .catch(() => {
                alert("Cannot edit now");
            });
    };

    return (
        <div>
            {edit ? (
                <Home method='put'
                    data={{
                        id: selected._id, name: selected.name, email: selected.email, phone: selected.phone,  pswd: selected.pswd
                    }}/>) 
                    : (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Phone</TableCell>
                                    

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user.map((val, ind) => {
                                    return (
                                        <TableRow>
                                            <TableCell key={ind}>{val.user_name}</TableCell>
                                            <TableCell key={ind}>{val.user_email}</TableCell>
                                            <TableCell key={ind}>{val.user_phone}</TableCell>
                                            <TableCell>
                                                <Button onClick={() => { editUser(val._id); }}>EDIT</Button>
                                            </TableCell>
                                            <TableCell>
                                                <Button onClick={() => { deleteUser(val._id); }} >DELETE</Button>
                                            </TableCell>
                                        </TableRow>

                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
        </div>

    )
}

export default Adminsign