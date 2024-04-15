
import { Button,Box,Typography, Paper, Grid } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import img from "../bankapp2.tsx/assets/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import img1 from "../bankapp2.tsx/assets/Screenshot from 2023-11-20 14-26-05.png";
import {styles} from "../bankapp2.tsx/bankingapp.style";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArticleIcon from '@mui/icons-material/Article';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

import { useState } from "react";

export default function Transaction(){

    const [time, setTime] = useState(new Date());
    return(
        <>
        <Paper elevation={5} sx={{overflow:"auto",height:300,width:{lg:870},ml:{lg:27},padding:3,mt:{lg:2}}}>
                    <Paper elevation={2} sx={{width:{lg:850},height:{lg:70},ml:{lg:0},mt:{lg:2}}}>
                        <Grid container>
                                <Grid item lg={6} xs={6} sm={6} >
                                    <Box sx={styles.shoping}>
                                    
                                            <Avatar variant="rounded" sx={{color:"#FCAC11",bgcolor:"#FDEED4"}}><AddShoppingCartIcon/></Avatar>
                                            <Box sx={{ml:{lg:2}}}>
                                            <Typography sx={{fontSize:{lg:20},fontWeight:900}}>Shooping</Typography>
                                            <Typography sx={{fontSize:{lg:15}}}>By some grocery</Typography>
                                            </Box>
                                            
                                    
                                    </Box>


                                </Grid>
                                <Grid item lg={4} xs={4} sm={4} >
                                <Typography sx={{color:"black",fontSize:{lg:20,},fontWeight:{lg:900},display:"flex",alignItems:"center", ml:{lg:40},mt:{lg:1}}}>-<CurrencyRupeeIcon />5000</Typography>
                                <Typography sx={{ml:{lg:40}}}>  {time.toLocaleTimeString()}AM</Typography>
                                </Grid>
                        </Grid>
                    </Paper>
                    <Paper elevation={2} sx={{width:{lg:850},height:{lg:70},ml:{lg:0},mt:{lg:2}}}>
                        <Grid container>
                                <Grid item lg={6} xs={6} sm={6} >
                                    <Box sx={styles.shoping}>
                                    
                                            <Avatar variant="rounded" sx={{color:"#7B28FF",bgcolor:"#EEE5FF"}}><ArticleIcon/></Avatar>
                                            <Box sx={{ml:{lg:2}}}>
                                            <Typography sx={{fontSize:{lg:20},fontWeight:900}}>Subscription</Typography>
                                            <Typography  sx={{fontSize:{lg:15}}}>Disney + Annual...</Typography>
                                            </Box>
                                            
                                    
                                    </Box>


                                </Grid>
                                <Grid item lg={4} xs={4} sm={4} >
                                <Typography sx={{color:"black",fontSize:{lg:20,},fontWeight:{lg:900},display:"flex",alignItems:"center", ml:{lg:40},mt:{lg:1}}}>-<CurrencyRupeeIcon />5000</Typography>
                                <Typography sx={{ml:{lg:40}}}>  {time.toLocaleTimeString()}AM</Typography>
                                </Grid>
                        </Grid>
                    </Paper>
                    <Paper elevation={2} sx={{width:{lg:850},height:{lg:70},ml:{lg:0},mt:{lg:2}}}>
                        <Grid container>
                                <Grid item lg={6} xs={6} sm={6} >
                                    <Box sx={styles.shoping}>
                                    
                                            <Avatar variant="rounded" sx={{color:"red",bgcolor:"#FDD6D7"}}><LunchDiningIcon/></Avatar>
                                            <Box sx={{ml:{lg:2}}}>
                                            <Typography sx={{fontSize:{lg:20},fontWeight:900}}>Food</Typography>
                                            <Typography  sx={{fontSize:{lg:15}}}>By some foods</Typography>
                                            </Box>
                                            
                                    
                                    </Box>


                                </Grid>
                                <Grid item lg={4} xs={4} sm={4} >
                                
                                <Typography sx={{color:"black",fontSize:{lg:20,},fontWeight:{lg:900},display:"flex",alignItems:"center", ml:{lg:40},mt:{lg:1}}}>-<CurrencyRupeeIcon />5000</Typography>
                                <Typography sx={{ml:{lg:40}}}>  {time.toLocaleTimeString()}AM</Typography>
                                </Grid>

                        </Grid>
                    </Paper>
                    <Paper elevation={2} sx={{width:{lg:850},height:{lg:70},ml:{lg:0},mt:{lg:2}}}>
                        <Grid container>
                                <Grid item lg={6} xs={6} sm={6} >
                                    <Box sx={styles.shoping}>
                                    
                                            <Avatar variant="rounded" sx={{color:"#FCAC11",bgcolor:"#FDEED4"}}><AddShoppingCartIcon/></Avatar>
                                            <Box sx={{ml:{lg:2}}}>
                                            <Typography sx={{fontSize:{lg:20},fontWeight:900}}>Shooping</Typography>
                                            <Typography  sx={{fontSize:{lg:15}}}>By some grocery</Typography>
                                            </Box>
                                            
                                    
                                    </Box>


                                </Grid>
                                <Grid item lg={4} xs={4} sm={4} >
                                
                                <Typography sx={{color:"black",fontSize:{lg:20,},fontWeight:{lg:900},display:"flex",alignItems:"center", ml:{lg:40},mt:{lg:1}}}>-<CurrencyRupeeIcon />5000</Typography>
                                <Typography sx={{ml:{lg:40}}}>  {time.toLocaleTimeString()}AM</Typography>
                                </Grid>

                        </Grid>
                    </Paper>
                    <Paper elevation={2} sx={{width:{lg:850},height:{lg:70},ml:{lg:0},mt:{lg:2}}}>
                        <Grid container>
                                <Grid item lg={6} xs={6} sm={6} >
                                    <Box sx={styles.shoping}>
                                    
                                            <Avatar variant="rounded" sx={{color:"#FCAC11",bgcolor:"#FDEED4"}}><AddShoppingCartIcon/></Avatar>
                                            <Box sx={{ml:{lg:2}}}>
                                            <Typography sx={{fontSize:{lg:20},fontWeight:900}}>Shooping</Typography>
                                            <Typography  sx={{fontSize:{lg:15}}}>By some grocery</Typography>
                                            </Box>
                                            
                                    
                                    </Box>


                                </Grid>
                                <Grid item lg={4} xs={4} sm={4} >
                                
                                <Typography sx={{color:"black",fontSize:{lg:20,},fontWeight:{lg:900},display:"flex",alignItems:"center", ml:{lg:40},mt:{lg:1}}}>-<CurrencyRupeeIcon />5000</Typography>
                                <Typography sx={{ml:{lg:40}}}>  {time.toLocaleTimeString()}AM</Typography>
                                </Grid>

                        </Grid>
                    </Paper>
                    
                    
                 </Paper>
                 </>
    )
}