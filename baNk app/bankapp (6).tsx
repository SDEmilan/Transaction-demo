import { Button,Box,Typography, Paper, Grid } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import img from "../bankapp2.tsx/assets/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import img1 from "../bankapp2.tsx/assets/Screenshot from 2023-11-20 14-26-05.png";
import  {styles}from "./bankapp.styles"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArticleIcon from '@mui/icons-material/Article';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ClearIcon from '@mui/icons-material/Clear';

import { useState } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import { Transaction  } from "./transaction";

 interface Istate{
    time:number,
    income:number,
    Modal:boolean

 }
 export interface Transaction {
    id: number;
    type: string;
    amount: number;
    timestamp: string;
    reason:string
  }

export default function Bankingapp(){
    const style = {
        position: 'absolute' as 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        bgcolor: 'background.paper',
        border: '2px solid gray',
        boxShadow: 24,
        p: 4,
        height:200
      };
       
     
 
 
 
    const [income,setIncome]=useState<Istate["income"]>(0);
   
    const [incomeModalOpen, setIncomeModalOpen] = useState<boolean>(false);
    const [expenseModalOpen, setExpenseModalOpen] = useState<boolean>(false);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [expenseAmount, setExpenseAmount] = useState<number | string>(0);
    const [expenseType, setExpenseType] = useState<string>('');
    const [expenseReason, setExpenseReason] = useState<string>('');
    const [showExpensesButton, setShowExpensesButton] = useState<boolean>(false);

    
    const openModals = () => {
       setIncomeModalOpen(true) 
        return ;
    };
    const closeModals = () => {
        setIncomeModalOpen(
        false)
    };
    const closeIncomeModal = () => {
        setIncomeModalOpen(false);
      };
   

    const handleAmountchange=(e:any)=>{
        setIncome(e.target.value)
        setExpenseModalOpen(false)
        return ;
    }
    const handleDeposit = () => {

       
        if (income > 0) {
            alert("clicked")
           
          setIncomeModalOpen(!true);
          setShowExpensesButton(true);
     
        alert("milan")
    
          const newTransaction: Transaction = {
              id: transactions.length + 1,
              type: 'income',
              amount: Number(income),
              timestamp: new Date().toLocaleTimeString(),
              reason: ""
          };
    
          setTransactions([...transactions, newTransaction]);
          setIncome(0);
        }
      };
    
    // const [expenseModalOpen, setExpenseModalOpen] = useState<boolean>(false);


  const openExpenseModal = () => {
    alert("")
    setExpenseModalOpen(true);
  };

  const closeExpenseModal = () => {
    setExpenseModalOpen(false);
  };
  
    const handleExpenseAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setExpenseAmount(e.target.value);
    };
  
    const handleExpenseTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setExpenseType(e.target.value);
    };

    
const handleExpenseReasonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpenseReason(e.target.value);
  };
  
    const handleExpense = () => {
        if (Number(expenseAmount) > 0 && expenseType.trim() !== '' && expenseReason.trim() !== '') {
          setExpenseModalOpen(false);
      
          const newTransaction: Transaction = {
            id: transactions.length + 1,
            type: expenseType,
            amount: Number(expenseAmount),
            timestamp: new Date().toLocaleTimeString(),
            reason: expenseReason, 
          };
      
          setTransactions([...transactions, newTransaction]);
          setExpenseAmount(0);
          setExpenseType('');
          setExpenseReason(''); 
        }
      };



    const totalExpenses = transactions.reduce((total, transaction) => {
        if (transaction.type !== "income") {
          return total + transaction.amount;
        }
        return total;
      }, 0);



      const totalIncome = transactions.reduce((total, transaction) => {
        if (transaction.type === "income") {
          return total + transaction.amount;
        }
        return total;
      },0);

    return(
        <Box>
          


            <Box sx={{height:70}}>
                    <Box sx={{backgroundColor:"#FFF6E6",display:"flex",justifyContent:"space-around",padding:1}}>   
                    
                      <Paper elevation={7} sx={{backgroundColor:"#FFF6E6",display:"flex",justifyContent:"space-around",padding:1,width:{lg:"100%"}}}>
                      <Avatar sx={{border:"2px solid rgb(128,61,255)",width: 56, height: 56 }} alt="Remy Sharp"  />
                        <Button variant="outlined" sx={{width:150,height:40,borderRadius:10,color:"black",border:"1px solid gray",mt:{lg:1}}}> <KeyboardArrowDownIcon sx={{color:"rgb(128,61,255)"}} /> October</Button>
                        <NotificationsIcon sx={{color:"rgb(128,61,255)",fontSize:40,mt:{lg:1}}}/>
                      </Paper>
                        
                    </Box>
                   
            </Box>
                    <Box sx={{backgroundColor:"#FFF6E6",display:"flex",alignItems:"center",flexDirection:"column",mt:{lg:2}}}>
                                <Typography sx={{mt:2,fontSize:17,fontWeight:200,ml:{lg:3}}}>Account Balnce</Typography>
                                <Typography sx={{display:"flex",alignItems:"center"}}><CurrencyRupeeIcon sx={{fontSize:30,ml:{lg:3}}}/><Typography sx={{fontSize:30,fontWeight:900}} >{totalIncome}</Typography></Typography>
                    </Box>


                <Box sx={{display:"flex",justifyContent:"space-around",flexDirection:{lg:"row"},padding:{lg:3}}}>


                    <Box  onClick={openModals} component={"button"} sx={{borderRadius:5,display:"flex",justifyContent:"space-around",flexDirection:"row",bgcolor:"#05A86B",border:"#05A86B",width:180,height:70,position:"static",ml:{lg:0}}}>
                        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column",borderRadius:5,padding:0.5,bgcolor:"white",width:60,height:40,mt:{lg:1}}}>
                            <ArrowDownwardIcon sx={{color:"#05A86B"}}/>
                            <FilterFramesIcon sx={{color:"#05A86B",mt:{lg:-0.8}}}/>
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                            <Typography sx={{color:"white",fontSize:{lg:16,},fontWeight:{lg:900}}}>Income</Typography>
                            <Typography sx={{color:"white",fontSize:{lg:20,},fontWeight:{lg:900},display:"flex",alignItems:"center",p:{lg:0.5}}}><CurrencyRupeeIcon sx={{color:"white"}}/>{totalIncome}</Typography>
                        </Box>
                    </Box>
                    {showExpensesButton && <Box  onClick={openExpenseModal} component={"button"} sx={{borderRadius:5,display:"flex",justifyContent:"space-around",flexDirection:"row",bgcolor:"red",border:"green",width:180,height:70,position:"static",mr:{lg:0}}}>
                        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column",borderRadius:5,padding:0.5,bgcolor:"white",width:60,height:40,mt:{lg:1}}}>
                            <ArrowUpwardIcon sx={{color:"red"}}/>
                            <FilterFramesIcon sx={{color:"red",mt:{lg:-0.8}}}/>
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                            <Typography sx={{color:"white",fontSize:{lg:16,},fontWeight:{lg:900},p:{lg:0.5}}}>Expencess</Typography>
                            <Typography sx={{color:"white",fontSize:{lg:20,},fontWeight:{lg:900},display:"flex",alignItems:"center"}}><CurrencyRupeeIcon sx={{color:"white"}}/>{totalExpenses}</Typography>
                        </Box>
                                      


                    </Box>
                    }

                </Box> 
              
                <Modal
                            open={expenseModalOpen}
                            onClose={closeExpenseModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <ClearIcon sx={{ fontSize: 30, fontWeight: 900, position: 'absolute', right: 0, top: 0 }} onClick={closeModals} />
                            <Box sx={{ width: 500, maxWidth: '100%', ml: { lg: 15 } }}>
                                <TextField fullWidth label="Enter Amount" id="fullWidth" sx={{ mt: { lg: 2 } }} onChange={handleExpenseAmountChange} />
                                <TextField fullWidth label="Expense Type" id="expenseType" sx={{ mt: { lg: 2 } }} onChange={handleExpenseTypeChange} />
                                <TextField
                                        fullWidth
                                        label="Expense Reason"
                                        id="expenseReason"
                                        sx={{ mt: { lg: 2 } }}
                                        onChange={handleExpenseReasonChange}
                                        />
                                <Button variant="contained" sx={{ ml: { lg: 20 }, mt: { lg: 2 } }} onClick={handleExpense}>
                                Add Expense
                                </Button>
                            </Box>
                            </Box>
                </Modal>

                <Modal
                        open={incomeModalOpen}
                        onClose={closeModals}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <ClearIcon sx={{fontSize:30,fontWeight:900,position:"absolute",right:0,top:0}} onClick={closeModals}/>
                        <Box
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                            ml:{lg:15}
                        }}
                        >
                        <TextField fullWidth label="Enter Amount" id="fullWidth" sx={{mt:{lg:2}}} onChange={handleAmountchange} />
                        <Button variant="contained" sx={{ml:{lg:20},mt:{lg:2}}} onClick={handleDeposit}>Addmoney</Button>
                        </Box>
                       
                        </Box>
                    </Modal>

                <Box sx={styles.graph}>
                    <Typography sx={styles.spend}>Spend Frequency</Typography>
                    <Box component={"img"}  sx={styles.graphimg}></Box>
                </Box>
                <Box>
                     <Box sx={{textAlign:"center"}}>
                     <Button variant="outlined" sx={styles.buttons}>Today</Button>
                    <Button variant="outlined" sx={styles.buttons}>Weak</Button>
                    <Button variant="outlined" sx={styles.buttons}>Month</Button>
                    <Button variant="outlined" sx={styles.buttons}>Year</Button>
                     </Box>
                </Box>

                <Box sx={styles.transaction}>
                    <Grid container>

                        <Grid item lg={6} xs={6} sm={6} >
                            <Typography sx={styles.recent}>Recent Transaction</Typography>
                        </Grid>
                        <Grid item lg={4} xs={4} sm={4} >
                            <Button variant="outlined" sx={styles.seeall}>See All</Button>
                        </Grid>
                    </Grid>
                   
                  
                    <Transaction transactions={transactions} />
                   
                   
                   
                </Box>

        </Box>
    )
}