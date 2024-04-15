import {Box,Typography,Button, Paper, TextField,Grid,Divider} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Img from "../Bankapp/Screenshot from 2023-11-15 12-32-54.png"
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import React, { useEffect, useState } from "react";
import User from "../users.json"

import {style} from "../Bankapp/bankapp.style"
interface Mydata{
    //   currentDate:number
}
// import { time } from "console";

export default function BankApp():any {
     const { focused } = useFormControl() || {};

     const helperText = React.useMemo(() => {
       if (focused) {
         return "This field is being focused";
       }

       return "Helper text";
     }, [focused]);
    
     const currentDate=new Date();
     const Cdate=currentDate.toLocaleDateString();
     const Time = currentDate.toLocaleTimeString();
    

    const [time,settime]=useState(new Date());
    useEffect(()=>{
        const currenTtime=setInterval(()=>{
            settime(new Date());
        },1000)
     
       return()=>
       clearInterval(currenTtime)
    },[]);
    

    
       

    const[userName,setuserName]=useState("")
     const [userPassword, setuserPassword] = useState("");
     const[userExist,setuserExist]=useState(false)
    const verifyuser=(e: { target: { value: React.SetStateAction<string>; }; })=>{
        setuserName(e.target.value)
      
    }
      const verifypassword = (e: {
        target: { value: React.SetStateAction<string> };
      }) => {
        setuserPassword(e.target.value);
      };
      const registerClick = () => {

        const userExist=User.find((User)=>
            User.name===userName && User.password===userPassword,
            // alert("loginsucess")

        )
        if(userExist){
            alert("login sucess")
        }else{
            alert("user not found")
        }
      };
    
    

     
    
  return (
    <Box>
      <Paper elevation={7} sx={style.mainbox}>
        <Typography variant="h3" sx={style.text}>
          Please Login First
        </Typography>
        <Box component={"img"} src={Img}></Box>
        <form autoComplete="off">
          <Box sx={style.form}>
            <TextField
              value={userName}
              onChange={verifyuser}
              sx={style.headerbutton}
              InputProps={{
                style: {
                  borderRadius: "50px",
                  backgroundColor: "white",
                },
              }}
              placeholder="User Name"
            ></TextField>
            <TextField
              value={userPassword}
              onChange={verifypassword}
              sx={style.headerbutton1}
              placeholder="Password"
              InputProps={{
                style: {
                  borderRadius: "50px",
                  backgroundColor: "white",
                },
              }}
            ></TextField>

            <Button onClick={registerClick}>
              {" "}
              <ArrowForwardIcon sx={{ fontSize: 60, ml: 2, mt: -1 }} />
            </Button>
          </Box>
        </form>
      </Paper>
      {userExist ? (
        <>
          <Box>
            <Box sx={style.header1}>
              <Box>
                <Typography sx={{ fontSize: 40, fontWeight: 700 }}>
                  Curent Balance
                </Typography>
                <Typography sx={{ fontSize: 20, fontWeight: 500 }}>
                  As Of {Cdate}&nbsp;&nbsp;{time.toLocaleTimeString()} AM
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <CurrencyRupeeIcon sx={{ fontSize: 50, mt: 1.5 }} />
                <Typography sx={{ fontSize: 50 }}>600000</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 7 }}>
            <Grid container>
              <Grid item lg={8}>
                <Paper elevation={7} sx={style.leftgrid}>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                    }}
                  >
                    <ListItem
                      alignItems="flex-start"
                      sx={{ overflow: "auto" }}
                    ></ListItem>
                    <Divider sx={{ width: 660, ml: -10 }} />
                  </List>
                </Paper>
              </Grid>
              <Grid item lg={4}>
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Paper
                    elevation={4}
                    sx={{ width: 450, height: 160, bgcolor: "#FFBC03" }}
                  >
                    <Box sx={{ ml: 5, mt: 2 }}>
                      <Typography sx={{ fontSize: 25, fontWeight: 700 }}>
                        Transfer Money
                      </Typography>
                      <TextField
                        sx={style.gridbutton}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                            backgroundColor: "#F3F3F3",
                          },
                        }}
                        helperText="Transfer To"
                      ></TextField>
                      <TextField
                        sx={style.gridbutton1}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                            backgroundColor: "#F3F3F3",
                          },
                        }}
                        helperText="Amount"
                      ></TextField>

                      <Button
                        onClick={registerClick}
                        sx={{
                          bgcolor: "white",
                          height: 50,
                          mt: 2,
                          width: 40,
                          ml: 2,
                        }}
                      >
                        {" "}
                        <ArrowForwardIcon sx={{ fontSize: 50, ml: 2 }} />
                      </Button>
                    </Box>
                  </Paper>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
                  <Paper
                    elevation={4}
                    sx={{ width: 450, height: 160, bgcolor: "#66C973" }}
                  >
                    <Box sx={{ ml: 5, mt: 2 }}>
                      <Typography sx={{ fontSize: 25, fontWeight: 700 }}>
                        Request Loan
                      </Typography>
                      <TextField
                        sx={style.gridbutton}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                            backgroundColor: "#F3F3F3",
                          },
                        }}
                        helperText="Amount"
                      ></TextField>

                      <Button
                        onClick={registerClick}
                        sx={{
                          bgcolor: "white",
                          height: 50,
                          mt: 2,
                          width: 40,
                          ml: 2,
                        }}
                      >
                        {" "}
                        <ArrowForwardIcon sx={{ fontSize: 50, ml: 2 }} />
                      </Button>
                    </Box>
                  </Paper>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
                  <Paper
                    elevation={4}
                    sx={{ width: 450, height: 160, bgcolor: "#F13E5C" }}
                  >
                    <Box sx={{ ml: 5, mt: 2 }}>
                      <Typography sx={{ fontSize: 25, fontWeight: 700 }}>
                        Close Account
                      </Typography>
                      <TextField
                        sx={style.gridbutton}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                            backgroundColor: "#F3F3F3",
                          },
                        }}
                        helperText="Confirm User"
                      ></TextField>
                      <TextField
                        sx={style.gridbutton1}
                        InputProps={{
                          style: {
                            borderRadius: "10px",
                            backgroundColor: "#F3F3F3",
                          },
                        }}
                        helperText="Confirm PIn"
                      ></TextField>

                      <Button
                        onClick={registerClick}
                        sx={{
                          bgcolor: "white",
                          height: 50,
                          mt: 2,
                          width: 40,
                          ml: 2,
                        }}
                      >
                        {" "}
                        <ArrowForwardIcon sx={{ fontSize: 50, ml: 2 }} />
                      </Button>
                    </Box>
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box sx={style.footer}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                mt: 5,
                fontSize: 20,
                ml: 10,
              }}
            >
              <Typography sx={{ fontSize: 17, mt: 2 }}>IN</Typography>
              <Typography component={"span"} sx={{ fontSize: 25, ml: 3 }}>
                Rs-{}
              </Typography>
              <Typography sx={{ fontSize: 20, ml: 15, mt: 2 }}>OUT</Typography>
              <Typography component={"span"} sx={{ fontSize: 25, ml: 3 }}>
                Rs-{}
              </Typography>
              <Typography sx={{ fontSize: 17, ml: 15, mt: 2 }}>
                INTEREST
              </Typography>
              <Typography component={"span"} sx={{ fontSize: 25, ml: 3 }}>
                Rs-{}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 20, padding: 5, ml: 15 }}>
                You Loged Out In {}
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        ""
      )}
    </Box>
  );
}
