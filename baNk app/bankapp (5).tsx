import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import  {styles}  from '../bankapp/bankapp.styles'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import User from "../users.json"
import img from "../bankapp/navpic.jpg"
import VisibilityIcon from '@mui/icons-material/Visibility';
interface Istate {
    array: {
        user: string;
        pin: string;
        balance: number;
        deposit: number;
        withdraw: number;
        transaction: {
            Addedeposit: number;
            LatestWithdrawl: number;
            Deposit: number;
        }[];
    }[];
}


const BankApp = () => {
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [userExist, setuserExist] = useState(false);
    const [loan, setLoan] = useState("")
    const date = new Date().toLocaleDateString();
    const [time, setTime] = useState(new Date());
    // const [array, setArray] = useState<Istate["Mydata"]>(User)
    const [countdown, setCountdown] = useState("4:59");
    let totalSeconds = 300;


    const [array, setArray] = useState<Istate["array"]>([
      {
          user: "milan1",
          pin: "1234",
          balance: 5000,
          deposit: 5000,
          withdraw: 0,
          transaction:[
            {
              Addedeposit:0,
              LatestWithdrawl:0,
              Deposit:5000,

            }
          ]

      },
      {
          user: "milan2",
          pin: "12345",
          balance: 5000,
          deposit: 0,
          withdraw: 0,
          transaction:[
            {
              Addedeposit:0,
              LatestWithdrawl:0,
              Deposit:0,

            }
          ]


      },
      {
          user: "milan3",
          pin: "123456",
          balance: 5000,
          deposit: 0,
          withdraw: 0,
          transaction:[
            {
              Addedeposit:0,
              LatestWithdrawl:0,
              Deposit:0,

            }
          ]

      },
  ])

    
  
       
    



    const [input, setInput] = useState({
        person: "",
        amount: ""
    });


    const [deleteUser, setDeleteUser] = useState(
        {
            conuser: "",
            conpass: "",
        }
    );
  

   
    useEffect(()=>{
      setTime(new Date());
     
       const currenTtime=setInterval(()=>{
          

             if (totalSeconds > 0) {
               totalSeconds--;
               let minutes = Math.floor(totalSeconds / 60);
               let seconds = totalSeconds % 60;
               let other = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
               setCountdown(other);
              
             } else if(totalSeconds <= 0 ) {
              // setCountdown("4:59")
               setuserExist(false);
              //  alert("sessetUnameion end tray again login");
               return;
               
             
             
             }
             
       },1000)

     
    
      return()=>
      clearInterval(currenTtime)

   },[1000]);



    const verifyuser = (e:  ChangeEvent<HTMLInputElement>) => {
        setUname(e.target.value)
    };
    const vrifypassword = (e:  ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };



    const registerClick = () => {
        const userExist = array.find(
            (item) => item.user === uname && item.pin === password,
            
        )


        if (userExist) {
          setuserExist(true)
            alert("login success")
        } else {
            alert("user not found")
            setUname("")
            setPassword("")
          

            setuserExist(false)
        }
        return;
    }
     
    // const registerClick = () => {

    //   const userExist = array.find(
    //     (User) => User.user === uname && User.pin === password,
    //     // alert("loginsucess")
    //     setuserExist(!false),
      
       
    //   );
    //      console.log(userExist);





      
    //   if(userExist){
    //       alert("login sucess");
    //       // setuserName:("");
    //       // setuserPassword:("");
    //   }
    //   else{
    //       alert("user not founddd")
    //        setuserExist(false);
    //   }

    // };

    const transfermoney = (e: ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    // const updateAmount = () => {


    //     const value = array.findIndex((item) => {
    //         if (item.user === input.person) {
    //             return true;
    //         }
    //     });
    //     if (value >= 0) {
    //         const update = array.map((item, index) => {
    //             if (index === value) {
    //                 return {
    //                     ...item,
    //                     user: item.user,
    //                     pin: item.pin,
    //                     withdraw:item.withdraw+ Number(input.amount),
    //                     balance: Number(item.balance) + Number(input.amount),
    //                     deposit: Number(input.amount),
    //                     transaction:[...item.transaction,{Addedeposit:Number(input.amount),Latestwithdrawl:Number(input.amount)}]
    //                 }
    //             }
    //             console.log(item.balance);
    //             if (item.user == uname) {
    //                 return {
    //                     ...item,
    //                     user: item.user,
    //                     pin: item.pin,
    //                     balance: item?.balance - Number(input.amount),
    //                     deposit:Number(input.amount),
    //                     withdraw:item.withdraw+ Number(input.amount),
    //                     transaction:[...item.transaction,{Addedeposit:Number(input.amount),Latestwithdrawl:Number(input.amount)}]
    //                 }
    //             } else {
    //                 return item
    //             }
    //         })
    //         console.log(update)
    //         // @ts-ignore
    //          setArray(update)
    //     }
        
    // }
    const updateAmount = () => {
        const senderIndex = array.findIndex((item) => item.user === uname);
        const receiverIndex = array.findIndex((item) => item.user === input.person);
    
        if (senderIndex >= 0 && receiverIndex >= 0) {
            const updatedArray = array.map((item, index) => {
                if (index === senderIndex) {
                    const senderTransaction = {
                        Addedeposit: 0,
                        LatestWithdrawl: Number(input.amount),
                        Deposit: 0,
                    };
                    return {
                        ...item,
                        balance: item.balance - Number(input.amount),
                        withdraw: item.withdraw + Number(input.amount),
                        transaction: [...item.transaction, senderTransaction],
                    };
                } else if (index === receiverIndex) {
                    const receiverTransaction = {
                        Addedeposit: Number(input.amount),
                        LatestWithdrawl: 0,
                        Deposit: 0,
                    };
                    return {
                        ...item,
                        balance: item.balance + Number(input.amount),
                        deposit: item.deposit + Number(input.amount),
                        transaction: [...item.transaction, receiverTransaction],
                    };
                } else {
                    return item;
                }
            });
    
            setArray(updatedArray);
        }
    };
    // const updateAmount = () => {
    //     const senderIndex = array.findIndex((item) => item.user === uname);
    //     const receiverIndex = array.findIndex((item) => item.user === input.person);
    
    //     if (senderIndex >= 0 && receiverIndex >= 0) {
    //         const updatedArray = array.map((item, index) => {
    //             if (index === senderIndex) {
    //                 const senderTransaction = {
    //                     Addedeposit: 0,
    //                     LatestWithdrawl: Number(input.amount),
    //                     Deposit: 0,
    //                 };
    //                 return {
    //                     ...item,
    //                     balance: item.balance - Number(input.amount),
    //                     withdraw: item.withdraw + Number(input.amount),
    //                     transaction: [...item.transaction, senderTransaction],
    //                 };
    //             } else if (index === receiverIndex) {
    //                 const receiverTransaction = {
    //                     Addedeposit: Number(input.amount),
    //                     LatestWithdrawl: 0,
    //                     Deposit: 0,
    //                 };
    //                 return {
    //                     ...item,
    //                     balance: item.balance + Number(input.amount),
    //                     deposit: item.deposit + Number(input.amount),
    //                     transaction: [...item.transaction, receiverTransaction],
    //                 };
    //             } else {
    //                 return item;
    //             }
    //         });
    
    //         setArray(updatedArray);
    //     }
    // };
    // const updateAmount = () => {
    //     const senderIndex = array.findIndex((item) => item.user === uname);
    //     const receiverIndex = array.findIndex((item) => item.user === input.person);
      
    //     if (senderIndex >= 0 && receiverIndex >= 0) {
    //       const senderTransaction = {
    //         Addedeposit: 0,
    //         LatestWithdrawl: 0,
    //         Deposit: 0,
    //       };
      
    //       const receiverTransaction = {
    //         Addedeposit: 0,
    //         LatestWithdrawl: 0,
    //         Deposit: 0,
    //       };
      
    //       if (Number(input.amount) > 0) {
    //         senderTransaction.Addedeposit = Number(input.amount);
    //         receiverTransaction.Deposit = Number(input.amount);
    //       } else {
    //         senderTransaction.LatestWithdrawl = Math.abs(Number(input.amount));
    //         receiverTransaction.LatestWithdrawl = Math.abs(Number(input.amount));
    //       }
      
    //       const updatedArray = array.map((item, index) => {
    //         if (index === senderIndex) {
    //           return {
    //             ...item,
    //             balance: item.balance - Number(input.amount),
    //             withdraw: item.withdraw + Number(input.amount),
    //             transaction: [...item.transaction, senderTransaction],
    //           };
    //         } else if (index === receiverIndex) {
    //           return {
    //             ...item,
    //             balance: item.balance + Number(input.amount),
    //             deposit: item.deposit + Number(input.amount),
    //             transaction: [...item.transaction, receiverTransaction],
    //           };
    //         } else {
    //           return item;
    //         }
    //       });
      
    //       setArray(updatedArray);
    //     }
    //   };
      

    // const updateAmount = () => {
    //   const senderIndex = array.findIndex((item) => item.user === 'milan1');
    //   const receiverIndex = array.findIndex((item) => item.user === 'milan2');
    
    //   if (senderIndex >= 0 && receiverIndex >= 0) {
    //     const senderTransaction = {
    //       Addedeposit: 0,
    //       LatestWithdrawl: Number(input.amount) > 0 ? Number(input.amount) : 0,
    //       Deposit: 0,
    //     };
    
    //     const receiverTransaction = {
    //       Addedeposit: Number(input.amount) > 0 ? Number(input.amount) : 0,
    //       LatestWithdrawl: 0,
    //       Deposit: 0,
    //     };
    
    //     const updatedArray = array.map((item, index) => {
    //       if (index === senderIndex) {
    //         return {
    //           ...item,
    //           balance: item.balance - Number(input.amount),
    //           withdraw: item.withdraw + (Number(input.amount) > 0 ? Number(input.amount) : 0),
    //           transaction: [...item.transaction, senderTransaction],
    //         };
    //       } else if (index === receiverIndex) {
    //         return {
    //           ...item,
    //           balance: item.balance + Number(input.amount),
    //           deposit: item.deposit + (Number(input.amount) > 0 ? Number(input.amount) : 0),
    //           transaction: [...item.transaction, receiverTransaction],
    //         };
    //       } else {
    //         return item;
    //       }
    //     });
    
    //     setArray(updatedArray);
    //   }
    // };
   
      

      
    
    

    
    

    const chageLoan = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoan(e.target.value);
    }
    const handlerLoan = () => {
      
    
        

    const loandata=array.find((item,index)=>{
        if(item.user===uname){
            return true;
        }
        })
    if(loandata){
        const data=(loandata.balance*10)/100;
        if(data<=loandata.balance){
            const req=array.map((item,index)=>{
                if(item.user===uname){
                    return{
                        ...item,
                        balance:item?.balance+Number(loan),
                        deposit:Number(loan),
                        req:0,
                        
                    }
                  
                  
                }else{
                  alert("amount created")
                    return item;
                }
                
            })
            setLoan("")
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
        const remove = array.find((item, index) => item.user === deleteUser.conuser && item.pin === deleteUser.conpass
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
      
            <Box>
               <Paper  sx={styles.container} elevation={7}>
               <Box sx={styles.box1}>
                    <Typography sx={{ fontSize: "35px", fontWeight: "bold"}}>Welcome
                            
                    </Typography>
                </Box>
                <Box sx={styles.box2}>
                    <Box component={"img"} src={img} sx={styles.image}></Box>
                </Box>
                <Box sx={styles.box3}>
                    <input
                        type='username'
                        placeholder='user'
                        value={uname}
                        style={{ width: "150px", height: "40px",border:"none", borderRadius: "40px ", textAlign: "center", marginRight: "10px" }}
                        onChange={verifyuser}
                    />
                    <input
                       
                        placeholder='password'
                        value={password}
                        style={{ width: "150px", height: "40px",border:"none", borderRadius: "40px", textAlign: "center", marginRight: "10px" }}
                        onChange={vrifypassword}
                    />
                     <VisibilityIcon sx={{ml:-6}}/>
                    <Button onClick={()=>registerClick()}> <ArrowRightAltIcon sx={styles.arrow}  /></Button>
                </Box>
               </Paper>
            </Box>

            {userExist ? (
                <Box sx={{ml:20,mt:-5}}>
                    <Box sx={styles.balance}>
                        <Box sx={styles.box4}>
                            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>Current balance</Typography>
                            <Typography>As of 12/11/2022, {time.toLocaleTimeString()} AM</Typography>

                        </Box>
                        <Box sx={styles.box5}>
                            <Typography sx={{ fontSize: "50px", fontWeight: "bold" }}>{array.filter((item)=>(item.user==uname)).map((element,index)=>{
                                return(
                                <Box sx={{display:"flex",alignItems:"center",ml:50}}>
                                   <CurrencyRupeeIcon sx={{fontSize:50}}/>   <Box>{element.balance}</Box>
                                </Box>
                                )
                            })}</Typography>
                        </Box>
                    </Box>
                    <Box sx={styles.transection}>
                        <Box sx={styles.trs1}>
<Paper elevation={9} sx={styles.parer1}>
    {array
        .filter((item) => item.user === uname && item.pin === password)
        .map((element, index) => {
            return (
                <Box key={index}>
                    {element.transaction.map((transaction, idx) => (
                        <Box key={idx}>
                            {transaction.Deposit > 0 && (
                                <Paper sx={styles.deposit} elevation={5}>
                                    <Typography sx={styles.depo}>Deposit</Typography>
                                    <Typography sx={styles.date}>{date}</Typography>
                                    <Typography sx={styles.whd}>{transaction.Deposit}</Typography>
                                </Paper>
                            )}
                            {transaction.LatestWithdrawl > 0 && (
                                <Paper sx={styles.withdraw} elevation={5}>
                                    <Typography sx={styles.with}>Withdraw</Typography>
                                    <Typography sx={styles.date}>{date}</Typography>
                                    <Typography sx={styles.whd}>{transaction.LatestWithdrawl}</Typography>
                                </Paper>
                            )}
                        </Box>
                    ))}
                </Box>
            );
        })}
</Paper>
{/* <Paper elevation={9} sx={styles.parer1}>mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
    {array
        .filter((item) => item.user === uname && item.pin === password)
        .map((element, index) => {
            return (
                <Box key={index}>
                    {element.transaction.map((transaction, idx) => (
                        <Box key={idx}>
                            <Paper sx={styles.deposit} elevation={5}>
                                <Typography sx={styles.depo}>
                                    {transaction.Deposit > 0 ? "Deposit" : "Withdraw"}
                                </Typography>
                                <Typography sx={styles.date}>{date}</Typography>
                                <Typography sx={styles.whd}>
                                    {transaction.Deposit > 0 ? transaction.Deposit: transaction.LatestWithdrawl}
                                </Typography>
                            </Paper>
                        </Box>
                    ))}
                </Box>
            );
        })}
</Paper> */}
 {/* <Paper elevation={9} sx={styles.parer1}>
  {array
    .filter((item) => item.user === uname && item.pin === password)
    .map((element, index) => {
      return (
        <Box key={index}>
          {element.transaction.map((transaction, idx) => (
            <Box key={idx}>
              <Paper  elevation={5}>
                <Typography >
                  {transaction.Deposit > 0 ? "Deposit" :"Withdraw" }
                </Typography>
                <Typography sx={styles.date}>{date}</Typography>
                <Typography >
                  {transaction.Deposit > 0
                    ? transaction.Deposit
                    : transaction.LatestWithdrawl}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      );
    })}
</Paper> */}











                        </Box>
                        <Box sx={styles.trs1}>
                            <Paper elevation={2} sx={styles.parer2}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", padding: "20px 0px 0px 60px",ml:-4 }}>Transfer money</Typography>
                                <Box sx={{ display: "flex",ml:-4 }}>
                                    <Box sx={{ margin: "10px 0px 0px 50px" }}>
                                        <input
                                          name='person'

                                          value={input.person}
                                            onChange={transfermoney}
                                            style={{ width: "120px", height: "40px", textAlign: "center", borderRadius: "10px", backgroundColor: "white", border: "1px solid rgb(255,219,107)" }}></input>
                                        <Typography sx={{ margin: "10px 0px 0px 20px" }}>Transfer to</Typography>
                                    </Box>
                                    <Box sx={{ margin: "10px 0px 0px 20px" }}>
                                        <input
                                            onChange={transfermoney}
                                            
                                 
                                            name='amount'
                                            value={input.amount}
                                            style={{border:"none", width: "120px", height: "40px", textAlign: "center", borderRadius: "10px", backgroundColor: "white"}}>
                                        </input>
                                        <Typography sx={{ margin: "10px 0px 0px 20px" }}>Amount</Typography>
                                    </Box>
                                    <Box sx={{ margin: "10px 0px 0px 20px", 
                                    backgroundColor: "white", height: "45px",
                                     borderRadius: "10px" }}>
                                      <Button onClick={() => updateAmount()}>
  <ArrowRightAltIcon sx={{ fontSize: "35px" }} />
</Button>

                                    </Box>
                                </Box>
                            </Paper>
                            <Paper elevation={2} sx={styles.parer3}>
                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", padding: "20px 0px 0px 60px" ,ml:-4}}>Request loan</Typography>
                                <Box sx={{ display: "flex",ml:-4  }}>
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
                            <Paper elevation={2} sx={styles.parer4}>

                                <Typography sx={{ fontSize: "20px", fontWeight: "bold", padding: "20px 0px 0px 60px" ,ml:-4}}>Close account</Typography>
                                <Box sx={{ display: "flex",ml:-4  }}>
                                    <Box sx={{ margin: "10px 0px 0px 50px" }}>
                                        <input
                                            name='conuser'
                                            value={deleteUser.conuser}
                                            onChange={deleteChange}
                                            style={{ width: "120px",
                                             height: "40px", 
                                             
                                             borderRadius: "10px",
                                              textAlign: "center",
                                               backgroundColor: "rgb(247,143,158)", 
                                               border: "1px solid rgb(247,143,158)" }}></input>
                                        <Typography sx={{ margin: "10px 0px 0px 20px" }}>user Name</Typography>
                                    </Box>
                                    <Box sx={{ margin: "10px 0px 0px 20px" }}>
                                        <input
                                            // type='number'
                                            name='conpass'
                                            value={deleteUser.conpass}
                                            onChange={deleteChange}
                                            style={{ width: "120px", height: "40px", borderRadius: "10px", textAlign: "center", backgroundColor: "rgb(247,143,158)", border: "1px solid rgb(247,143,158)" }}>
                                        </input>
                                        <Typography sx={{ margin: "10px 0px 0px 20px" }}>Password</Typography>
                                    </Box>
                                    <Box sx={{ 
                                      margin: "10px 0px 0px 20px", 
                                      backgroundColor: "white",
                                       height: "45px", 
                                       borderRadius: "10px" }}>
                                        <Button onClick={handlerDelete}><ArrowRightAltIcon sx={{ fontSize: "35px" }} /></Button>
                                    </Box>
                                </Box>

                            </Paper>
                        </Box>
                    </Box>
                <Box  sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: -2,
                fontSize: 20,
                ml: -8,
              }}>
                    <Box
                     sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      mt: 5,
                      fontSize: 20,
                      ml: 0,
                    }}
             
            >
              <Typography sx={{ fontSize: 17, mt: 2, color: "green",ml:-10 }}>
                IN
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: 25,  color: "green",ml:3 }}
              >
                Rs + {array.filter((item)=>(item.user===uname)).map((element,index)=>{
                                return(
                        
                                   <Box sx={{ml:7,mt:-5}}>{element.deposit}</Box>
                      
                                )
                            })}
                  </Typography>
            
              <Typography sx={{ fontSize: 20,  mt: 2, color: "red" ,ml:20}}>
                OUT
              </Typography>
              <Typography
                component={"span"}
                sx={{ fontSize: 25,  color: "red",ml:3 }}
              >
                Rs - {array.filter((item)=>(item.user===uname)).map((element,index)=>{
                                return(
                      
                                   <Box sx={{ml:7,mt:-5}}>{element.withdraw}</Box>
                                
                                )
                            })}
              </Typography>
             
             <Typography sx={{ fontSize: 17, mt: 2,ml:15 }}>
                Total
              </Typography>
              <Typography component={"span"} sx={{ fontSize: 25, ml: 3 }}>
                Rs-{array.filter((item)=>(item.user===uname)).map((element,index)=>{
                                return(
                             
                                   <Box sx={{ml:7,mt:-5}}>{element.balance}</Box>
                               
                                )
                            })}
              </Typography>
         
            </Box>
            <Box>
              <Typography sx={{ fontSize: 20, padding: 5, ml: -20 }}>
                You Loged Out In {countdown}
              </Typography>
            </Box>
            </Box>
          </Box>
                
            ) : ("")}

        </>
    )
}

export default BankApp ;