import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Home from './Home';

const Adminsign = () => {
    var [students, setStudents] = useState([]);
    var [selected, setSelected] = useState({});
    var [edit, setEdit] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:4000/students")
            .then((response) => {
                console.log(response.data);
                setStudents(response.data);
            });
    }, []);

    const editPerson = (id) => {
        axios
            .get("http://localhost:4000/students/" + id)
            .then((response) => {
                setSelected(response.data);
                setEdit(true);
            }).catch(() => {
                alert("Cannot edit");
            });
    }

    const deleteHandler = (id) => {
        axios
            .delete("http://localhost:4000/students/" + id)
            .then(() => {
                alert("Deleted Row");
                window.location.reload();

            })
    }


    return (
        <>
            {edit ? (
                <Home method='put'
                    data={{
                        id: selected._id, name: selected.name, age: selected.age, department: selected.department
                    }}
                />
            ) : (
                <div>
                    &nbsp;&nbsp;
                    <Grid container spacing={2}>
                        {students.map((val, i) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} sx={{ justifyContent: 'space-between' }}>
                                    <br /><br />
                                    <Card sx={{ padding: '2', borderColor: 'grey', borderStyle: 'solid', borderWidth: 2, maxWidth: 345 }}>
                                        <CardMedia
                                            sx={{ height: 140 }}
                                            image="https://t4.ftcdn.net/jpg/05/91/40/47/360_F_591404733_XI6dw0OZMfxCsZLqzmY8BcWbzf2QwZdK.jpg"
                                            title={val.title}
                                        />
                                        <hr style={{ borderTopStyle: 'solid', borderTopWidth: '2px', borderTopColor: 'black' }} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {val.name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Age:{val.age} &nbsp;
                                                Department : {val.department}
                                            </Typography>
                                        </CardContent>
                                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                            <Button variant="contained" color="primary" onClick={() => { editPerson(val._id) }} >
                                                Edit
                                            </Button>
                                            <Button variant="contained" color="error" onClick={() => { deleteHandler(val._id) }} >
                                                Delete
                                            </Button>
                                        </div>
                                        <br />
                                    </Card>

                                </Grid>
                            )
                        })}
                    </Grid>
                </div>)}
        </>
    )
}

export default Adminsign