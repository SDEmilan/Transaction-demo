import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { loginstyle } from '../loginstyle'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { array } from './array';


interface Istate {

    array: {
        user: string,
        pin: string,
        balance: number,
        deposit: number,
        withdraw: number,

    }[]

}

const Login = () => {
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [res, setRes] = useState(false);


    const [array, setArray] = useState<Istate["array"]>([
        {
            user: "user1",
            pin: "Pintu123",
            balance: 1000,
            deposit: 1000,
            withdraw: 0,

        },
        {
            user: "user2",
            pin: "Pintu321",
            balance: 1000,
            deposit: 1000,
            withdraw: 0,

        },
        {
            user: "user3",
            pin: "Pintu231",
            balance: 1000,
            deposit: 1000,
            withdraw: 0,

        },
    ])



    const [input, setInput] = useState({
        person: "",
        amount: 0
    });


    const [deleteUser, setDeleteUser] = useState(
        {
            conuser: "",
            conpass: "",
        }
    );
    const [loan, setLoan] = useState("")

    const date = new Date().toLocaleDateString();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])

    const verifyuser = (e:  ChangeEvent<HTMLInputElement>) => {
        setUname(e.target.value)
    }
    const vrifypassword = (e:  ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const register = () => {
        const res = array.find(
            (item) => item.user === uname && item.pin === password,
            setRes(true)
        )
        if (res) {
            alert("login success")
        } else {
            alert("user not found")
            setRes(false)
        }
    }

    const transfermoney = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const updateAmount = () => {


        const value = array.findIndex((item) => {
            if (item.user === input.person) {
                return true;
            }
        });
        if (value >= 0) {
            const update = array.map((item, index) => {
                if (index === value) {
                    return {
                        ...item,
                        user: item.user,
                        pin: item.pin,
                        balance: Number(item.balance) + Number(input.amount),
                        deposit: Number(input.amount),
                    }
                }
                console.log(item.balance);
                if (item.user == uname) {
                    return {
                        ...item,
                        user: item.user,
                        pin: item.pin,
                        balance: item?.balance - Number(input.amount),
                        withdraw: Number(input.amount)
                    }
                } else {
                    return item
                }
            })
            console.log(update)
            setArray(update)
        }
    }


    const chageLoan = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoan(e.target.value);
    }
    const handlerLoan = () => {
        

const loandata=array.find((item,index)=>{
    if(item.user==uname){
        return true;
    }
})
    if(loandata){
        const data=(loandata.balance*10)/100;
        if(data<=loandata.balance){
            const req=array.map((item,index)=>{
                if(item.user==uname){
                    return{
                        ...item,
                        balance:item?.balance+Number(loan),
                        deposit:Number(loan),
                        req:0,
                    }
                }else{
                    return item;
                }
            })
            console.log(req);
           setArray(req)
        }
    }    
    }



    const deleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeleteUser({
            ...deleteUser,
            [e.target.name]: e.target.value
        })
    }
    const handlerDelete = () => {
        const remove = array.find((item, index) => item.user == deleteUser.conuser && item.pin == deleteUser.conpass
        )
        if (remove) {
            const del = array.filter((item) => item.user !== deleteUser.conuser);
            console.log(del)
            setArray(del)
        } else {
            alert(
                "please enter valid details"
            )
        }
    }
    return (
        <>
            <Box sx={loginstyle.body}></Box>
            <Box sx={loginstyle.container}>
                <Box sx={loginstyle.box1}>
                    <Typography sx={{ fontSize: "30px", fontWeight: "bold", }}>Welcome back Alamin!</Typography>
                </Box>
                <Box sx={loginstyle.box2}>
                    <Box component={"img"} src='crew.png' sx={loginstyle.image}></Box>
                </Box>
                <Box sx={loginstyle.box3}>
                    <input
                        type='username'
                        placeholder='user'
                        style={{ width: "150px", height: "40px", borderRadius: "40px", textAlign: "center", marginRight: "10px" }}
                        onChange={verifyuser}
                    />
                    <input
                        type='username'
                        placeholder='PIN'
                        style={{ width: "150px", height: "40px", borderRadius: "40px", textAlign: "center", marginRight: "10px" }}
                        onChange={vrifypassword}
                    />
                    <ArrowRightAltIcon sx={loginstyle.arrow} onClick={register} />
                </Box>
            </Box>

            {res ? (
                <Box>
                    <Box sx={loginstyle.balance}>
                        <Box sx={loginstyle.box4}>
                            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>Current balance</Typography>
                            <Typography>As of 12/11/2022, {time.toLocaleTimeString()}</Typography>

                        </Box>
                        <Box sx={loginstyle.box5}>
                            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>{array.filter((item)=>(item.user==uname)).map((element,index)=>{
                                return(
                                    <Box>{element.balance}</Box>
                                )
                            })}</Typography>
                        </Box>
                    </Box>
                    <Box sx={loginstyle.transection}>
                        <Box sx={loginstyle.trs1}>
                            <Paper elevation={2} sx={loginstyle.parer1}>
                                {
                                    array.filter((item)=>(
                                        item.user===uname
                                    )).map((element, index) => {
                                        return (
                                            <Box>
                                                <Paper sx={loginstyle.withdraw} elevation={5}>
                                                    <Typography sx={loginstyle.with}>WITHDRAWL</Typography>
                                                    <Typography sx={loginstyle.date}>{date}</Typography>
                                                    <Typography sx={loginstyle.whd}>{element.withdraw}</Typography>
                                                </Paper>
                                                <Paper sx={loginstyle.deposit} elevation={5}>
                                                    <Typography sx={loginstyle.depo}>DEPOSIT</Typography>
                                                    <Typography sx={loginstyle.date}>{date}</Typography>
                                                    <Typography sx={loginstyle.whd}>{element.deposit}</Typography>
                                                </Paper>
                                            </Box>
                                        )
                                    })
                                }
                            </Paper>
                        </Box>
                        <Box sx={loginstyle.trs1}>
                            <Paper elevation={2} sx={loginstyle.parer2}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", padding: "20px 0px 0px 60px" }}>Transfer money</Typography>
                                <Box sx={{ display: "flex" }}>
                                    <Box sx={{ margin: "10px 0px 0px 50px" }}>
                                        <input
                                            name='person'

                                            value={input.person}
                                            onChange={transfermoney}
                                            style={{ width: "120px", height: "40px", textAlign: "center", borderRadius: "10px", backgroundColor: "rgb(255,219,107)", border: "1px solid rgb(255,219,107)" }}></input>
                                        <Typography sx={{ margin: "10px 0px 0px 20px" }}>Transfer to</Typography>
                                    </Box>
                                    <Box sx={{ margin: "10px 0px 0px 20px" }}>
                                        <input
                                            onChange={transfermoney}
                                            type='number'
                                            name='amount'
                                            value={input.amount}
                                            style={{ width: "120px", height: "40px", textAlign: "center", borderRadius: "10px", backgroundColor: "rgb(255,219,107)", border: "1px solid rgb(255,219,107)" }}>
                                        </input>
                                        <Typography sx={{ margin: "10px 0px 0px 20px" }}>Amount</Typography>
                                    </Box>
                                    <Box sx={{ margin: "10px 0px 0px 20px", backgroundColor: "white", height: "45px", borderRadius: "10px" }}>
                                        <Button><ArrowRightAltIcon sx={{ fontSize: "35px" }} onClick={updateAmount} /></Button>
                                    </Box>
                                </Box>
                            </Paper>
                            <Paper elevation={2} sx={loginstyle.parer3}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", padding: "20px 0px 0px 60px" }}>Request loan</Typography>
                                <Box sx={{ display: "flex" }}>
                                    <Box sx={{ margin: "10px 0px 0px 50px" }}>
                                        <input
                                            name='loan'
                                            value={loan}
                                            onChange={chageLoan}
                                            type='number'
                                            style={{ width: "120px", height: "40px", borderRadius: "10px", textAlign: "center", backgroundColor: "rgb(171,227,168)", border: "1px solid rgb(171,227,168)" }}></input>
                                        <Typography sx={{ margin: "10px 0px 0px 20px" }}>Amount</Typography>
                                    </Box>
                                    <Box sx={{ margin: "10px 0px 0px 20px", backgroundColor: "white", height: "45px", borderRadius: "10px" }}>
                                        <Button onClick={handlerLoan}><ArrowRightAltIcon sx={{ fontSize: "35px" }} /></Button>
                                    </Box>
                                </Box>
                            </Paper>
                            <Paper elevation={2} sx={loginstyle.parer4}>

                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", padding: "20px 0px 0px 60px" }}>Close account</Typography>
                                <Box sx={{ display: "flex" }}>
                                    <Box sx={{ margin: "10px 0px 0px 50px" }}>
                                        <input
                                            name='conuser'
                                            value={deleteUser.conuser}
                                            onChange={deleteChange}
                                            style={{ width: "120px", height: "40px", borderRadius: "10px", textAlign: "center", backgroundColor: "rgb(247,143,158)", border: "1px solid rgb(247,143,158)" }}></input>
                                        <Typography sx={{ margin: "10px 0px 0px 20px" }}>Confirm user</Typography>
                                    </Box>
                                    <Box sx={{ margin: "10px 0px 0px 20px" }}>
                                        <input
                                            // type='number'
                                            name='conpass'
                                            value={deleteUser.conpass}
                                            onChange={deleteChange}
                                            style={{ width: "120px", height: "40px", borderRadius: "10px", textAlign: "center", backgroundColor: "rgb(247,143,158)", border: "1px solid rgb(247,143,158)" }}>
                                        </input>
                                        <Typography sx={{ margin: "10px 0px 0px 20px" }}>Confirm PIN</Typography>
                                    </Box>
                                    <Box sx={{ margin: "10px 0px 0px 20px", backgroundColor: "white", height: "45px", borderRadius: "10px" }}>
                                        <Button onClick={handlerDelete}><ArrowRightAltIcon sx={{ fontSize: "35px" }} /></Button>
                                    </Box>
                                </Box>

                            </Paper>
                        </Box>
                    </Box>
                </Box>
            ) : ("")}

        </>
    )
}

export default Login
